"""
PhyFix SEO Optimization Suite — Main Orchestrator
Run all five SEO tools in sequence with a unified report.

Usage:
  python3 seo/run_all.py              # Run all tools (template-based meta)
  python3 seo/run_all.py --llm        # Run with Groq LLM for meta generation
  python3 seo/run_all.py --audit-only # Run audit only
  python3 seo/run_all.py --schema     # Generate schemas only
  python3 seo/run_all.py --sitemap    # Regenerate sitemap only
"""

import sys
import os
import time
from datetime import datetime
from colorama import Fore, Style, init

# Add seo/ directory to path so modules can import each other
sys.path.insert(0, os.path.dirname(__file__))

init(autoreset=True)


def banner():
    print(f"""
{Fore.CYAN}╔══════════════════════════════════════════════════════════╗
║       PhyFix SEO Optimization Suite v1.0                ║
║       https://phyfix.com                                 ║
║       {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}                          ║
╚══════════════════════════════════════════════════════════╝{Style.RESET_ALL}

  Tools:
  1. Automated Site Auditor        (audit.py)
  2. SGE-Ready Meta Generator      (meta_generator.py)
  3. Structured Data Factory       (schema_factory.py)
  4. Internal Link Mapper          (link_mapper.py)
  5. Sitemap & Robots.txt Gen      (sitemap_gen.py)
""")


def separator(title: str):
    print(f"\n{Fore.MAGENTA}╔══════════════════════════════════════════════════════════╗")
    print(f"║  {title:<54}  ║")
    print(f"╚══════════════════════════════════════════════════════════╝{Style.RESET_ALL}")


def run_all(args: list[str]):
    banner()

    use_llm = "--llm" in args
    audit_only = "--audit-only" in args
    schema_only = "--schema" in args
    sitemap_only = "--sitemap" in args

    results = {}
    start_time = time.time()

    os.makedirs("seo/output", exist_ok=True)
    os.makedirs("seo/output/schemas", exist_ok=True)

    # ── Tool 1: Site Audit ────────────────────────────────────────
    separator("TOOL 1 / 5 — Automated Site Auditor")
    from audit import run_audit
    audit_results = run_audit(use_live=False)
    results["audit"] = audit_results

    if audit_only:
        _print_summary(results, time.time() - start_time)
        return results

    # ── Tool 2: Meta Generator ───────────────────────────────────
    separator("TOOL 2 / 5 — SGE-Ready Meta Generator")
    from meta_generator import run_meta_generator
    meta_results = run_meta_generator(use_llm=use_llm)
    results["meta"] = meta_results

    if schema_only:
        separator("TOOL 3 / 5 — Structured Data Factory")
        from schema_factory import run_schema_factory
        schema_results = run_schema_factory()
        results["schema"] = schema_results
        _print_summary(results, time.time() - start_time)
        return results

    # ── Tool 3: Schema Factory ───────────────────────────────────
    separator("TOOL 3 / 5 — Structured Data Factory")
    from schema_factory import run_schema_factory
    schema_results = run_schema_factory()
    results["schema"] = schema_results

    # ── Tool 4: Link Mapper ──────────────────────────────────────
    separator("TOOL 4 / 5 — Internal Link Mapper")
    from link_mapper import run_link_mapper
    link_results = run_link_mapper()
    results["links"] = link_results

    # ── Tool 5: Sitemap & Robots.txt ─────────────────────────────
    if sitemap_only:
        separator("TOOL 5 / 5 — Sitemap & Robots.txt Generator")
        from sitemap_gen import run_sitemap_generator
        sitemap_results = run_sitemap_generator()
        results["sitemap"] = sitemap_results
        _print_summary(results, time.time() - start_time)
        return results

    separator("TOOL 5 / 5 — Sitemap & Robots.txt Generator")
    from sitemap_gen import run_sitemap_generator
    sitemap_results = run_sitemap_generator()
    results["sitemap"] = sitemap_results

    _print_summary(results, time.time() - start_time)
    return results


def _print_summary(results: dict, elapsed: float):
    print(f"\n{Fore.CYAN}{'═'*60}")
    print(f"  PhyFix SEO Suite — Final Report")
    print(f"  Completed in {elapsed:.1f}s")
    print(f"{'═'*60}{Style.RESET_ALL}\n")

    # Audit summary
    if "audit" in results:
        a = results["audit"].get("summary", {})
        issues = a.get("total_issues", "?")
        warnings = a.get("total_warnings", "?")
        score = a.get("average_score", "?")
        issues_color = Fore.RED if isinstance(issues, int) and issues > 0 else Fore.GREEN
        score_color = Fore.GREEN if isinstance(score, float) and score >= 80 else Fore.YELLOW
        print(f"  1. Site Audit:        {issues_color}{issues} issues{Style.RESET_ALL} | {Fore.YELLOW}{warnings} warnings{Style.RESET_ALL} | Avg score: {score_color}{score}/100{Style.RESET_ALL}")

    # Meta summary
    if "meta" in results:
        count = len(results["meta"])
        print(f"  2. Meta Generator:    {Fore.GREEN}{count} topic pages + static pages generated{Style.RESET_ALL}")
        print(f"                        → seo/output/meta_tags.json")

    # Schema summary
    if "schema" in results:
        schemas = list(results["schema"].keys())
        print(f"  3. Schema Factory:    {Fore.GREEN}{len(schemas)} schema files generated{Style.RESET_ALL}")
        print(f"                        → seo/output/schemas/")

    # Links summary
    if "links" in results:
        orphans = results["links"].get("orphans", [])
        opps = len(results["links"].get("linking_opportunities", []))
        orphan_color = Fore.RED if orphans else Fore.GREEN
        print(f"  4. Link Mapper:       {orphan_color}{len(orphans)} orphan pages{Style.RESET_ALL} | {Fore.CYAN}{opps} link opportunities{Style.RESET_ALL}")
        print(f"                        → seo/output/link_map.json")

    # Sitemap summary
    if "sitemap" in results:
        v = results["sitemap"].get("validation", {})
        url_count = v.get("url_count", "?")
        valid = v.get("valid_xml", False)
        valid_str = f"{Fore.GREEN}✓ Valid{Style.RESET_ALL}" if valid else f"{Fore.RED}✗ Invalid{Style.RESET_ALL}"
        print(f"  5. Sitemap:           {valid_str} | {Fore.GREEN}{url_count} URLs{Style.RESET_ALL}")
        print(f"                        → client/public/sitemap.xml")
        print(f"                        → client/public/robots.txt")

    print(f"\n  {Fore.YELLOW}📋 Action Items:{Style.RESET_ALL}")
    print(f"  • Submit updated sitemap to Google Search Console & Bing Webmaster")
    print(f"  • Test homepage schema at search.google.com/test/rich-results")
    print(f"  • Apply linking opportunities from seo/output/link_map.json")
    print(f"  • Add GROQ_API_KEY secret to enable LLM-powered meta generation (--llm flag)")
    print(f"  • Add Bing verification code to client/index.html (placeholder already added)")
    print(f"\n  {Fore.CYAN}Output files in: seo/output/{Style.RESET_ALL}\n")


if __name__ == "__main__":
    run_all(sys.argv[1:])
