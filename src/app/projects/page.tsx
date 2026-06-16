import type { Metadata } from "next";
import styles from "./page.module.css";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Software projects and open-source contributions by Debgandhar Ghosh.",
};

const projects = [
  {
    emoji: "📱",
    category: "Data Extraction / Backend",
    title: "Recharge Plan Information Extraction (CrazePay)",
    desc: "Built a Go-based regex extractor to extract Data, Voice, SMS, and other benefits from plan descriptions of various telecom providers (Jio, Airtel, VI), saving $10 to $50/month in operations.",
    tech: ["Go", "Regex Extraction", "Data Extraction"],
    github: null,
    live: null,
    featured: true,
    highlight: {
      label: "Saving:",
      value: "$10–$50/month",
      suffix: "in operations"
    }
  },
  {
    emoji: "🛒",
    category: "AI / Natural Language Processing",
    title: "Semantic Recommender System (SIH Winner)",
    desc: "Developed a product recommendation engine utilizing the Sentence-Transformers all-MiniLM-L6-v2 model and Qdrant Cloud. By optimizing the system for CPU-only inference, it runs with sub-50ms latency without requiring costly GPU servers, saving approximately $100–$150/month in cloud infrastructure costs.",
    tech: ["FastAPI", "Qdrant", "Sentence-Transformers", "Python", "YAML"],
    github: "https://github.com/debg48/SIH_ecom",
    live: null,
    featured: false,
    highlight: {
      label: "Saving:",
      value: "~$100+/month",
      suffix: "(100% GPU cost saved)"
    }
  },
  {
    emoji: "🛡️",
    category: "Machine Learning / Backend",
    title: "Real-time Hate Speech & Misinformation Detection",
    desc: "Designed and deployed a FastAPI backend on GCP to detect hate speech and misinformation in real time. Integrated Google Perspective API for toxicity detection and Fact Check Tools API.",
    tech: ["FastAPI", "Python", "Google Cloud Platform", "Perspective API"],
    github: "#",
    live: null,
    featured: false,
    highlight: {
      label: "Impact:",
      value: "Automated user safety",
      suffix: ""
    }
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className={styles.orbitalDecor} aria-hidden="true" />
      <div className={styles.ghostTitle} aria-hidden="true">Projects</div>

      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <SectionHeader
              label="Projects"
              title="Things I&apos;ve built"
              subtitle="A selection of software projects, from infrastructure tools to machine learning applications."
            />
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--space-12)" }}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.projectsGrid}>
            {projects.map((project, i) => (
              <ScrollReveal
                key={project.title}
                delay={Math.min(i + 1, 5)}
                className={project.featured ? styles.projectFeaturedWrapper : ''}
              >
                <Card className={`${styles.projectCard} ${project.featured ? styles.featuredCard : ''}`}>
                  <div className={styles.projectMedia}>
                    <span className={styles.projectEmoji}>{project.emoji}</span>
                  </div>
                  <div className={styles.projectBody}>
                    <div className={styles.projectEyebrow}>{project.category}</div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    {project.highlight && (
                      <div className={styles.projectHighlightBox}>
                        <span className={styles.highlightText}>
                          {project.highlight.label}{' '}
                          <strong className={styles.highlightValue}>{project.highlight.value}</strong>{' '}
                          {project.highlight.suffix}
                        </span>
                      </div>
                    )}
                    <div className={styles.techStack}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.techBadge}>{t}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      {project.github && (
                        <a href={project.github} className={`${styles.projectLink} ${styles.projectLinkPrimary}`}>
                          Source code ↗
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} className={styles.projectLink}>
                          Live demo →
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
