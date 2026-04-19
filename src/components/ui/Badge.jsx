import { memo } from "react";
import { CYAN, CYAN_DIM, BORDER, TEXT_DIM } from "../../styles/theme";

export const Badge = memo(function Badge({ children, variant = "dim", size = "sm" }) {
  const styles = {
    dim: {
      background: CYAN_DIM,
      color: CYAN,
      border: `1px solid rgba(0,229,255,0.2)`,
    },
    outline: {
      background: "transparent",
      color: TEXT_DIM,
      border: `1px solid ${BORDER}`,
    }
  };

  const selected = styles[variant] || styles.dim;

  return (
    <span style={{
      fontSize: size === "sm" ? 11 : 12,
      padding: size === "sm" ? "3px 10px" : "4px 12px",
      borderRadius: 999,
      fontWeight: 600,
      display: "inline-block",
      ...selected,
    }}>
      {children}
    </span>
  );
});

