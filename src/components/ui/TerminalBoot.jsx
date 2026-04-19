import { useState, useEffect, useRef } from "react";
import { CYAN, TEXT_DIM, TEXT, BORDER } from "../../styles/theme";

const BOOT_LINES = [
  { text: "$ jeff-milam --aie-init", delay: 0, type: "cmd" },
  { text: "[BOOT] Initializing neural identity...", delay: 400, type: "sys" },
  { text: "├─ MBA, Advanced Finance (4.0 GPA) ....... ✓", delay: 800, type: "ok" },
  { text: "├─ M.S. Artificial Intelligence Eng ...... ✓", delay: 1100, type: "ok" },
  { text: "├─ 13yr TPM & Engineering Lead ........... ✓", delay: 1400, type: "ok" },
  { text: "├─ OMPA Knowledge Graph Linked ........... ✓", delay: 1700, type: "ok" },
  { text: "└─ SandFish Agent Swarm Ready ............ ✓", delay: 2000, type: "ok" },
  { text: "[SYS] Syncing vector context stores...", delay: 2500, type: "sys" },
  { text: "[OK] Agentic systems online.", delay: 3000, type: "success" },
  { text: "", delay: 3400, type: "blank" },
  { text: "Ready. Type 'help' to audit capabilities.", delay: 3500, type: "prompt" },
];

export function TerminalBoot({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [cursor, setCursor] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const timers = BOOT_LINES.map((line) =>
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
      }, line.delay)
    );
    const done = setTimeout(() => onComplete?.(), 4200);
    return () => { timers.forEach(clearTimeout); clearTimeout(done); };
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setCursor(c => !c), 530);
    return () => clearInterval(id);
  }, []);

  const colorFor = (type) => {
    switch (type) {
      case "cmd": return CYAN;
      case "sys": return TEXT_DIM;
      case "ok": return "#4ade80";
      case "success": return CYAN;
      case "prompt": return TEXT;
      default: return TEXT;
    }
  };

  return (
    <div style={{
      background: "rgba(0,0,0,0.6)",
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      backdropFilter: "blur(20px)",
      padding: "20px 24px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 680,
      width: "100%",
      minHeight: 280,
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ display: "flex", gap: 6, marginBottom: 16 }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: 12, color: TEXT_DIM, fontSize: 11 }}>jeff@milam ~ portfolio</span>
      </div>
      <div ref={ref} style={{ overflowY: "auto", maxHeight: 240 }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            color: colorFor(l.type),
            opacity: 0,
            animation: "fadeSlide 0.3s ease forwards",
          }}>
            {l.text}
            {i === lines.length - 1 && l.type === "prompt" && (
              <span style={{
                display: "inline-block",
                width: 8,
                height: 16,
                background: cursor ? CYAN : "transparent",
                marginLeft: 4,
                verticalAlign: "text-bottom",
              }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
