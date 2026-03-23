"""
PhyFix SEO Suite — Tool 4: Internal Link Mapper
Scans source files to identify orphan pages (no inbound links),
suggests internal linking opportunities for topical authority,
and generates a full link graph for the site.
"""

import os
import re
from collections import defaultdict
from colorama import Fore, Style, init
from config import ALL_ROUTES, STATIC_ROUTES, TOPIC_SLUGS, SITE_URL

init(autoreset=True)


def extract_links_from_file(filepath: str) -> list[str]:
    """Extract all href/to links from a React TSX/JSX file."""
    links = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
        # Link href patterns: href="/...", href={`/...`}, to="/...", Link href="/..."
        patterns = [
            r'href=["\']([/][^"\']+)["\']',
            r'href=\{`([/][^`]+)`\}',
            r'to=["\']([/][^"\']+)["\']',
            r'<Link[^>]+href=["\']([/][^"\']+)["\']',
        ]
        for pattern in patterns:
            found = re.findall(pattern, content)
            links.extend(found)
    except FileNotFoundError:
        pass
    return list(set(links))


def scan_all_source_files() -> dict:
    """Scan all React source files and build a link graph."""
    src_dir = "client/src"
    link_graph = {}  # page -> [links it contains]
    file_map = {}    # route -> source file path

    # Map routes to files
    page_file_map = {
        "/": "client/src/pages/Home.tsx",
        "/teachers": "client/src/pages/TeacherList.tsx",
        "/about": "client/src/pages/About.tsx",
        "/blog": "client/src/pages/Blog.tsx",
        "/contact": "client/src/pages/Contact.tsx",
        "/resources": "client/src/pages/Resources.tsx",
        "/practice": "client/src/pages/Practice.tsx",
        "/pricing": "client/src/pages/Pricing.tsx",
        "/how-it-works": "client/src/pages/HowItWorks.tsx",
        "/become-tutor": "client/src/pages/BecomeTutor.tsx",
        "/free-demo": "client/src/pages/landing/FreeDemo.tsx",
        "/physics-classes": "client/src/pages/landing/PhysicsClasses.tsx",
        "/maths-classes": "client/src/pages/landing/MathsClasses.tsx",
        "/ib-physics-tutor": "client/src/pages/landing/IbPhysicsTutor.tsx",
        "/igcse-math-tutor": "client/src/pages/landing/IgcseMathTutor.tsx",
        "/a-level-physics-tutor": "client/src/pages/landing/ALevelPhysicsTutor.tsx",
        "/online-math-tutor": "client/src/pages/landing/OnlineMathTutor.tsx",
        **{f"/topics/{slug}": "client/src/pages/TopicPage.tsx" for slug in TOPIC_SLUGS},
    }

    # Also scan shared components for links
    component_files = [
        "client/src/components/Layout.tsx",
        "client/src/App.tsx",
    ]

    # Build link graph from each page file
    for route, filepath in page_file_map.items():
        links = extract_links_from_file(filepath)
        # Normalize topic links — TopicPage renders all /topics/:slug routes
        if route.startswith("/topics/"):
            links = extract_links_from_file("client/src/pages/TopicPage.tsx")
            # Replace :slug placeholder with actual slug
            slug = route.replace("/topics/", "")
            # Check topics.ts for relatedSlugs
            links = get_topic_outbound_links(slug)
        link_graph[route] = links
        file_map[route] = filepath

    # Get Layout.tsx links (these appear on every page)
    layout_links = []
    for cf in component_files:
        layout_links.extend(extract_links_from_file(cf))
    layout_links = list(set(layout_links))

    return link_graph, layout_links, page_file_map


def get_topic_outbound_links(slug: str) -> list[str]:
    """Parse topics.ts to get relatedSlugs for a given topic."""
    try:
        with open("client/src/data/topics.ts", "r", encoding="utf-8") as f:
            content = f.read()
        # Find the topic block containing this slug
        pattern = rf'slug:\s*["\']({re.escape(slug)})["\'].*?relatedSlugs:\s*\[(.*?)\]'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            slugs_str = match.group(2)
            related = re.findall(r'["\']([^"\']+)["\']', slugs_str)
            return [f"/topics/{s}" for s in related] + ["/teachers", "/free-demo"]
    except Exception:
        pass
    return ["/teachers", "/free-demo", "/physics-classes"]


def build_inbound_map(link_graph: dict, layout_links: list[str]) -> dict:
    """Build map of inbound links for each route."""
    inbound = defaultdict(list)

    # Layout links appear on every page
    for route in link_graph:
        for link in layout_links:
            # Normalize: strip query params and anchors
            clean_link = link.split("?")[0].split("#")[0]
            if clean_link in link_graph:
                inbound[clean_link].append(f"[Layout/Nav]")

    # Page-level links
    for source_route, outbound_links in link_graph.items():
        for link in outbound_links:
            clean_link = link.split("?")[0].split("#")[0]
            if clean_link in link_graph:
                inbound[clean_link].append(source_route)

    return dict(inbound)


def find_orphan_pages(link_graph: dict, inbound_map: dict, layout_links: list[str]) -> list[str]:
    """Find pages that have no inbound links from other pages (excluding nav/layout)."""
    orphans = []
    normalized_layout = {l.split("?")[0].split("#")[0] for l in layout_links}

    for route in link_graph:
        inbound_from_layout = route in normalized_layout
        inbound_from_pages = any(
            src for src in inbound_map.get(route, []) if src != "[Layout/Nav]"
        )
        if not inbound_from_layout and not inbound_from_pages:
            orphans.append(route)
    return orphans


LINKING_OPPORTUNITIES = [
    {
        "target": "/topics/igcse-maths-algebra-tutor",
        "anchor": "simultaneous equations help",
        "reason": "IGCSE Maths Algebra page covers simultaneous equations — high-value query",
        "suggested_sources": ["/maths-classes", "/igcse-math-tutor", "/topics/igcse-maths-geometry-tutor"],
    },
    {
        "target": "/topics/ap-physics-1-energy-tutor",
        "anchor": "physics momentum tutor",
        "reason": "AP Physics Energy & Momentum page — directly targets 'physics momentum' query",
        "suggested_sources": ["/physics-classes", "/topics/ap-physics-1-dynamics-tutor", "/topics/ap-physics-1-kinematics-tutor"],
    },
    {
        "target": "/topics/igcse-maths-statistics-tutor",
        "anchor": "IGCSE probability help",
        "reason": "IGCSE Stats & Probability page covers probability trees — frequently searched",
        "suggested_sources": ["/maths-classes", "/igcse-math-tutor", "/topics/igcse-maths-algebra-tutor"],
    },
    {
        "target": "/topics/ib-physics-mechanics-tutor",
        "anchor": "IB physics mechanics tutor",
        "reason": "IB Physics Mechanics is the most searched IB Physics query globally",
        "suggested_sources": ["/ib-physics-tutor", "/physics-classes", "/topics/ib-physics-waves-tutor"],
    },
    {
        "target": "/topics/a-level-physics-fields-tutor",
        "anchor": "A-Level physics fields help",
        "reason": "Fields is the hardest A-Level topic — high search intent + low competition",
        "suggested_sources": ["/a-level-physics-tutor", "/physics-classes", "/topics/a-level-physics-electricity-tutor"],
    },
    {
        "target": "/topics/cbse-maths-class-12-tutor",
        "anchor": "CBSE Class 12 maths tutor",
        "reason": "CBSE Class 12 Maths is one of the highest-volume search terms in India",
        "suggested_sources": ["/maths-classes", "/topics/cbse-physics-class-12-tutor"],
    },
    {
        "target": "/topics/ap-calculus-ab-tutor",
        "anchor": "AP Calculus AB tutor",
        "reason": "AP Calculus AB is the most enrolled AP course in the US — very high search volume",
        "suggested_sources": ["/maths-classes", "/topics/ap-calculus-bc-tutor", "/online-math-tutor"],
    },
    {
        "target": "/topics/ib-maths-aa-hl-calculus-tutor",
        "anchor": "IB Maths HL calculus help",
        "reason": "IB Maths HL Calculus is the #1 struggled topic for IB students — very high intent",
        "suggested_sources": ["/maths-classes", "/ib-physics-tutor", "/topics/ib-maths-aa-sl-tutor"],
    },
    {
        "target": "/free-demo",
        "anchor": "book a free physics demo class",
        "reason": "Free demo page is the conversion page — needs more inbound links from content pages",
        "suggested_sources": ["/blog", "/resources", "/practice"],
    },
    {
        "target": "/blog",
        "anchor": "physics and maths study tips",
        "reason": "Blog drives organic traffic — should be linked from more pages",
        "suggested_sources": ["/about", "/resources", "/teachers"],
    },
]


def run_link_mapper() -> dict:
    print(f"\n{Fore.CYAN}{'═'*60}")
    print(f"  PhyFix Internal Link Mapper")
    print(f"{'═'*60}{Style.RESET_ALL}\n")

    link_graph, layout_links, page_file_map = scan_all_source_files()
    inbound_map = build_inbound_map(link_graph, layout_links)
    orphans = find_orphan_pages(link_graph, inbound_map, layout_links)

    # Print inbound link counts
    print(f"  {Fore.YELLOW}● Inbound Link Counts (Page → # inbound links){Style.RESET_ALL}\n")
    all_routes_sorted = sorted(
        ALL_ROUTES,
        key=lambda r: len(inbound_map.get(r, [])),
        reverse=True,
    )

    for route in all_routes_sorted[:20]:  # Show top 20
        count = len(inbound_map.get(route, []))
        bar = "█" * min(count, 20)
        color = Fore.GREEN if count >= 5 else (Fore.YELLOW if count >= 2 else Fore.RED)
        print(f"  {color}{count:3d} {bar:<20}{Style.RESET_ALL}  {route}")

    # Print orphans
    print(f"\n  {Fore.YELLOW}● Orphan Pages (0 inbound links from content pages){Style.RESET_ALL}\n")
    if orphans:
        for route in orphans:
            print(f"  {Fore.RED}⚠ ORPHAN:{Style.RESET_ALL} {route}")
            print(f"          Fix: Add a link from a related content page or the navigation")
    else:
        print(f"  {Fore.GREEN}✓ No orphan pages detected.{Style.RESET_ALL}")

    # Print linking opportunities
    print(f"\n  {Fore.YELLOW}● Priority Internal Linking Opportunities{Style.RESET_ALL}\n")
    for i, opp in enumerate(LINKING_OPPORTUNITIES, 1):
        print(f"  {Fore.CYAN}{i:2d}.{Style.RESET_ALL} Target: {Fore.GREEN}{opp['target']}{Style.RESET_ALL}")
        print(f"      Anchor text: \"{opp['anchor']}\"")
        print(f"      Why: {opp['reason']}")
        print(f"      Add link from: {', '.join(opp['suggested_sources'])}")
        print()

    # Topical authority analysis
    print(f"\n  {Fore.YELLOW}● Topical Authority Analysis{Style.RESET_ALL}\n")
    topics_clusters = {
        "⚛ IB Physics": [r for r in ALL_ROUTES if "ib-physics" in r],
        "📐 IGCSE Physics": [r for r in ALL_ROUTES if "igcse-physics" in r],
        "🔬 A-Level Physics": [r for r in ALL_ROUTES if "a-level-physics" in r],
        "🚀 AP Physics": [r for r in ALL_ROUTES if "ap-physics" in r],
        "∫ IB Maths": [r for r in ALL_ROUTES if "ib-maths" in r],
        "📊 IGCSE Maths": [r for r in ALL_ROUTES if "igcse-maths" in r],
        "∂ AP Calculus": [r for r in ALL_ROUTES if "ap-calculus" in r],
        "🇮🇳 CBSE": [r for r in ALL_ROUTES if "cbse" in r],
    }

    for cluster_name, routes in topics_clusters.items():
        cross_links = sum(len(link_graph.get(r, [])) for r in routes)
        print(f"  {cluster_name}: {len(routes)} pages | {cross_links} cross-links")
        for r in routes:
            print(f"    → {r}")
        print()

    result = {
        "orphans": orphans,
        "linking_opportunities": LINKING_OPPORTUNITIES,
        "topical_clusters": {k: v for k, v in topics_clusters.items()},
    }

    # Save report
    import json
    os.makedirs("seo/output", exist_ok=True)
    with open("seo/output/link_map.json", "w", encoding="utf-8") as f:
        json.dump(result, f, indent=2)
    print(f"  {Fore.GREEN}✓ Link map saved to seo/output/link_map.json{Style.RESET_ALL}")

    return result


if __name__ == "__main__":
    run_link_mapper()
