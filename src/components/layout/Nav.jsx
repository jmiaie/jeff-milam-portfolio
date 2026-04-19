import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";
import { CYAN, TEXT_DIM, BORDER, TEXT } from "../../styles/theme";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sections = ["top", "resume", "sandfish", "re-tech", "quant", "philosophy", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Find the one closest to top
          const topOne = visible.reduce((prev, curr) => 
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActiveSection(topOne.target.id);
        }
      },
      { threshold: [0.1, 0.5], rootMargin: "-20% 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Resume", href: "#resume", id: "resume" },
    { label: "SandFish", href: "#sandfish", id: "sandfish" },
    { label: "RE Tech", href: "#re-tech", id: "re-tech" },
    { label: "Quant", href: "#quant", id: "quant" },
    { label: "Philosophy", href: "#philosophy", id: "philosophy" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled || mobileOpen ? "rgba(9,9,11,0.9)" : "transparent",
        backdropFilter: scrolled || mobileOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || mobileOpen ? `1px solid ${BORDER}` : "1px solid transparent",
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

          {/* Desktop Links */}
          <div style={{ display: "none", alignItems: "center", gap: 8 }} className="desktop-nav">
             {/* Note: I'll use a media query trick or just inline style with viewport check if possible.
                 Actually, I'll use a simple flex with a media query in index.css if needed, 
                 but I can also do it with a state. 
             */}
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} id="desktop-links">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{
                color: activeSection === l.id ? CYAN : TEXT_DIM, 
                textDecoration: "none", fontSize: 13,
                fontWeight: 600, transition: "all 0.2s",
                position: "relative",
                padding: "4px 0"
              }}>
                {l.label}
                {activeSection === l.id && (
                  <span style={{
                    position: "absolute", bottom: -2, left: 0, right: 0, height: 2,
                    background: CYAN, borderRadius: 2,
                    animation: "fadeIn 0.3s ease"
                  }} />
                )}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ 
              display: "none", background: "none", border: "none", color: TEXT, cursor: "pointer" 
            }}
            id="mobile-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            padding: "20px 0 40px",
            display: "flex", flexDirection: "column", gap: 20,
            animation: "fadeSlide 0.3s ease forwards"
          }}>
            {links.map(l => (
              <a 
                key={l.label} 
                href={l.href} 
                onClick={() => setMobileOpen(false)}
                style={{
                  color: activeSection === l.id ? CYAN : TEXT,
                  textDecoration: "none", fontSize: 18, fontWeight: 600
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Global Style for Responsive Nav */}
      <style>{`
        @media (max-width: 768px) {
          #desktop-links { display: none !important; }
          #mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}

