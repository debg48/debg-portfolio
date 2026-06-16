import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Debgandhar Ghosh — Portfolio",
    template: "%s | Debgandhar Ghosh",
  },
  description:
    "Portfolio of Debgandhar Ghosh — Researcher, Developer, and Creative Thinker. Explore research papers, projects, and more.",
  keywords: ["Debgandhar Ghosh", "portfolio", "developer", "researcher", "projects"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AnimatedBackground />
        <Navbar />
        <main style={{ paddingTop: "calc(var(--nav-height) + var(--nav-top-offset) + 24px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
