import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { CYAN, CYAN_GLOW, BORDER } from "../../styles/theme";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(9,9,11,0.8)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${BORDER}`,
        color: CYAN,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 90,
        boxShadow: `0 0 15px rgba(0,229,255,0.1)`,
        transition: "all 0.3s ease",
        animation: "fadeIn 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = CYAN;
        e.currentTarget.style.boxShadow = `0 0 20px ${CYAN_GLOW}`;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = BORDER;
        e.currentTarget.style.boxShadow = `0 0 15px rgba(0,229,255,0.1)`;
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
