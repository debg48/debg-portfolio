import type { Metadata } from "next";
import styles from "./page.module.css";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Debgandhar Ghosh.",
};

const contacts = [
  {
    label: "Email",
    value: "debgandhar4000@gmail.com",
    href: "mailto:debgandhar4000@gmail.com",
    icon: "✉️",
  },
  {
    label: "Phone",
    value: "+91 86177 50297",
    href: "tel:+918617750297",
    icon: "📞",
  },
  {
    label: "Location",
    value: "Kolkata, India",
    href: "https://maps.google.com/?q=Kolkata,+India",
    icon: "📍",
  },
  {
    label: "LinkedIn",
    value: "debgandhar-ghosh",
    href: "https://linkedin.com/in/debgandhar-ghosh",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "debg48",
    href: "https://github.com/debg48",
    icon: "💻",
  },
];

export default function ContactPage() {
  return (
    <>
      <div className={styles.orbitalDecor} aria-hidden="true" />
      <div className={styles.ghostTitle} aria-hidden="true">Contact</div>

      <section className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <ScrollReveal>
            <SectionHeader
              label="Contact"
              title="Get in touch"
              subtitle="Feel free to reach out for collaborations, opportunities, or just to say hello."
            />
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingBottom: "var(--space-12)" }}>
        <div className={styles.pageHeaderInner}>
          <div className={styles.contactGrid}>
            {contacts.map((contact, i) => (
              <ScrollReveal key={contact.label} delay={Math.min(i + 1, 5)}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={styles.contactCard}
                >
                  <div className={styles.contactIcon}>{contact.icon}</div>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{contact.label}</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
