"""
PhyFix SEO Suite — Configuration
"""

import os

SITE_URL = "https://phyfix.com"
DEV_URL = os.getenv("DEV_URL", "http://localhost:5000")

ADMIN_EMAIL = "ashishpachar27@gmail.com"
WHATSAPP = "+91 8684901516"
FOUNDER_NAME = "Ashish Pachar"

SITE_NAME = "PhyFix"
SITE_TAGLINE = "Expert 1-on-1 Physics & Maths Tutoring | IB, IGCSE, A-Level, AP, CBSE"

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GROQ_MODEL = "llama-3.3-70b-versatile"

STATIC_ROUTES = [
    "/",
    "/teachers",
    "/about",
    "/blog",
    "/contact",
    "/resources",
    "/practice",
    "/pricing",
    "/how-it-works",
    "/become-tutor",
    "/free-demo",
    "/physics-classes",
    "/maths-classes",
    "/ib-physics-tutor",
    "/igcse-math-tutor",
    "/a-level-physics-tutor",
    "/online-math-tutor",
]

TOPIC_SLUGS = [
    "ib-physics-mechanics-tutor",
    "ib-physics-waves-tutor",
    "ib-physics-electricity-tutor",
    "ib-physics-fields-tutor",
    "ib-physics-atomic-tutor",
    "ib-physics-thermal-tutor",
    "igcse-physics-forces-motion-tutor",
    "igcse-physics-energy-tutor",
    "igcse-physics-electricity-tutor",
    "igcse-physics-waves-tutor",
    "a-level-physics-mechanics-tutor",
    "a-level-physics-electricity-tutor",
    "a-level-physics-waves-tutor",
    "a-level-physics-fields-tutor",
    "ap-physics-1-kinematics-tutor",
    "ap-physics-1-dynamics-tutor",
    "ap-physics-1-energy-tutor",
    "ap-physics-1-waves-tutor",
    "ib-maths-aa-hl-calculus-tutor",
    "ib-maths-aa-hl-algebra-tutor",
    "ib-maths-aa-sl-tutor",
    "ib-maths-ai-sl-tutor",
    "igcse-maths-algebra-tutor",
    "igcse-maths-geometry-tutor",
    "igcse-maths-statistics-tutor",
    "igcse-maths-number-tutor",
    "ap-calculus-ab-tutor",
    "ap-calculus-bc-tutor",
    "cbse-physics-class-12-tutor",
    "cbse-physics-class-11-tutor",
    "cbse-maths-class-12-tutor",
    "cbse-maths-class-11-tutor",
]

ALL_ROUTES = STATIC_ROUTES + [f"/topics/{s}" for s in TOPIC_SLUGS]

BOARD_KEYWORDS = {
    "IB": ["IB", "International Baccalaureate", "IB HL", "IB SL", "IBDP", "MYP"],
    "IGCSE": ["IGCSE", "Cambridge IGCSE", "Cambridge 0580", "Cambridge 0625", "O Level"],
    "A-Level": ["A-Level", "AS-Level", "Cambridge A-Level", "AQA", "Edexcel", "OCR"],
    "AP": ["AP", "Advanced Placement", "College Board", "AP Physics 1", "AP Calculus"],
    "CBSE": ["CBSE", "Class 11", "Class 12", "JEE", "NEET", "ICSE"],
}

PRIORITY_PAGES = ["/", "/teachers", "/physics-classes", "/maths-classes", "/free-demo",
                  "/ib-physics-tutor", "/igcse-math-tutor", "/a-level-physics-tutor"]
