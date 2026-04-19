import { CYAN, CYAN_GLOW, TEXT_DIM } from "../../styles/theme";

export function ProgressBar({ label, value, time, active = false }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
        <span style={{ color: active ? CYAN : TEXT_DIM, fontWeight: active ? 600 : 400 }}>{label}</span>
        <span style={{ color: TEXT_DIM, fontFamily: "monospace" }}>{time}</span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
        <div style={{
          height: "100%", borderRadius: 3,
          background: active
            ? `linear-gradient(90deg, ${CYAN}, rgba(0,229,255,0.5))`
            : "rgba(255,255,255,0.15)",
          width: `${value}%`,
          transition: "width 1s ease",
          boxShadow: active ? `0 0 12px ${CYAN_GLOW}` : "none",
        }} />
      </div>
    </div>
  );
}
