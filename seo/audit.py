"""
PhyFix SEO Suite — Tool 1: Automated Site Auditor
Crawls all pages and identifies SEO issues: missing H1, alt-text, meta descriptions.
For React SPAs, also performs source-file analysis.
"""

import os
import re
import json
import requests
from bs4 import BeautifulSoup
from colorama import Fore, Style, init
from config import DEV_URL, STATIC_ROUTES, TOPIC_SLUGS, ALL_ROUTES, SITE_URL

init(autoreset=True)

HEADERS = {
    "User-Agent": "PhyFix-SEO-Auditor/1.0 (+https://phyfix.com/robots.txt)",
    "Accept": "text/html,application/xhtml+xml",
}

def fetch_page(url: str, timeout: int = 8) -> BeautifulSoup | None:
    try:
        resp = requests.get(url, headers=HEADERS, timeout=timeout)
        resp.raise_for_status()
        return BeautifulSoup(resp.text, "lxml")
    except Exception as e:
        print(f"  {Fore.RED}✗ Fetch failed: {e}{Style.RESET_ALL}")
        return None


def audit_html(soup: BeautifulSoup, route: str) -> dict:
    issues = []
    warnings = []
    passed = []

    # Title tag
    title = soup.find("title")
    if not title or not title.text.strip():
        issues.append("Missing <title> tag")
    elif len(title.text.strip()) < 20:
        warnings.append(f"Title too short ({len(title.text.strip())} chars): '{title.text.strip()}'")
    elif len(title.text.strip()) > 70:
        warnings.append(f"Title too long ({len(title.text.strip())} chars) — may be truncated in SERPs")
    else:
        passed.append(f"Title OK: '{title.text.strip()[:60]}'")

    # Meta description
    desc = soup.find("meta", attrs={"name": "description"})
    if not desc or not desc.get("content", "").strip():
        issues.append("Missing meta description")
    elif len(desc["content"].strip()) < 50:
        warnings.append(f"Meta description too short ({len(desc['content'])} chars)")
    elif len(desc["content"].strip()) > 165:
        warnings.append(f"Meta description too long ({len(desc['content'])} chars) — will be truncated")
    else:
        passed.append(f"Meta description OK ({len(desc['content'])} chars)")

    # Canonical URL
    canonical = soup.find("link", attrs={"rel": "canonical"})
    if not canonical or not canonical.get("href"):
        warnings.append("Missing canonical URL")
    else:
        passed.append(f"Canonical: {canonical['href']}")

    # OG tags
    og_title = soup.find("meta", attrs={"property": "og:title"})
    og_desc = soup.find("meta", attrs={"property": "og:description"})
    if not og_title:
        warnings.append("Missing og:title")
    if not og_desc:
        warnings.append("Missing og:description")
    if og_title and og_desc:
        passed.append("Open Graph tags present")

    # H1 tag
    h1s = soup.find_all("h1")
    if not h1s:
        issues.append("No H1 tag found — critical for SEO")
    elif len(h1s) > 1:
        warnings.append(f"Multiple H1 tags found ({len(h1s)}) — only one recommended")
    else:
        passed.append(f"H1 OK: '{h1s[0].text.strip()[:50]}'")

    # Images alt text
    images = soup.find_all("img")
    missing_alt = [img.get("src", "unknown")[:40] for img in images if not img.get("alt")]
    if missing_alt:
        issues.append(f"Images missing alt text ({len(missing_alt)}): {missing_alt[:3]}")
    elif images:
        passed.append(f"All {len(images)} images have alt text")

    # JSON-LD structured data
    jsonld_scripts = soup.find_all("script", attrs={"type": "application/ld+json"})
    if jsonld_scripts:
        for s in jsonld_scripts:
            try:
                data = json.loads(s.string or "{}")
                schema_types = []
                if "@graph" in data:
                    schema_types = [n.get("@type", "?") for n in data["@graph"]]
                elif "@type" in data:
                    schema_types = [data["@type"]]
                passed.append(f"JSON-LD found: {schema_types}")
            except json.JSONDecodeError:
                warnings.append("Malformed JSON-LD script found")
    else:
        warnings.append("No JSON-LD structured data found on this page")

    return {
        "route": route,
        "issues": issues,
        "warnings": warnings,
        "passed": passed,
        "score": max(0, 100 - len(issues) * 20 - len(warnings) * 5),
    }


def audit_source_files() -> list[dict]:
    """Analyse React source files to find SEO issues beyond what crawling can see."""
    results = []
    pages_dir = "client/src/pages"
    landing_dir = os.path.join(pages_dir, "landing")

    def check_file(filepath: str, label: str) -> dict:
        issues = []
        warnings = []
        passed = []
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            if "useSeo" in content:
                passed.append("useSeo hook present")
                if 'title:' in content:
                    passed.append("Custom title set")
                if 'description:' in content:
                    passed.append("Meta description set")
                if 'keywords:' in content:
                    passed.append("Keywords set")
                else:
                    warnings.append("No keywords in useSeo call")
                if 'canonical:' in content:
                    passed.append("Canonical URL set")
                else:
                    warnings.append("No canonical URL in useSeo call")
            else:
                issues.append("useSeo hook NOT used — page has no custom meta tags")

            if re.search(r'<h1[^>]*>', content, re.IGNORECASE):
                passed.append("H1 tag found in JSX")
            else:
                issues.append("No H1 tag in JSX")

            img_tags = re.findall(r'<img[^>]+>', content, re.IGNORECASE)
            missing_alt_imgs = [img for img in img_tags if 'alt=' not in img]
            if missing_alt_imgs:
                issues.append(f"{len(missing_alt_imgs)} <img> tag(s) missing alt attribute")
            elif img_tags:
                passed.append(f"All {len(img_tags)} img tags have alt attribute")

        except FileNotFoundError:
            issues.append(f"Source file not found: {filepath}")

        return {
            "file": label,
            "issues": issues,
            "warnings": warnings,
            "passed": passed,
            "score": max(0, 100 - len(issues) * 20 - len(warnings) * 5),
        }

    page_files = {
        "Home": os.path.join(pages_dir, "Home.tsx"),
        "Teachers": os.path.join(pages_dir, "TeacherList.tsx"),
        "Blog": os.path.join(pages_dir, "Blog.tsx"),
        "BlogPost": os.path.join(pages_dir, "BlogPost.tsx"),
        "Contact": os.path.join(pages_dir, "Contact.tsx"),
        "About": os.path.join(pages_dir, "About.tsx"),
        "Resources": os.path.join(pages_dir, "Resources.tsx"),
        "Practice": os.path.join(pages_dir, "Practice.tsx"),
        "TopicPage": os.path.join(pages_dir, "TopicPage.tsx"),
        "IbPhysicsTutor": os.path.join(landing_dir, "IbPhysicsTutor.tsx"),
        "IgcseMathTutor": os.path.join(landing_dir, "IgcseMathTutor.tsx"),
        "ALevelPhysicsTutor": os.path.join(landing_dir, "ALevelPhysicsTutor.tsx"),
        "PhysicsClasses": os.path.join(landing_dir, "PhysicsClasses.tsx"),
        "MathsClasses": os.path.join(landing_dir, "MathsClasses.tsx"),
        "FreeDemo": os.path.join(landing_dir, "FreeDemo.tsx"),
    }

    for label, filepath in page_files.items():
        results.append(check_file(filepath, label))

    return results


def run_audit(use_live: bool = True) -> dict:
    print(f"\n{Fore.CYAN}{'═'*60}")
    print(f"  PhyFix SEO Auditor — Source Analysis")
    print(f"{'═'*60}{Style.RESET_ALL}\n")

    results = {"source_audit": [], "http_audit": [], "summary": {}}

    # 1. Source file analysis
    print(f"{Fore.YELLOW}● Source File Analysis{Style.RESET_ALL}")
    source_results = audit_source_files()
    results["source_audit"] = source_results

    total_issues = 0
    total_warnings = 0
    for r in source_results:
        score_color = Fore.GREEN if r["score"] >= 80 else (Fore.YELLOW if r["score"] >= 60 else Fore.RED)
        print(f"\n  {score_color}[{r['score']:3d}]{Style.RESET_ALL}  {r['file']}")
        for issue in r["issues"]:
            print(f"         {Fore.RED}✗ {issue}{Style.RESET_ALL}")
            total_issues += 1
        for warn in r["warnings"]:
            print(f"         {Fore.YELLOW}⚠ {warn}{Style.RESET_ALL}")
            total_warnings += 1
        for ok in r["passed"][:2]:
            print(f"         {Fore.GREEN}✓ {ok}{Style.RESET_ALL}")

    # 2. HTTP crawl of dev server (if requested)
    if use_live:
        print(f"\n{Fore.YELLOW}● HTTP Crawl — Dev Server ({DEV_URL}){Style.RESET_ALL}")
        sample_routes = STATIC_ROUTES[:5] + [f"/topics/{TOPIC_SLUGS[0]}"]
        http_results = []
        for route in sample_routes:
            url = DEV_URL + route
            print(f"\n  Fetching: {url}")
            soup = fetch_page(url)
            if soup:
                result = audit_html(soup, route)
                http_results.append(result)
                score_color = Fore.GREEN if result["score"] >= 80 else (Fore.YELLOW if result["score"] >= 60 else Fore.RED)
                print(f"  {score_color}Score: {result['score']}/100{Style.RESET_ALL}")
                for issue in result["issues"]:
                    print(f"    {Fore.RED}✗ {issue}{Style.RESET_ALL}")
                for warn in result["warnings"]:
                    print(f"    {Fore.YELLOW}⚠ {warn}{Style.RESET_ALL}")

        results["http_audit"] = http_results

    # Summary
    avg_score = sum(r["score"] for r in source_results) / max(1, len(source_results))
    results["summary"] = {
        "pages_audited": len(source_results),
        "total_issues": total_issues,
        "total_warnings": total_warnings,
        "average_score": round(avg_score, 1),
    }

    print(f"\n{Fore.CYAN}{'─'*60}")
    print(f"  Summary: {len(source_results)} pages | {total_issues} issues | {total_warnings} warnings")
    score_color = Fore.GREEN if avg_score >= 80 else (Fore.YELLOW if avg_score >= 60 else Fore.RED)
    print(f"  Average SEO Score: {score_color}{avg_score:.1f}/100{Style.RESET_ALL}")
    print(f"{'─'*60}{Style.RESET_ALL}")

    return results


if __name__ == "__main__":
    run_audit(use_live=False)
