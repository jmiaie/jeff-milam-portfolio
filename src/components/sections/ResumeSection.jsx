import { useState } from "react";
import { Briefcase, Download, ChevronRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { Tag } from "../ui/Tag";
import { EXPERIENCE, EDUCATION } from "../../data/portfolio";
import { CYAN, CYAN_DIM, BORDER, TEXT, TEXT_DIM, SURFACE_2 } from "../../styles/theme";

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
        {/* Made accessible per feedback: wired to '#' for now or download attribute */}
        <a href="#" download style={{
          marginLeft: "auto",
          display: "inline-flex", alignItems: "center", gap: 6,
          background: SURFACE_2, border: `1px solid ${BORDER}`,
          textDecoration: "none",
          color: TEXT, fontSize: 13, fontWeight: 500, padding: "6px 16px",
          borderRadius: 8, cursor: "pointer", transition: "all 0.2s",
          fontFamily: "inherit",
        }}
          onMouseEnter={e => e.target.style.borderColor = CYAN}
          onMouseLeave={e => e.target.style.borderColor = BORDER}
        >
          <Download size={14} /> Download PDF
        </a>
      </div>

      {/* Education */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
        {EDUCATION.map((ed, i) => (
          <Glass key={i} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
        ))}
      </div>

      {/* Experience */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {filtered.map((exp, i) => (
          <Glass key={i} style={{
            opacity: 0,
            animation: `fadeSlide 0.4s ease ${i * 0.1}s forwards`,
          }}>
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
                <span key={t} style={{
                  fontSize: 11, color: TEXT_DIM, padding: "3px 10px",
                  border: `1px solid ${BORDER}`, borderRadius: 999,
                }}>{t}</span>
              ))}
            </div>
          </Glass>
        ))}
      </div>
    </Section>
  );
}
