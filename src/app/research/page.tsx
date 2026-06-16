import type { Metadata } from "next";
import styles from "./page.module.css";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Research",
  description: "Research papers and academic publications by Debgandhar Ghosh.",
};

const papers = [
  {
    title: "SZAtt-Net: A Unified Deep Learning Model With Different Attention Mechanisms For Schizophrenia Classification From Multimodal Data",
    abstract: "Proposed a unified deep learning approach utilizing diverse attention mechanisms for multimodal schizophrenia classification.",
    venue: "Medicine in Novel Technology and Devices [Elsevier]",
    year: "2026",
    tags: ["Deep Learning", "Attention Mechanisms", "Healthcare", "Schizophrenia"],
    link: "https://www.sciencedirect.com/science/article/pii/S2590093526000032",
  },
  {
    title: "Deep Without Gradients: A Forensic Analysis of Local Plasticity",
    abstract: "Forensic analysis exploring learning in neural networks based on local plasticity without utilizing traditional gradients.",
    venue: "Preprint",
    year: "2026",
    tags: ["Deep Learning", "Local Plasticity", "Neural Networks"],
    link: "https://doi.org/10.5281/zenodo.20259603",
  },
  {
    title: "Dys-Net: A Hybrid Deep Learning Framework for Automatic Dysarthria Detection from Speech Signals",
    abstract: "A hybrid deep learning framework designed to automatically detect dysarthria from speech signals.",
    venue: "Preprint",
    year: "2026",
    tags: ["Deep Learning", "Speech Processing", "Healthcare"],
    link: null,
  },
  {
    title: "TD-Net: A Deep Learning Technique with Spatial and Channel Attention for Efficient Tuberculosis Detection from Chest X-Ray Scans",
    abstract: "Introduced spatial and channel attention for efficient tuberculosis detection from chest X-ray scans.",
    venue: "Decision-making in Computational Intelligence-based Systems [Springer Nature]",
    year: "2025",
    tags: ["Deep Learning", "Computer Vision", "Healthcare", "Tuberculosis"],
    link: "https://link.springer.com/chapter/10.1007/978-3-032-13497-4_6",
  },
  {
    title: "Segmentation and labeling of vertebra using segformer architecture",
    abstract: "Implemented and validated the labeling and segmentation of Vertebra using SegFormer architecture.",
    venue: "International Conference on Computer Vision and Image Processing",
    year: "2023",
    tags: ["Computer Vision", "Segmentation", "SegFormer", "Healthcare"],
    link: "https://link.springer.com/chapter/10.1007/978-3-031-58174-8_15",
  },
  {
    title: "MTTN: Multi-Pair Text to Text Narratives for Prompt Generation",
    abstract: "A text-to-text narrative approach for generating multi-pair prompts in NLP tasks.",
    venue: "arXiv Preprint",
    year: "2023",
    tags: ["NLP", "Prompt Generation", "Text-to-Text"],
    link: "https://arxiv.org/abs/2301.10172",
  },
];

export default function ResearchPage() {
  return (
    <>
      <div className={styles.pageAccent} aria-hidden="true" />
      <div className={styles.ghostTitle} aria-hidden="true">Research</div>

      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <SectionHeader
              label="Research"
              title="Publications & Papers"
              subtitle="My academic contributions across machine learning, distributed systems, and applied AI."
            />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className={styles.headerActions}>
              <a
                href="https://scholar.google.com/citations?user=snLPR60AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.scholarBadge}
              >
                <span>Google Scholar Profile</span>
                <span className={styles.arrow}>↗</span>
              </a>
              <a
                href="https://orcid.org/0009-0003-5233-7203"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orcidBadge}
              >
                <span>ORCID Profile</span>
                <span className={styles.arrow}>↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--space-12)" }}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.papersGrid}>
            {papers.map((paper, i) => (
              <ScrollReveal key={paper.title} delay={Math.min(i + 1, 5)}>
                <Card className={styles.paperCard}>
                  <div className={styles.paperMeta}>
                    <span className={styles.paperVenue}>{paper.venue}</span>
                    <span className={styles.paperYear}>{paper.year}</span>
                  </div>
                  <h3 className={styles.paperTitle}>{paper.title}</h3>
                  <p className={styles.paperAbstract}>{paper.abstract}</p>
                  <div className={styles.paperTags}>
                    {paper.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.paperLinks}>
                    {paper.link && (
                      <a href={paper.link} target="_blank" rel="noopener noreferrer" className={`${styles.paperLink} ${styles.paperLinkPrimary}`}>
                        Read paper ↗
                      </a>
                    )}
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
