import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { CYAN, TEXT_DIM, BORDER } from "../../styles/theme";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Resume", href: "#resume" },
    { label: "SandFish", href: "#sandfish" },
    { label: "Lab", href: "#lab" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${BORDER}` : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 64,
        }}>
          <a href="#top" style={{
            color: "#fff", textDecoration: "none", fontWeight: 700,
            fontSize: 18, fontFamily: "'Space Grotesk', sans-serif",
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <Terminal size={18} color={CYAN} />
            JM
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                color: TEXT_DIM, textDecoration: "none", fontSize: 14,
                fontWeight: 500, transition: "color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color = CYAN}
                onMouseLeave={e => e.target.style.color = TEXT_DIM}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
