import { TrendingUp, Building2, BarChart3 } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { PROJECTS } from "../../data/portfolio";
import { CYAN, CYAN_DIM, TEXT_DIM } from "../../styles/theme";

export function LabSection() {
  return (
    <Section id="lab" title="Real Estate & Quant Lab" icon={TrendingUp}
      subtitle="Automated scanners and quantitative research pushing the boundaries of data-driven decision making.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        {PROJECTS.map((project, i) => (
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
                <span key={t} style={{
                  fontSize: 11, color: CYAN, padding: "3px 10px",
                  background: CYAN_DIM, borderRadius: 999,
                }}>{t}</span>
              ))}
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  );
}
