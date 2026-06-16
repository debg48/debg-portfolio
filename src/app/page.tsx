import styles from "./page.module.css";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const skills = [
  "Python", "Go", "Pandas", "Numpy", "TensorFlow", "Keras",
  "OpenCV", "Scikit-Learn", "Computer Vision", "NLP",
  "CNN/RNN", "Transformer", "GenAI", "FastAPI", "Linux"
];

const experience = [
  {
    date: "07/2026 — Present",
    role: "Associate 2",
    org: "PwC",
    desc: "Kolkata, India.",
  },
  {
    date: "06/2025 — 05/2026",
    role: "Backend and AI consultant and developer (Freelance)",
    org: "CrazePay",
    desc: "Built the entire backend from authentication (login/logout) to recharge APIs, managed CI pipelines, and integrated AWS services like Secrets Manager, S3, and DynamoDB. Also designed a Go-based regex extractor for telecom plan benefits, automating Jio, Airtel, and VI details to save $10–$50/month in operations.",
  },
  {
    date: "02/2024 — 09/2024",
    role: "AI/ML Intern",
    org: "CrazeBazar",
    desc: "Developed AI/ML solutions for e-commerce, including a PAN Card KYC system using Computer Vision and OCR. Contributed to search optimization and recommendation engines.",
  },
  {
    date: "09/2022 — 11/2023",
    role: "Research Intern",
    org: "University of Calcutta",
    desc: "Implemented and validated 'Labeling and Segmentation of Vertebra using SegFormer', accepted at the 8th International Conference on Computer Vision and Image Processing.",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Smart India Hackathon'22 Winner",
    desc: "Achieved first place in the nationwide hackathon.",
  },
  {
    icon: "📜",
    title: "Deep Learning Specialization",
    desc: "Coursera certification covering neural networks, hyperparameter tuning, structuring ML projects, CNNs, and sequence models.",
  },
];

const education = [
  {
    icon: "🎓",
    degree: "M.E. in Information Technology",
    school: "Jadavpur University",
    year: "2024 — 2026",
    cgpa: "8.71",
  },
  {
    icon: "📚",
    degree: "B.Tech in Electronics and Communication",
    school: "Calcutta Institute of Engineering and Management",
    year: "2019 — 2023",
    cgpa: "9.21",
  },
];

const featuredProjects = [
  {
    category: "AI / Natural Language Processing",
    title: "Semantic Recommender System",
    desc: "CPU-optimized AI product recommender built for SIH 2022, running sub-50ms query latency on lightweight hardware to eliminate GPU hosting costs.",
    tech: ["FastAPI", "Qdrant", "Sentence-Transformers", "Python"],
    github: "https://github.com/debg48/SIH_ecom",
    live: "https://colab.research.google.com/drive/18eI0KWHEa5YUxJXlpZNbXwtt-DzmJZqO?usp=sharing",
    highlight: {
      label: "Saving:",
      value: "~$100+/month",
      suffix: "(100% GPU cost saved)"
    }
  },
  {
    category: "Machine Learning / Backend",
    title: "Real-time Hate Speech & Misinformation Detection",
    desc: "Real-time moderation engine to flag toxic content instantly.",
    tech: ["FastAPI", "Python", "GCP", "Perspective API"],
    github: "#",
    live: null,
    highlight: {
      label: "Impact:",
      value: "Automated user safety",
      suffix: ""
    }
  },
  {
    category: "Data Extraction / Backend",
    title: "Recharge Plan Information Extraction",
    desc: "Automated Go pipeline for extracting carrier plan benefits.",
    tech: ["Go", "Regex Extraction", "Data Extraction"],
    github: null,
    live: null,
    highlight: {
      label: "Saving:",
      value: "$10–$50/month",
      suffix: "in operations"
    }
  }
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <ScrollReveal>
              <span className={styles.heroEyebrow}>Portfolio</span>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h1 className={styles.heroName}>
                Debgandhar<br />Ghosh
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className={styles.heroTitle}>
                Researcher, AI/ML developer, and creator — crafting elegant
                solutions in Computer Vision, NLP, and intelligent backend systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className={styles.heroCtas}>
                <Link href="/projects" className={styles.ctaPrimary}>
                  View projects
                </Link>
                <Link href="/research" className={styles.ctaSecondary}>
                  Read research
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2}>
            <div className={styles.avatarWrapper}>
              <div className={styles.orbitalArc} />
              <div className={styles.bubbleDashed} />
              <div className={styles.bubbleOrange} />
              <div className={styles.bubbleGrey} />
              <div className={styles.avatar}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/sd-removebg-preview (1).png?v=2" 
                  alt="Debgandhar Ghosh" 
                  className={styles.avatarImg}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.ghostText} aria-hidden="true">Developer</div>
      </section>

      {/* ABOUT */}
      <section className={styles.sectionLifted} id="about">
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="About"
              title="A bit about me"
              subtitle="Driven by curiosity and the desire to build things that matter."
            />
          </ScrollReveal>

          <div className={styles.aboutGrid}>
            <ScrollReveal>
              <div className={styles.aboutText}>
                <p>
                  I am Debgandhar Ghosh, an AI/ML engineer and researcher specializing in the development of intelligent systems, with a focus on Deep Learning and Computer Vision. My professional experience encompasses end-to-end machine learning pipelines, natural language processing (NLP) applications, and scalable backend architecture design.
                </p>
                <p>
                  I am dedicated to engineering data-driven solutions for complex, real-world challenges. Key achievements include developing KYC automation systems, real-time content moderation pipelines, and building optimized Go-based extraction engines that significantly reduce operational overhead. My work is guided by the principles of writing clean, maintainable code that delivers measurable impact.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className={styles.statsGrid}>
                {[
                  { number: "1+", label: "Years Exp" },
                  { number: "6", label: "Publications" },
                ].map((stat) => (
                  <Card key={stat.label} className={styles.statCard}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="Technologies"
              title="Tools I work with"
              subtitle="Languages, frameworks, and platforms I use to bring ideas to life."
            />
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className={styles.skillsContainer}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="Projects"
              title="Featured Work"
              subtitle="A selection of software systems and AI/ML applications I've developed."
            />
          </ScrollReveal>
          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i + 1}>
                <Card className={styles.projectCard}>
                  <div className={styles.projectBody}>
                    <div className={styles.projectEyebrow}>{project.category}</div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    <div className={styles.projectFooter}>
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
                      {((project.github || project.live) && (
                        <div className={styles.projectLinks}>
                          {project.github && (
                            <a href={project.github} className={styles.projectLink}>
                              Source code ↗
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} className={styles.projectLink}>
                              Live demo →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="Experience"
              title="Career journey"
              subtitle="Where I've worked and what I've built along the way."
            />
          </ScrollReveal>
          <div className={styles.timeline}>
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.role} delay={i + 1}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineDate}>{exp.date}</div>
                  <div className={styles.timelineRole}>{exp.role}</div>
                  <div className={styles.timelineOrg}>{exp.org}</div>
                  <div className={styles.timelineDesc}>{exp.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="Education"
              title="Academic background"
            />
          </ScrollReveal>
          <div className={styles.educationGrid}>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.degree} delay={i + 1}>
                <Card>
                  <div className={styles.eduIcon}>{edu.icon}</div>
                  <div className={styles.eduDegree}>{edu.degree}</div>
                  <div className={styles.eduSchool}>{edu.school}</div>
                  <div className={styles.eduYear}>{edu.year}</div>
                  {edu.cgpa && <div className={styles.eduCgpa}>CGPA: {edu.cgpa}</div>}
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & CERTIFICATIONS */}
      <section className={styles.sectionLifted} style={{ marginBottom: "var(--space-12)" }}>
        <div className={styles.sectionInner}>
          <ScrollReveal>
            <SectionHeader
              label="Highlights"
              title="Achievements & Certifications"
            />
          </ScrollReveal>
          <div className={styles.educationGrid}>
            {achievements.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <Card>
                  <div className={styles.eduIcon}>{item.icon}</div>
                  <div className={styles.eduDegree}>{item.title}</div>
                  <div className={styles.eduSchool}>{item.desc}</div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
