import { BarChart3 } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { Badge } from "../ui/Badge";
import { QUANT_PROJECTS } from "../../data/portfolio";
import { CYAN, TEXT_DIM } from "../../styles/theme";

export function QuantSection() {
  return (
    <Section id="quant" title="Quantitative Finance" icon={BarChart3}
      subtitle="Backtesting frameworks, momentum strategies, and risk-adjusted portfolio optimization.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        {QUANT_PROJECTS.map((project, i) => (
          <Glass key={i}>
            <project.icon size={28} color={CYAN} style={{ marginBottom: 16 }} />
            <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              {project.title}
            </h3>
            <p style={{ color: TEXT_DIM, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              {project.desc}
            </p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {project.tags.map(t => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  );
}

