"""
PhyFix SEO Suite — Tool 3: Structured Data Factory
Generates valid JSON-LD for Course, ProfessionalService, Person, EducationalOrganization,
and FAQPage schemas. Tuned for phyfix.com with Ashish Pachar's credentials.
"""

import json
import os
from config import SITE_URL, SITE_NAME, ADMIN_EMAIL, WHATSAPP, FOUNDER_NAME
from colorama import Fore, Style, init

init(autoreset=True)

FOUNDER_SCHEMA = {
    "@type": "Person",
    "@id": f"{SITE_URL}/#ashish-pachar",
    "name": "Ashish Pachar",
    "jobTitle": "Senior Physics & Mathematics Tutor",
    "description": "M.Sc Physics from Kurukshetra University. GATE Qualified. 15+ years teaching IB, IGCSE, A-Level, AP, CBSE Physics and Mathematics to international students.",
    "url": f"{SITE_URL}/about",
    "sameAs": [
        "https://www.teacheron.com/tutor/4Sih",
        "https://www.instagram.com/phyfix1",
        "https://x.com/Phyfix11",
        "https://www.youtube.com/@phyfix",
    ],
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "M.Sc Physics",
            "recognizedBy": {"@type": "EducationalOrganization", "name": "Kurukshetra University"},
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "GATE Qualified — Physics",
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "CTET Qualified",
        },
    ],
    "knowsAbout": [
        "IB Physics", "IGCSE Physics", "A-Level Physics", "AP Physics",
        "CBSE Physics", "IB Mathematics", "IGCSE Mathematics", "Calculus",
        "Mechanics", "Electromagnetism", "Quantum Physics",
    ],
}

ORG_SCHEMA = {
    "@type": "EducationalOrganization",
    "@id": f"{SITE_URL}/#organization",
    "name": "PhyFix",
    "url": SITE_URL,
    "logo": f"{SITE_URL}/favicon.png",
    "description": "PhyFix is a personalised 1-on-1 online tutoring platform for Physics, Mathematics, Chemistry, and Biology across international curricula including IB, IGCSE, A-Level, AP, and CBSE.",
    "email": ADMIN_EMAIL,
    "telephone": WHATSAPP,
    "foundingDate": "2009",
    "founder": {"@id": f"{SITE_URL}/#ashish-pachar"},
    "sameAs": [
        "https://www.instagram.com/phyfix1",
        "https://x.com/Phyfix11",
        "https://www.youtube.com/@phyfix",
        "https://www.facebook.com/Phyfix",
        "https://www.linkedin.com/company/111519508",
    ],
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free 1-hour demo class for new students",
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "PhyFix Tutoring Services",
        "itemListElement": [
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "IB Physics Tutoring"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "IGCSE Mathematics Tutoring"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "A-Level Physics Tutoring"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "AP Physics Tutoring"}},
            {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "CBSE Class 12 Physics Tutoring"}},
        ],
    },
}

COURSE_TEMPLATES = [
    {
        "name": "Advanced Physics Tutoring — IB, IGCSE, A-Level, AP",
        "description": "Expert 1-on-1 online physics tutoring covering IB Physics (SL & HL), Cambridge IGCSE Physics (0625), A-Level Physics (AQA, Edexcel, OCR, Cambridge), and AP Physics 1, 2 & C. Personalised sessions, recorded classes, past-paper practice, and free demo class.",
        "subject": "Physics",
        "boards": ["IB", "IGCSE", "A-Level", "AP", "CBSE"],
        "url": f"{SITE_URL}/physics-classes",
        "syllabus": [
            "Mechanics: Kinematics, Newton's Laws, Momentum, Energy",
            "Waves & SHM: Superposition, Diffraction, Standing Waves",
            "Electricity & Magnetism: Circuits, Fields, Induction",
            "Thermal Physics: Gas Laws, Thermodynamics",
            "Atomic & Nuclear Physics: Radioactivity, Binding Energy",
            "Fields: Gravitational, Electric, Magnetic (HL/A2)",
        ],
    },
    {
        "name": "Advanced Mathematics Tutoring — IB, IGCSE, A-Level, AP Calculus",
        "description": "Expert 1-on-1 online mathematics tutoring for IB Maths AA & AI (SL & HL), Cambridge IGCSE Maths (0580), A-Level & AS-Level Maths, AP Calculus AB & BC, and CBSE Class 11 & 12 Mathematics. All sessions personalised, recorded, and notes-shared.",
        "subject": "Mathematics",
        "boards": ["IB", "IGCSE", "A-Level", "AP", "CBSE"],
        "url": f"{SITE_URL}/maths-classes",
        "syllabus": [
            "Algebra: Functions, Complex Numbers, Sequences, Proof by Induction",
            "Calculus: Differentiation, Integration, Differential Equations, Series",
            "Trigonometry: Identities, Sine/Cosine Rule, 3D Trigonometry",
            "Statistics: Probability, Distributions, Hypothesis Testing",
            "Geometry: Vectors, 3D Geometry, Circle Theorems",
        ],
    },
    {
        "name": "IB Physics HL Mechanics — Expert Tutoring",
        "description": "Specialist 1-on-1 IB Physics tutoring for Mechanics (Topic 2 & 6 HL). Covers kinematics, Newton's laws, circular motion, and simple harmonic motion with past-paper focus.",
        "subject": "Physics",
        "boards": ["IB"],
        "url": f"{SITE_URL}/topics/ib-physics-mechanics-tutor",
        "syllabus": ["Kinematics", "Newton's Laws", "Circular Motion", "Simple Harmonic Motion"],
    },
    {
        "name": "AP Physics 1 Kinematics — Expert Tutoring",
        "description": "Specialist AP Physics 1 Kinematics tutoring for College Board exam prep. Covers 1D and 2D motion, velocity-time graphs, and projectile motion with FRQ practice.",
        "subject": "Physics",
        "boards": ["AP"],
        "url": f"{SITE_URL}/topics/ap-physics-1-kinematics-tutor",
        "syllabus": ["1D Motion", "Projectile Motion", "Velocity-Time Graphs", "FRQ Practice"],
    },
    {
        "name": "IGCSE Mathematics Algebra — Expert Tutoring",
        "description": "Cambridge IGCSE Maths (0580) Algebra specialist tutoring. Covers linear equations, quadratics, factorisation, simultaneous equations and algebraic fractions. Grade 8/9 target.",
        "subject": "Mathematics",
        "boards": ["IGCSE"],
        "url": f"{SITE_URL}/topics/igcse-maths-algebra-tutor",
        "syllabus": ["Linear Equations", "Quadratic Equations", "Factorisation", "Simultaneous Equations"],
    },
    {
        "name": "CBSE Class 12 Physics — Expert Tutoring",
        "description": "Expert CBSE Class 12 Physics tutoring covering the full board syllabus plus JEE/NEET preparation. Electrostatics, optics, modern physics, and more.",
        "subject": "Physics",
        "boards": ["CBSE"],
        "url": f"{SITE_URL}/topics/cbse-physics-class-12-tutor",
        "syllabus": ["Electrostatics", "Current Electricity", "Optics", "Modern Physics", "Semiconductors"],
    },
]

PROFESSIONAL_SERVICE_SCHEMA = {
    "@type": "ProfessionalService",
    "@id": f"{SITE_URL}/#professional-service",
    "name": "PhyFix Tutoring Services",
    "url": SITE_URL,
    "description": "PhyFix provides expert 1-on-1 online tutoring for Physics, Mathematics, Chemistry, and Biology. All levels from IGCSE through IB, A-Level, AP, and CBSE. Zero commission model with free demo sessions.",
    "serviceType": "Educational Tutoring",
    "areaServed": [
        {"@type": "Country", "name": "India"},
        {"@type": "Country", "name": "United Kingdom"},
        {"@type": "Country", "name": "United States"},
        {"@type": "Country", "name": "United Arab Emirates"},
        {"@type": "Country", "name": "Singapore"},
        {"@type": "Country", "name": "Canada"},
        {"@type": "Country", "name": "Australia"},
    ],
    "provider": {"@id": f"{SITE_URL}/#organization"},
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tutoring Rates",
        "itemListElement": [
            {
                "@type": "Offer",
                "name": "School Level Tutoring",
                "price": "10",
                "priceCurrency": "USD",
                "description": "Physics & Maths for school-level students (IGCSE, GCSE, CBSE Classes 9-10)",
            },
            {
                "@type": "Offer",
                "name": "College Aspirant Tutoring",
                "price": "15",
                "priceCurrency": "USD",
                "description": "IB, A-Level, AP, CBSE Classes 11-12, JEE & NEET preparation",
            },
            {
                "@type": "Offer",
                "name": "Free Demo Session",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free 1-hour introductory class for all new students",
            },
        ],
    },
}

FAQ_SCHEMAS = {
    "physics_general": [
        {"q": "How do I find a good online physics tutor?", "a": "PhyFix offers verified expert physics tutors with 4–15 years of experience across IB, IGCSE, A-Level, AP, and CBSE. You can browse tutor profiles, read ratings, and book a free demo class before committing."},
        {"q": "How much does online physics tutoring cost?", "a": "PhyFix physics tutoring rates range from ₹500 to ₹2,000 per hour depending on the tutor and level. Students pay tutors directly — PhyFix charges zero commission. School-level starts at $10/hr."},
        {"q": "Can I get a free trial physics class?", "a": "Yes. Every new PhyFix student gets a free 1-hour demo class with no commitment and no credit card required. Book via WhatsApp at +91 8684901516."},
        {"q": "Which physics boards do PhyFix tutors cover?", "a": "PhyFix tutors cover IB Physics (SL & HL), Cambridge IGCSE Physics (0625), A-Level Physics (AQA, Edexcel, OCR, Cambridge), AP Physics 1, 2 & C, CBSE Class 9–12 Physics, ICSE, and JEE/NEET Physics."},
    ],
    "maths_general": [
        {"q": "How do I find a good online maths tutor?", "a": "PhyFix offers verified maths tutors with expertise in IB Maths AA & AI, IGCSE Maths (0580), A-Level Maths, AP Calculus AB & BC, and CBSE Mathematics. Book a free demo class to find the right match."},
        {"q": "How much does online maths tutoring cost?", "a": "PhyFix maths tutoring rates range from ₹500 to ₹3,000 per hour depending on tutor and level. Zero commission — you pay the tutor directly. Starting from $10/hr for school level."},
        {"q": "Can I get help with IB Maths IA?", "a": "Yes. PhyFix tutors specialise in IB Mathematics Internal Assessment support, helping students choose appropriate topics, structure their exploration, and achieve Level 4 scores."},
        {"q": "Do you offer IGCSE Maths tutoring?", "a": "Yes. PhyFix offers expert Cambridge IGCSE Maths (0580) tutoring for both Core and Extended levels, with past-paper focus and grade 8/9 strategies."},
    ],
}


def build_course_schema(template: dict) -> dict:
    return {
        "@type": "Course",
        "name": template["name"],
        "description": template["description"],
        "url": template["url"],
        "provider": {"@id": f"{SITE_URL}/#organization"},
        "instructor": {"@id": f"{SITE_URL}/#ashish-pachar"},
        "educationalLevel": ", ".join(template["boards"]),
        "about": template["subject"],
        "syllabusSections": [
            {"@type": "Syllabus", "name": s} for s in template["syllabus"]
        ],
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "description": "Free demo class available",
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "P1H",
            "location": {
                "@type": "VirtualLocation",
                "url": "https://zoom.us",
            },
        },
    }


def build_faq_schema(faqs: list[dict]) -> dict:
    return {
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": item["q"],
                "acceptedAnswer": {"@type": "Answer", "text": item["a"]},
            }
            for item in faqs
        ],
    }


def build_homepage_schema() -> dict:
    """Complete JSON-LD graph for the homepage."""
    return {
        "@context": "https://schema.org",
        "@graph": [
            ORG_SCHEMA,
            FOUNDER_SCHEMA,
            PROFESSIONAL_SERVICE_SCHEMA,
            {
                "@type": "WebSite",
                "@id": f"{SITE_URL}/#website",
                "url": SITE_URL,
                "name": "PhyFix",
                "description": "Expert online Physics and Maths tutoring for IB, IGCSE, A-Level, AP and CBSE students.",
                "publisher": {"@id": f"{SITE_URL}/#organization"},
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {"@type": "EntryPoint", "urlTemplate": f"{SITE_URL}/teachers?q={{search_term_string}}"},
                    "query-input": "required name=search_term_string",
                },
            },
            build_faq_schema(FAQ_SCHEMAS["physics_general"] + FAQ_SCHEMAS["maths_general"]),
        ],
    }


def run_schema_factory(output_dir: str = "seo/output/schemas") -> dict:
    print(f"\n{Fore.CYAN}{'═'*60}")
    print(f"  PhyFix Structured Data Factory")
    print(f"  Generating JSON-LD for Course, ProfessionalService, Person")
    print(f"{'═'*60}{Style.RESET_ALL}\n")

    os.makedirs(output_dir, exist_ok=True)
    generated = {}

    # 1. Homepage schema (full graph)
    homepage_schema = build_homepage_schema()
    path = os.path.join(output_dir, "homepage_schema.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(homepage_schema, f, indent=2, ensure_ascii=False)
    generated["homepage"] = path
    print(f"  {Fore.GREEN}✓ Homepage schema{Style.RESET_ALL} → {path}")
    print(f"    Types: Organization, Person, ProfessionalService, WebSite, FAQPage")

    # 2. Course schemas
    course_schemas = []
    for template in COURSE_TEMPLATES:
        course_schemas.append(build_course_schema(template))
    course_output = {
        "@context": "https://schema.org",
        "@graph": course_schemas,
    }
    path = os.path.join(output_dir, "course_schemas.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(course_output, f, indent=2, ensure_ascii=False)
    generated["courses"] = path
    print(f"\n  {Fore.GREEN}✓ Course schemas ({len(COURSE_TEMPLATES)} courses){Style.RESET_ALL} → {path}")
    for t in COURSE_TEMPLATES:
        print(f"    • {t['name'][:60]}")

    # 3. ProfessionalService + Founder schema
    pro_output = {
        "@context": "https://schema.org",
        "@graph": [PROFESSIONAL_SERVICE_SCHEMA, FOUNDER_SCHEMA, ORG_SCHEMA],
    }
    path = os.path.join(output_dir, "professional_service_schema.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(pro_output, f, indent=2, ensure_ascii=False)
    generated["professional_service"] = path
    print(f"\n  {Fore.GREEN}✓ ProfessionalService + Founder schema{Style.RESET_ALL} → {path}")
    print(f"    • Provider: PhyFix (EducationalOrganization)")
    print(f"    • Tutor: Ashish Pachar (Person + Credentials)")

    # 4. FAQ schemas
    for key, faqs in FAQ_SCHEMAS.items():
        schema = {"@context": "https://schema.org", **build_faq_schema(faqs)}
        path = os.path.join(output_dir, f"faq_{key}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(schema, f, indent=2, ensure_ascii=False)
        generated[f"faq_{key}"] = path
        print(f"\n  {Fore.GREEN}✓ FAQ schema — {key}{Style.RESET_ALL} ({len(faqs)} questions) → {path}")

    # 5. Validate JSON structure
    print(f"\n  {Fore.YELLOW}Validating JSON-LD structure...{Style.RESET_ALL}")
    all_valid = True
    for name, filepath in generated.items():
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                data = json.load(f)
            context = data.get("@context") or data.get("@graph", [{}])[0].get("@context")
            print(f"    {Fore.GREEN}✓ {name}: valid JSON{Style.RESET_ALL}")
        except json.JSONDecodeError as e:
            print(f"    {Fore.RED}✗ {name}: INVALID JSON — {e}{Style.RESET_ALL}")
            all_valid = False

    print(f"\n  {'='*40}")
    if all_valid:
        print(f"  {Fore.GREEN}All schemas valid. Submit to Google Rich Results Test:{Style.RESET_ALL}")
        print(f"  https://search.google.com/test/rich-results")
    else:
        print(f"  {Fore.RED}Some schemas have errors — check output above.{Style.RESET_ALL}")

    return generated


if __name__ == "__main__":
    run_schema_factory()
