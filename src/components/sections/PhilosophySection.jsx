import { BookOpen, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { ARTICLES } from "../../data/portfolio";
import { CYAN, CYAN_DIM, TEXT_DIM } from "../../styles/theme";

export function PhilosophySection() {
  return (
    <Section id="philosophy" title="AI Philosophy & Thought Leadership" icon={BookOpen}
      subtitle="Writing on agentic workflows, inference economics, and the future of AI engineering.">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {ARTICLES.map((a, i) => (
          <Glass key={i} style={{
            display: "flex", flexDirection: "column", gap: 12,
            opacity: 0, animation: `fadeSlide 0.4s ease ${i * 0.15}s forwards`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                fontSize: 11, color: CYAN, padding: "3px 10px",
                background: CYAN_DIM, borderRadius: 999, fontWeight: 600,
              }}>{a.tag}</span>
              <span style={{ fontSize: 12, color: TEXT_DIM }}>{a.date}</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>{a.title}</h3>
            <p style={{ color: TEXT_DIM, fontSize: 14, lineHeight: 1.7 }}>{a.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: CYAN, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
              Read more <ArrowRight size={14} />
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  );
}
