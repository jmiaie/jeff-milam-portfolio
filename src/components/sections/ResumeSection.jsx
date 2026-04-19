import { useState } from "react";
import { Reveal } from "../ui/Reveal";
import { Briefcase, Download, ChevronRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { Tag } from "../ui/Tag";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { SKILL_GROUPS, EXPERIENCE, EDUCATION } from "../../data/portfolio";
import { CYAN, CYAN_DIM, BORDER, TEXT, TEXT_DIM, SURFACE_2 } from "../../styles/theme";
import { SkillMatrix } from "../ui/SkillMatrix";

export function ResumeSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "AI Engineer", "TPM", "Construction Director"];

  const filtered = filter === "All"
    ? EXPERIENCE
    : EXPERIENCE.filter(e => e.tags.includes(filter));

  return (
    <Section id="resume" title="Interactive Resume" icon={Briefcase}
      subtitle="Filter by role type. ATS-optimized content with one-click PDF download.">

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
        {filters.map(f => (
          <Tag key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</Tag>
        ))}
        <Button href="#" download variant="surface" icon={Download} style={{ marginLeft: "auto" }}>
          Download PDF
        </Button>
      </div>

      <SkillMatrix />

      {/* Education */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
        {EDUCATION.map((ed, i) => (
          <Reveal key={i} delay={i * 100}>
            <Glass style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: CYAN_DIM, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <ed.icon size={20} color={CYAN} />
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{ed.degree}</div>
                  <div style={{ color: TEXT_DIM, fontSize: 13 }}>{ed.school} · {ed.gpa}</div>
                </div>
              </div>
              {ed.details && (
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "8px 16px",
                  paddingLeft: 60,
                  borderTop: `1px solid ${BORDER}`,
                  paddingTop: 12
                }}>
                  {ed.details.map(detail => (
                    <div key={detail} style={{ color: TEXT_DIM, fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: CYAN }} />
                      {detail}
                    </div>
                  ))}
                </div>
              )}
            </Glass>
          </Reveal>
        ))}
      </div>

      {/* Experience */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filtered.map((exp, i) => (
          <Reveal key={i} delay={i * 50}>
            <Glass>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "flex-start",
                flexWrap: "wrap", gap: 8, marginBottom: 12,
              }}>
                <div>
                  <h3 style={{ color: "#fff", fontSize: 17, fontWeight: 600, marginBottom: 4 }}>
                    {exp.title}
                  </h3>
                  <div style={{ color: CYAN, fontSize: 14, fontWeight: 500 }}>{exp.org}</div>
                </div>
                <div style={{ color: TEXT_DIM, fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>
                  {exp.period}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {exp.bullets.map((b, j) => (
                  <div key={j} style={{
                    display: "flex", gap: 10, fontSize: 14, color: TEXT, lineHeight: 1.6,
                  }}>
                    <ChevronRight size={14} color={CYAN} style={{ marginTop: 4, flexShrink: 0 }} />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                {exp.tags.map(t => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

