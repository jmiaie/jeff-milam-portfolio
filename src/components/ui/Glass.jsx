import { useState } from "react";
import { SURFACE, SURFACE_2, BORDER } from "../../styles/theme";

export function Glass({ children, style, hover = true, onClick }) {
  const [hovered, setHovered] = useState(false);
  
  const isInteractive = !!onClick;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role={isInteractive ? "button" : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={(e) => {
        if (isInteractive && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick(e);
        }
      }}
      style={{
        background: hovered && hover ? SURFACE_2 : SURFACE,
        border: `1px solid ${hovered && hover ? "rgba(0,229,255,0.15)" : BORDER}`,
        borderRadius: 12,
        padding: 24,
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
        cursor: isInteractive ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
