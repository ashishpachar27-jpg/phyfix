"""
PhyFix SEO Suite — Tool 2: SGE-Ready Meta Generator
Generates optimised, board-specific meta tags using LLM (Groq) or template-based fallback.
Targets AI-powered search (SGE/AIO) with authoritative, intent-satisfying copy.
"""

import json
from config import GROQ_API_KEY, GROQ_MODEL, SITE_NAME, SITE_URL
from colorama import Fore, Style, init

init(autoreset=True)

META_TEMPLATES = {
    "IB": {
        "title_suffix": "| IB Physics & Maths Tutor | PhyFix",
        "desc_pattern": "Expert 1-on-1 IB {subject} tutoring for {topic}. Personalised sessions, past-paper focus, IB-specialist tutors. Free demo class available.",
        "keywords_base": "IB tutor online, IB {subject} tutor, {topic} IB help, IB SL HL tutor, International Baccalaureate {subject}",
    },
    "IGCSE": {
        "title_suffix": "| IGCSE Tutor | Cambridge | PhyFix",
        "desc_pattern": "Cambridge IGCSE {subject} tutoring for {topic}. Expert tutors, Cambridge past-paper practice, grade 8/9 target. Free demo class.",
        "keywords_base": "IGCSE {subject} tutor, Cambridge IGCSE {topic}, IGCSE {subject} help online, Cambridge 0625 tutor, IGCSE revision",
    },
    "A-Level": {
        "title_suffix": "| A-Level Tutor | AQA Edexcel OCR | PhyFix",
        "desc_pattern": "Expert A-Level {subject} tutoring for {topic}. AQA, Edexcel, OCR, Cambridge specialists. Recorded sessions & notes. Free demo.",
        "keywords_base": "A-Level {subject} tutor, {topic} A-Level help, AQA {subject} tutor, Edexcel {subject} tutor, A-Level revision online",
    },
    "AP": {
        "title_suffix": "| AP Tutor | College Board Prep | PhyFix",
        "desc_pattern": "Expert AP {subject} tutoring for {topic}. College Board exam prep, FRQ practice, 5-score strategies. Free demo class with PhyFix.",
        "keywords_base": "AP {subject} tutor, {topic} AP help, College Board {subject} prep, AP exam review, AP {subject} score 5",
    },
    "CBSE": {
        "title_suffix": "| CBSE Tutor | JEE NEET Prep | PhyFix",
        "desc_pattern": "Expert CBSE {subject} tutoring for {topic}. Board exam preparation, JEE/NEET foundation. 1-on-1 online sessions. Free demo class.",
        "keywords_base": "CBSE {subject} tutor, {topic} CBSE help, Class 12 {subject} tutor, JEE {subject} preparation, CBSE board exam tutor",
    },
    "General": {
        "title_suffix": "| Online Tutor | PhyFix",
        "desc_pattern": "Expert online {subject} tutoring for {topic}. 1-on-1 personalised sessions with verified tutors. Free demo class available at PhyFix.",
        "keywords_base": "{subject} tutor online, {topic} help, online {subject} tutoring, {subject} tutor for students",
    },
}

TOPIC_META_DATA = [
    {"board": "IB", "subject": "Physics", "topic": "Mechanics", "slug": "ib-physics-mechanics-tutor"},
    {"board": "IB", "subject": "Physics", "topic": "Waves & SHM", "slug": "ib-physics-waves-tutor"},
    {"board": "IB", "subject": "Physics", "topic": "Electricity & Magnetism", "slug": "ib-physics-electricity-tutor"},
    {"board": "IB", "subject": "Physics", "topic": "Fields (HL)", "slug": "ib-physics-fields-tutor"},
    {"board": "IB", "subject": "Physics", "topic": "Atomic & Nuclear Physics", "slug": "ib-physics-atomic-tutor"},
    {"board": "IB", "subject": "Physics", "topic": "Thermal Physics", "slug": "ib-physics-thermal-tutor"},
    {"board": "IGCSE", "subject": "Physics", "topic": "Forces & Motion", "slug": "igcse-physics-forces-motion-tutor"},
    {"board": "IGCSE", "subject": "Physics", "topic": "Energy", "slug": "igcse-physics-energy-tutor"},
    {"board": "IGCSE", "subject": "Physics", "topic": "Electricity & Magnetism", "slug": "igcse-physics-electricity-tutor"},
    {"board": "IGCSE", "subject": "Physics", "topic": "Waves & Optics", "slug": "igcse-physics-waves-tutor"},
    {"board": "A-Level", "subject": "Physics", "topic": "Mechanics", "slug": "a-level-physics-mechanics-tutor"},
    {"board": "A-Level", "subject": "Physics", "topic": "Electricity", "slug": "a-level-physics-electricity-tutor"},
    {"board": "A-Level", "subject": "Physics", "topic": "Waves & Quantum", "slug": "a-level-physics-waves-tutor"},
    {"board": "A-Level", "subject": "Physics", "topic": "Fields", "slug": "a-level-physics-fields-tutor"},
    {"board": "AP", "subject": "Physics", "topic": "Kinematics (AP Physics 1)", "slug": "ap-physics-1-kinematics-tutor"},
    {"board": "AP", "subject": "Physics", "topic": "Dynamics & Forces", "slug": "ap-physics-1-dynamics-tutor"},
    {"board": "AP", "subject": "Physics", "topic": "Energy & Momentum", "slug": "ap-physics-1-energy-tutor"},
    {"board": "AP", "subject": "Physics", "topic": "Waves & Sound", "slug": "ap-physics-1-waves-tutor"},
    {"board": "IB", "subject": "Mathematics", "topic": "Calculus (AA HL)", "slug": "ib-maths-aa-hl-calculus-tutor"},
    {"board": "IB", "subject": "Mathematics", "topic": "Algebra & Functions (AA HL)", "slug": "ib-maths-aa-hl-algebra-tutor"},
    {"board": "IB", "subject": "Mathematics", "topic": "Analysis & Approaches SL", "slug": "ib-maths-aa-sl-tutor"},
    {"board": "IB", "subject": "Mathematics", "topic": "Applications & Interpretation SL", "slug": "ib-maths-ai-sl-tutor"},
    {"board": "IGCSE", "subject": "Mathematics", "topic": "Algebra", "slug": "igcse-maths-algebra-tutor"},
    {"board": "IGCSE", "subject": "Mathematics", "topic": "Geometry & Trigonometry", "slug": "igcse-maths-geometry-tutor"},
    {"board": "IGCSE", "subject": "Mathematics", "topic": "Statistics & Probability", "slug": "igcse-maths-statistics-tutor"},
    {"board": "IGCSE", "subject": "Mathematics", "topic": "Number & Arithmetic", "slug": "igcse-maths-number-tutor"},
    {"board": "AP", "subject": "Calculus", "topic": "AP Calculus AB", "slug": "ap-calculus-ab-tutor"},
    {"board": "AP", "subject": "Calculus", "topic": "AP Calculus BC", "slug": "ap-calculus-bc-tutor"},
    {"board": "CBSE", "subject": "Physics", "topic": "Class 12 Physics", "slug": "cbse-physics-class-12-tutor"},
    {"board": "CBSE", "subject": "Physics", "topic": "Class 11 Physics", "slug": "cbse-physics-class-11-tutor"},
    {"board": "CBSE", "subject": "Mathematics", "topic": "Class 12 Mathematics", "slug": "cbse-maths-class-12-tutor"},
    {"board": "CBSE", "subject": "Mathematics", "topic": "Class 11 Mathematics", "slug": "cbse-maths-class-11-tutor"},
]

STATIC_PAGE_METAS = {
    "/": {
        "title": "PhyFix | Expert Online Physics & Maths Tutoring | IB, IGCSE, AP, CBSE",
        "description": "PhyFix connects students worldwide with verified expert tutors for Physics, Maths, Chemistry & Biology. IB, IGCSE, A-Level, AP, CBSE. Free demo class, zero commission.",
        "keywords": "online physics tutor, online maths tutor, IB tutor, IGCSE tutor, AP tutor, CBSE tutor, 1-on-1 tutoring, PhyFix",
        "og:title": "PhyFix — Expert 1-on-1 Physics & Maths Tutoring Online",
    },
    "/teachers": {
        "title": "Browse Expert Physics & Maths Tutors | PhyFix",
        "description": "Browse PhyFix's verified expert tutors for Physics, Maths, Chemistry and Biology. Filter by subject, board, and rating. Free demo class available.",
        "keywords": "find physics tutor, find maths tutor, online tutor for IB, IGCSE tutor online, AP tutor, CBSE online teacher",
        "og:title": "Browse Expert Tutors — Physics, Maths, Chemistry, Biology | PhyFix",
    },
    "/physics-classes": {
        "title": "Online Physics Classes | IB, IGCSE, A-Level, AP, CBSE | PhyFix",
        "description": "Expert 1-on-1 online physics classes for every major board. IB, IGCSE, A-Level, AP Physics, CBSE Class 11 & 12. Verified tutors. Free demo class.",
        "keywords": "online physics classes, physics tutor online, IB physics classes, IGCSE physics tutor, A-Level physics help, AP physics tutor",
        "og:title": "Expert Online Physics Classes — All Boards | PhyFix",
    },
    "/maths-classes": {
        "title": "Online Maths Classes | IB, IGCSE, A-Level, AP Calculus | PhyFix",
        "description": "Expert 1-on-1 online maths tutoring for IB, IGCSE, A-Level, AP Calculus, CBSE. Verified tutors, recorded sessions. Free demo class available.",
        "keywords": "online maths classes, maths tutor online, IB maths tutor, IGCSE maths tutor, AP calculus tutor, CBSE maths tutor",
        "og:title": "Expert Online Maths Classes — All Boards | PhyFix",
    },
    "/free-demo": {
        "title": "Book a Free Physics or Maths Demo Class | PhyFix",
        "description": "Book your free 1-hour demo class with a PhyFix expert. No credit card. No commitment. Physics, Maths, Chemistry, Biology tutoring for IB, IGCSE, AP & more.",
        "keywords": "free physics class, free maths demo, free tutoring session, book free demo, online tutor free trial",
        "og:title": "Free Demo Physics & Maths Class — Book Now | PhyFix",
    },
    "/blog": {
        "title": "Physics & Maths Study Tips Blog | IB, IGCSE, AP | PhyFix",
        "description": "Expert study tips, exam strategies, and subject guides for IB, IGCSE, A-Level, AP and CBSE students. Physics, Maths, Chemistry articles by experienced tutors.",
        "keywords": "IB physics study tips, IGCSE maths guide, A-Level physics revision, AP calculus tips, physics exam strategies",
        "og:title": "Physics & Maths Study Tips — Expert Blog | PhyFix",
    },
    "/resources": {
        "title": "Free Physics & Maths Resources | Past Papers, Notes | PhyFix",
        "description": "60+ free resources for IB, IGCSE, A-Level, AP, CBSE students. Past papers, syllabuses, formula sheets, practice questions, study notes. All subjects.",
        "keywords": "free physics past papers, IGCSE maths resources, IB physics notes, AP calculus practice, CBSE revision materials",
        "og:title": "Free Physics & Maths Study Resources | PhyFix",
    },
}


def template_meta(entry: dict) -> dict:
    """Generate meta tags using board-specific templates."""
    board = entry["board"]
    subject = entry["subject"]
    topic = entry["topic"]
    slug = entry["slug"]
    template = META_TEMPLATES.get(board, META_TEMPLATES["General"])

    title = f"{board} {subject} {topic} Tutor {template['title_suffix']}"
    title = title[:70]  # Hard cap

    description = template["desc_pattern"].format(subject=subject, topic=topic)
    keywords = template["keywords_base"].format(subject=subject, topic=topic, board=board)
    canonical = f"{SITE_URL}/topics/{slug}"

    return {
        "slug": slug,
        "board": board,
        "subject": subject,
        "topic": topic,
        "meta_title": title,
        "meta_description": description,
        "keywords": keywords,
        "canonical": canonical,
        "og_title": f"{board} {subject} — {topic} Expert Tutor | PhyFix",
        "og_description": description,
        "generation_method": "template",
    }


def llm_meta(entry: dict, client) -> dict:
    """Generate meta tags using Groq LLM for richer, more natural copy."""
    board = entry["board"]
    subject = entry["subject"]
    topic = entry["topic"]
    slug = entry["slug"]

    prompt = f"""You are an expert SEO copywriter for PhyFix.com, an online tutoring platform.
Write optimised meta tags for a page about: {board} {subject} — {topic}

Rules:
- meta_title: max 65 characters, include board name, subject and topic, end with "| PhyFix"
- meta_description: 140–160 characters, natural language, include a benefit and CTA ("Free demo available")
- keywords: 5–7 comma-separated keyphrases, include "{board} {subject} tutor" and "{topic} help"
- og_title: 60 chars max, punchy and click-worthy

Output ONLY valid JSON with keys: meta_title, meta_description, keywords, og_title
"""

    try:
        response = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.4,
            max_tokens=400,
        )
        raw = response.choices[0].message.content.strip()
        raw = raw.replace("```json", "").replace("```", "").strip()
        data = json.loads(raw)
        return {
            "slug": slug,
            "board": board,
            "subject": subject,
            "topic": topic,
            "meta_title": data.get("meta_title", "")[:70],
            "meta_description": data.get("meta_description", ""),
            "keywords": data.get("keywords", ""),
            "canonical": f"{SITE_URL}/topics/{slug}",
            "og_title": data.get("og_title", ""),
            "og_description": data.get("meta_description", ""),
            "generation_method": "groq-llm",
        }
    except Exception as e:
        print(f"  {Fore.YELLOW}⚠ LLM failed for {slug}: {e} — falling back to template{Style.RESET_ALL}")
        return template_meta(entry)


def run_meta_generator(use_llm: bool = False, output_file: str = "seo/output/meta_tags.json") -> list[dict]:
    print(f"\n{Fore.CYAN}{'═'*60}")
    print(f"  PhyFix Meta Generator — SGE-Ready Meta Tags")
    method = "Groq LLM" if (use_llm and GROQ_API_KEY) else "Template Engine"
    print(f"{'═'*60}{Style.RESET_ALL}\n")

    client = None
    if use_llm and GROQ_API_KEY:
        try:
            from groq import Groq
            client = Groq(api_key=GROQ_API_KEY)
            print(f"  {Fore.GREEN}✓ Groq LLM connected{Style.RESET_ALL}")
        except Exception as e:
            print(f"  {Fore.YELLOW}⚠ Groq init failed: {e} — using templates{Style.RESET_ALL}")
            client = None

    results = []

    # Generate for all topic pages
    print(f"  Generating meta tags for {len(TOPIC_META_DATA)} topic pages...\n")
    for entry in TOPIC_META_DATA:
        if client:
            meta = llm_meta(entry, client)
        else:
            meta = template_meta(entry)

        results.append(meta)
        print()

    # Include static pages
    print(f"  {Fore.YELLOW}Static Page Meta Recommendations:{Style.RESET_ALL}\n")
    for route, meta in STATIC_PAGE_METAS.items():
        title_len = len(meta["title"])
        desc_len = len(meta["description"])
        title_color = Fore.GREEN if 30 <= title_len <= 65 else Fore.YELLOW
        desc_color = Fore.GREEN if 120 <= desc_len <= 165 else Fore.YELLOW
        print(f"  {route}")
        print()

    import os
    os.makedirs("seo/output", exist_ok=True)
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump({
            "topic_pages": results,
            "static_pages": STATIC_PAGE_METAS,
        }, f, indent=2, ensure_ascii=False)

    print(f"  {Fore.GREEN}✓ Saved to {output_file}{Style.RESET_ALL}")
    print(f"\n  {Fore.CYAN}Total: {len(results)} topic pages + {len(STATIC_PAGE_METAS)} static pages{Style.RESET_ALL}")

    return results


if __name__ == "__main__":
    import sys
    use_llm = "--llm" in sys.argv
    run_meta_generator(use_llm=use_llm)
