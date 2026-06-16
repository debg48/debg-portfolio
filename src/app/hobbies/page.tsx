import type { Metadata } from "next";
import styles from "./page.module.css";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "Hobbies and interests of Debgandhar Ghosh — beyond code.",
};

const hobbies = [
  {
    emoji: "🎸",
    category: "Music / Performance",
    title: "Playing Guitar",
    desc: "Practicing and performing acoustic and electric guitar. Exploring melody lines, fingerstyle patterns, and musical arrangements.",
    featured: false,
  },
  {
    emoji: "🎤",
    category: "Music",
    title: "Singing",
    desc: "Expressing musical ideas and emotions through vocal performance. Exploring diverse genres and techniques to expand vocal range.",
    featured: false,
  },
  {
    emoji: "✍️",
    category: "Creative Writing",
    title: "Writing Songs",
    desc: "Composing original lyrics and pairing them with melodic structures. Bringing together poetry and music to capture personal reflections.",
    featured: false,
  },
  {
    emoji: "🏏",
    category: "Sports / Athletics",
    title: "Cricket",
    desc: "Active engagement in playing cricket. Valuing the precision, team coordination, strategy, and physical fitness involved in the sport.",
    featured: false,
  },
  {
    emoji: "📚",
    category: "Intellectual",
    title: "Reading",
    desc: "Exploring literature, history, science fiction, and technical publications. Constantly learning and expanding perspectives through books.",
    featured: false,
  },
];

export default function HobbiesPage() {
  return (
    <>
      <div className={styles.orbitalLine} aria-hidden="true" />
      <div className={styles.orbitalLine2} aria-hidden="true" />
      <div className={styles.ghostTitle} aria-hidden="true">Hobbies</div>

      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <SectionHeader
              label="Beyond Code"
              title="Things I enjoy"
              subtitle="Life beyond the terminal — the hobbies and interests that keep me curious and creative."
            />
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--space-8)" }}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.hobbiesGrid}>
            {hobbies.map((hobby, i) => (
              <ScrollReveal 
                key={hobby.title} 
                delay={Math.min(i + 1, 5)}
                className={hobby.featured ? styles.hobbyFeaturedWrapper : ''}
              >
                <Card className={styles.hobbyCard}>
                  <div className={styles.hobbyMedia}>
                    <span className={styles.hobbyEmoji}>{hobby.emoji}</span>
                  </div>
                  <div className={styles.hobbyBody}>
                    <div className={styles.hobbyEyebrow}>{hobby.category}</div>
                    <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
                    <p className={styles.hobbyDesc}>{hobby.desc}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className={styles.quoteSection}>
          <blockquote className={styles.quote}>
            &ldquo;The purpose of life is not to be happy. It is to be useful, to be
            honorable, to be compassionate, to have it make some difference that
            you have lived.&rdquo;
          </blockquote>
          <p className={styles.quoteAttribution}>— Ralph Waldo Emerson</p>
        </section>
      </ScrollReveal>
    </>
  );
}
