import { CYAN, BORDER, CYAN_DIM, TEXT_DIM } from "../../styles/theme";

export function Tag({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "6px 16px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 500,
        border: `1px solid ${active ? CYAN : BORDER}`,
        background: active ? CYAN_DIM : "transparent",
        color: active ? CYAN : TEXT_DIM,
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontFamily: "inherit",
      }}
    >
      {children}
    </button>
  );
}
