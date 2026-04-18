import { useState } from "react";
import { Layers, GitBranch, Box, Workflow, Database, Shield, Code2, ChevronDown, BarChart3 } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { SANDFISH_METRICS, SANDFISH_CODE } from "../../data/portfolio";
import { CYAN, CYAN_GLOW, TEXT_DIM, TEXT, BORDER } from "../../styles/theme";

export function SandFishSection() {
  const [showCode, setShowCode] = useState(false);

  return (
    <Section id="sandfish" title="SandFish — Multi-Agent Swarm Platform" icon={Layers}
      subtitle="Open-source orchestration framework for building and deploying intelligent agent swarms.">

      {/* Metrics */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16, marginBottom: 40,
      }}>
        {SANDFISH_METRICS.map((m, i) => (
          <Glass key={i} style={{ textAlign: "center", padding: "28px 20px" }}>
            <m.icon size={24} color={CYAN} style={{ margin: "0 auto 12px" }} />
            <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
              {m.value}
            </div>
            <div style={{ fontSize: 13, color: TEXT_DIM }}>{m.label}</div>
          </Glass>
        ))}
      </div>

      {/* Architecture */}
      <Glass style={{ marginBottom: 24, padding: 32 }}>
        <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <GitBranch size={18} color={CYAN} /> Architecture Overview
        </h3>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {[
            { icon: Box, title: "Agent Registry", desc: "Dynamic agent pool with role-based routing and capability indexing" },
            { icon: Workflow, title: "Swarm Orchestrator", desc: "Pipeline, parallel, consensus, and hierarchical execution strategies" },
            { icon: Database, title: "Context Store", desc: "Shared memory with vector search for inter-agent knowledge transfer" },
            { icon: Shield, title: "ZTB Engine", desc: "Zero Token Burn optimization layer reducing inference costs by 40%" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: 20, borderRadius: 10,
              background: "rgba(0,229,255,0.04)",
              border: `1px solid rgba(0,229,255,0.08)`,
            }}>
              <item.icon size={20} color={CYAN} style={{ marginBottom: 10 }} />
              <div style={{ color: "#fff", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
              <div style={{ color: TEXT_DIM, fontSize: 13, lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </Glass>

      {/* Code */}
      <Glass style={{ padding: 0, overflow: "hidden" }}>
        <button
          onClick={() => setShowCode(!showCode)}
          style={{
            width: "100%", padding: "16px 24px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "transparent", border: "none", cursor: "pointer",
            color: "#fff", fontWeight: 600, fontSize: 15,
            fontFamily: "inherit",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Code2 size={18} color={CYAN} /> Code Example — Swarm Pipeline
          </span>
          <ChevronDown size={18} style={{
            transform: showCode ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease", color: TEXT_DIM,
          }} />
        </button>
        {showCode && (
          <div style={{
            padding: "0 24px 24px",
            animation: "fadeSlide 0.3s ease forwards",
          }}>
            <pre style={{
              background: "rgba(0,0,0,0.5)",
              borderRadius: 8,
              padding: 20,
              overflowX: "auto",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: 12.5,
              lineHeight: 1.7,
              color: TEXT,
              border: `1px solid ${BORDER}`,
            }}>
              <code>{SANDFISH_CODE}</code>
            </pre>
          </div>
        )}
      </Glass>

      {/* Benchmark Chart */}
      <Glass style={{ marginTop: 24 }}>
        <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
          <BarChart3 size={18} color={CYAN} /> Performance Benchmarks
        </h3>
        {[
          { label: "SandFish", value: 95, time: "1.2s" },
          { label: "LangGraph", value: 45, time: "6.1s" },
          { label: "CrewAI", value: 38, time: "7.4s" },
          { label: "AutoGen", value: 32, time: "8.9s" },
        ].map((b, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
              <span style={{ color: i === 0 ? CYAN : TEXT_DIM, fontWeight: i === 0 ? 600 : 400 }}>{b.label}</span>
              <span style={{ color: TEXT_DIM, fontFamily: "monospace" }}>{b.time}</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "rgba(255,255,255,0.06)" }}>
              <div style={{
                height: "100%", borderRadius: 3,
                background: i === 0
                  ? `linear-gradient(90deg, ${CYAN}, rgba(0,229,255,0.5))`
                  : "rgba(255,255,255,0.15)",
                width: `${b.value}%`,
                transition: "width 1s ease",
                boxShadow: i === 0 ? `0 0 12px ${CYAN_GLOW}` : "none",
              }} />
            </div>
          </div>
        ))}
      </Glass>
    </Section>
  );
}
