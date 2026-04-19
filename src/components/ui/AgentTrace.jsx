import { useState, useEffect } from "react";
import { Terminal, Brain, Search, Code, Check } from "lucide-react";
import { CYAN, CYAN_DIM, BORDER, TEXT_DIM } from "../../styles/theme";

const TRACE_STEPS = [
  { icon: Terminal, text: "Task: 'Validate Q4 supply chain resilience'", type: "input" },
  { icon: Search, text: "Searching global logistics data pools...", type: "process" },
  { icon: Brain, text: "Synthesizing geopolitical risk vectors...", type: "process" },
  { icon: Code, text: "Running Monte Carlo on lead-time variance...", type: "process" },
  { icon: Check, text: "Result: 92% confidence in current shielding.", type: "success" },
];

export function AgentTrace() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TRACE_STEPS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "rgba(0,0,0,0.4)",
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      padding: 24,
      fontFamily: "'JetBrains Mono', monospace",
      position: "relative",
      overflow: "hidden",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: TEXT_DIM,
        fontSize: 11,
        marginBottom: 8,
        textTransform: "uppercase",
        letterSpacing: "0.1em"
      }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80" }} />
        Live Agent Trace: [SandFish-v2]
      </div>

      {TRACE_STEPS.map((step, i) => {
        const isActive = i === activeStep;
        const isPast = i < activeStep;
        
        return (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 13,
            color: isActive ? CYAN : (isPast ? "#fff" : TEXT_DIM),
            opacity: isActive ? 1 : (isPast ? 0.8 : 0.4),
            transition: "all 0.5s ease",
            transform: isActive ? "translateX(4px)" : "translateX(0)"
          }}>
            <step.icon size={14} style={{ flexShrink: 0 }} />
            <span>{step.text}</span>
            {isActive && (
              <span style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: CYAN,
                marginLeft: 4,
                animation: "pulse 1.5s infinite"
              }} />
            )}
          </div>
        );
      })}

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
