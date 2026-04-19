import { CYAN, CYAN_DIM, BORDER, TEXT_DIM } from "../../styles/theme";
import { SKILL_GROUPS } from "../../data/portfolio";
import { Glass } from "./Glass";

export function SkillMatrix() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: 16,
      marginBottom: 32
    }}>
      {SKILL_GROUPS.map((group) => (
        <Glass key={group.category} style={{
          padding: "20px 24px"
        }}>
          <div style={{
            color: CYAN,
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            <div style={{ width: 12, height: 1, background: CYAN }} />
            {group.category}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {group.skills.map(skill => (
              <div key={skill} style={{
                fontSize: 13,
                color: "#fff",
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${BORDER}`,
                padding: "6px 12px",
                borderRadius: 6,
                transition: "all 0.2s ease"
              }}>
                {skill}
              </div>
            ))}
          </div>
        </Glass>
      ))}
    </div>
  );
}
