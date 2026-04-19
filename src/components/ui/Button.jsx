import { memo } from "react";
import { CYAN, CYAN_GLOW, BORDER, TEXT, SURFACE_2 } from "../../styles/theme";

export const Button = memo(function Button({ 
  children, 
  onClick, 
  href, 
  download, 
  variant = "primary", 
  icon: Icon,
  style = {}
}) {
  const isLink = !!href;
  const Component = isLink ? "a" : "button";

  const variants = {
    primary: {
      background: CYAN,
      color: "#000",
      border: "none",
      boxShadow: `0 0 20px ${CYAN_GLOW}`,
    },
    ghost: {
      background: "transparent",
      color: TEXT,
      border: `1px solid ${BORDER}`,
    },
    surface: {
      background: SURFACE_2,
      color: TEXT,
      border: `1px solid ${BORDER}`,
    }
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontWeight: 600,
    fontSize: 14,
    padding: "12px 24px",
    borderRadius: 8,
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
    ...variants[variant],
    ...style
  };

  const handleMouseEnter = (e) => {
    if (variant === "primary") {
      e.currentTarget.style.transform = "translateY(-2px)";
    } else {
      e.currentTarget.style.borderColor = CYAN;
    }
  };

  const handleMouseLeave = (e) => {
    if (variant === "primary") {
      e.currentTarget.style.transform = "translateY(0)";
    } else {
      e.currentTarget.style.borderColor = variants[variant].border;
    }
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Icon && <Icon size={variant === "surface" ? 14 : 16} />}
      {children}
    </Component>
  );
});

