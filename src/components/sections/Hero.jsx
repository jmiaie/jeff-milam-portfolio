import { useState } from "react";
import { Activity, ArrowRight, Github } from "lucide-react";
import { TerminalBoot } from "../ui/TerminalBoot";
import { NeuralBackground } from "../ui/NeuralBackground";
import { Button } from "../ui/Button";
import { CYAN, CYAN_GLOW, CYAN_DIM, TEXT_DIM, TEXT, BORDER } from "../../styles/theme";

export function Hero() {
  const [booted, setBooted] = useState(false);

  return (
    <section id="top" style={{
      minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "120px 24px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      <NeuralBackground />
      {/* Grid BG */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: 600, height: 600,
        background: `radial-gradient(circle, ${CYAN_GLOW} 0%, transparent 60%)`,
        filter: "blur(80px)", opacity: 0.4,
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        textAlign: "center",
        opacity: 0, animation: "fadeIn 0.6s ease 0.2s forwards",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: CYAN_DIM, border: `1px solid ${CYAN_GLOW}`,
          borderRadius: 999, padding: "6px 16px", marginBottom: 32, fontSize: 13,
          color: CYAN, fontWeight: 500,
        }}>
          <Activity size={14} /> Available for AIE · Senior AI PM · Technical Leadership
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          fontWeight: 800,
          color: "#fff",
          fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Jeff Milam
        </h1>
        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: TEXT_DIM,
          maxWidth: 600,
          margin: "0 auto 48px",
          lineHeight: 1.6,
        }}>
          MBA · M.S. AI Engineering · 13-Year TPM Veteran<br />
          I lead the boardroom <span style={{ color: CYAN }}>and</span> architect the production intelligence.
        </p>
      </div>

      <div style={{
        position: "relative", zIndex: 1, width: "100%", maxWidth: 700,
        display: "flex", justifyContent: "center",
        opacity: 0, animation: "fadeSlide 0.8s ease 0.5s forwards",
      }}>
        <TerminalBoot onComplete={() => setBooted(true)} />
      </div>

      {booted && (
        <div style={{
          marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center",
          opacity: 0, animation: "fadeIn 0.5s ease forwards",
          position: "relative", zIndex: 1,
        }}>
          <Button href="#resume" icon={ArrowRight}>
            View Resume
          </Button>
          <Button href="#sandfish" variant="ghost" icon={Github}>
            SandFish Project
          </Button>
        </div>

      )}
    </section>
  );
}
