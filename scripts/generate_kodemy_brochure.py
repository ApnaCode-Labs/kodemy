"""Generate public/brochures/kodemy_brochure.pdf (requires reportlab)."""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT / "public" / "brochures" / "kodemy_brochure.pdf"

VIOLET = colors.HexColor("#7C3AED")
ORANGE = colors.HexColor("#F97316")
DARK = colors.HexColor("#0F0F1A")
MUTED = colors.HexColor("#4B5563")


def build():
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="BrandTitle",
            parent=styles["Title"],
            fontSize=26,
            spaceAfter=6,
            textColor=VIOLET,
            fontName="Helvetica-Bold",
        )
    )
    styles.add(
        ParagraphStyle(
            name="BrochureTagline",
            parent=styles["Normal"],
            fontSize=12,
            textColor=MUTED,
            spaceAfter=18,
            leading=16,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionHead",
            parent=styles["Heading2"],
            fontSize=16,
            spaceBefore=14,
            spaceAfter=8,
            textColor=DARK,
            fontName="Helvetica-Bold",
        )
    )
    styles.add(
        ParagraphStyle(
            name="BrochureBody",
            parent=styles["Normal"],
            fontSize=10.5,
            leading=14,
            textColor=DARK,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BrochureBullet",
            parent=styles["Normal"],
            fontSize=10.5,
            leading=14,
            leftIndent=12,
            textColor=DARK,
        )
    )
    styles.add(
        ParagraphStyle(
            name="FooterNote",
            parent=styles["Normal"],
            fontSize=9,
            textColor=MUTED,
            alignment=1,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SubBrand",
            parent=styles["Normal"],
            fontSize=14,
            textColor=ORANGE,
            fontName="Helvetica-Bold",
            spaceAfter=10,
        )
    )

    story = []

    story.append(Paragraph("kodemy", styles["BrandTitle"]))
    story.append(Paragraph("Empowering the Next Generation of Tech Innovators", styles["SubBrand"]))
    story.append(
        Paragraph(
            "Hands-on tech workshops and private courses for students and young creators. "
            "We turn complex ideas into practical skills you can use right away.",
            styles["BrochureTagline"],
        )
    )

    data = [
        ["Impact at a glance", ""],
        ["500+ students trained", "20+ schools reached"],
        ["5 core workshop tracks", "Youth-focused, energetic delivery"],
    ]
    t = Table(data, colWidths=[2.6 * inch, 2.6 * inch])
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), VIOLET),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, 0), 11),
                ("SPAN", (0, 0), (-1, 0)),
                ("ALIGN", (0, 0), (-1, 0), "CENTER"),
                ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#F9FAFB")),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#E5E7EB")),
                ("INNERGRID", (0, 1), (-1, -1), 0.25, colors.HexColor("#E5E7EB")),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 1), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 1), (-1, -1), 8),
            ]
        )
    )
    story.append(t)
    story.append(Spacer(1, 0.2 * inch))

    story.append(Paragraph("About kodemy", styles["SectionHead"]))
    story.append(
        Paragraph(
            "kodemy is a youth-focused tech workshop company. We partner with schools, coaching "
            "institutes, and individual learners to build confidence in modern digital skills through "
            "fun, practical learning experiences.",
            styles["BrochureBody"],
        )
    )

    story.append(Paragraph("Workshops — What We Teach", styles["SectionHead"]))
    workshops = [
        ("IoT", "Build smart connected devices and systems."),
        ("Python Programming", "From basics to real-world automation."),
        ("Web Development", "HTML, CSS, JavaScript and beyond."),
        ("Cybersecurity", "Understand threats and defend systems."),
        ("Offline / Group Workshops", "Customized sessions delivered at your venue."),
    ]
    bullets = [
        ListItem(
            Paragraph(f"<b>{title}</b> — {desc}", styles["BrochureBullet"]),
            bulletColor=VIOLET,
            value="bullet",
        )
        for title, desc in workshops
    ]
    story.append(ListFlowable(bullets, bulletType="bullet", leftIndent=18))

    story.append(Paragraph("Private Courses", styles["SectionHead"]))
    story.append(
        Paragraph(
            "Learn at your own pace, one-on-one with an expert. Private courses offer flexible "
            "scheduling, a personalized curriculum, and direct mentorship.",
            styles["BrochureBody"],
        )
    )
    story.append(
        Paragraph(
            "<b>Topics available:</b> IoT, Python, Web Development, Cybersecurity.",
            styles["BrochureBody"],
        )
    )

    story.append(Paragraph("Who We Partner With", styles["SectionHead"]))
    story.append(
        Paragraph(
            "<b>Schools</b> — Structured workshop modules for batches, labs, and school innovation programs.",
            styles["BrochureBody"],
        )
    )
    story.append(
        Paragraph(
            "<b>Coaching institutes</b> — Collaborative training tracks that add high-impact tech "
            "offerings to your existing student programs.",
            styles["BrochureBody"],
        )
    )

    story.append(PageBreak())
    story.append(Paragraph("Experience highlights", styles["SectionHead"]))
    story.append(
        Paragraph(
            "Our programs include IoT labs, Python bootcamps, web dev sessions, cybersecurity talks, "
            "private mentorship, and school outreach — all designed to be interactive and memorable.",
            styles["BrochureBody"],
        )
    )

    story.append(Paragraph("Contact", styles["SectionHead"]))
    story.append(Paragraph("<b>Email:</b> hello@kodemy.tech", styles["BrochureBody"]))
    story.append(Paragraph("<b>Phone:</b> +91 98765 43210", styles["BrochureBody"]))
    story.append(Paragraph("<b>Location:</b> New Delhi, India", styles["BrochureBody"]))
    story.append(Spacer(1, 0.15 * inch))
    story.append(
        Paragraph(
            "We aim to respond within 24 hours. Thank you for your interest in kodemy.",
            styles["BrochureBody"],
        )
    )

    story.append(Spacer(1, 0.35 * inch))
    story.append(
        Paragraph(
            "© kodemy — Build. Learn. Lead the future with confidence.",
            styles["FooterNote"],
        )
    )

    doc = SimpleDocTemplate(
        str(OUT_PATH),
        pagesize=letter,
        rightMargin=0.75 * inch,
        leftMargin=0.75 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.65 * inch,
        title="kodemy — Program Brochure",
        author="kodemy",
    )
    doc.build(story)
    print(f"Wrote {OUT_PATH} ({OUT_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
