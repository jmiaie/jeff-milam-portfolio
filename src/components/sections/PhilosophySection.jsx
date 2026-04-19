import { BookOpen, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { Badge } from "../ui/Badge";
import { Reveal } from "../ui/Reveal";
import { ARTICLES } from "../../data/portfolio";
import { CYAN, TEXT_DIM } from "../../styles/theme";

export function PhilosophySection() {
  return (
    <Section id="philosophy" title="AI Philosophy & Thought Leadership" icon={BookOpen}
      subtitle="Writing on agentic workflows, inference economics, and the future of AI engineering.">
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {ARTICLES.map((a, i) => (
          <Reveal key={i} delay={i * 100}>
            <Glass style={{
              display: "flex", flexDirection: "column", gap: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Badge>{a.tag}</Badge>
                <span style={{ fontSize: 12, color: TEXT_DIM }}>{a.date}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, lineHeight: 1.3 }}>{a.title}</h3>
              <p style={{ color: TEXT_DIM, fontSize: 14, lineHeight: 1.7 }}>{a.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: CYAN, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                Read more <ArrowRight size={14} />
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


