import { CYAN, TEXT_DIM } from "../../styles/theme";

export function Section({ id, title, icon: Icon, children, subtitle }) {
  return (
    <section id={id} style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 8,
        }}>
          {Icon && <Icon size={20} color={CYAN} />}
          <h2 style={{
            fontSize: 28, fontWeight: 700, color: "#fff",
            fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
            letterSpacing: "-0.02em",
          }}>{title}</h2>
        </div>
        {subtitle && (
          <p style={{ color: TEXT_DIM, fontSize: 15, marginBottom: 40, maxWidth: 600 }}>
            {subtitle}
          </p>
        )}
        {!subtitle && <div style={{ height: 32 }} />}
        {children}
      </div>
    </section>
  );
}
