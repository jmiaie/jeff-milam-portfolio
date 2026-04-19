import { useState } from "react";
import { Layers, GitBranch, Box, Workflow, Database, Shield, Code2, ChevronDown, BarChart3 } from "lucide-react";
import { Section } from "../ui/Section";
import { Glass } from "../ui/Glass";
import { Badge } from "../ui/Badge";
import { ProgressBar } from "../ui/ProgressBar";
import { Reveal } from "../ui/Reveal";
import { AgentTrace } from "../ui/AgentTrace";
import { SANDFISH_METRICS, SANDFISH_CODE, AI_PROJECTS } from "../../data/portfolio";
import { CYAN, CYAN_GLOW, TEXT_DIM, TEXT, BORDER, CYAN_DIM } from "../../styles/theme";

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
          <Reveal key={i} delay={i * 100}>
            <Glass style={{ textAlign: "center", padding: "28px 20px" }}>
              <m.icon size={24} color={CYAN} style={{ margin: "0 auto 12px" }} />
              <div style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                {m.value}
              </div>
              <div style={{ fontSize: 13, color: TEXT_DIM }}>{m.label}</div>
            </Glass>
          </Reveal>
        ))}
      </div>

      <Reveal threshold={0.2}>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: 24, 
          marginBottom: 24 
        }}>
          {/* Architecture */}
          <Glass style={{ padding: 32 }}>
            <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 600, marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <GitBranch size={18} color={CYAN} /> Architecture Overview
            </h3>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}>
              {[
                { icon: Box, title: "Agent Registry", desc: "Dynamic agent pool with role-based routing" },
                { icon: Workflow, title: "Swarm Orchestrator", desc: "Pipeline and consensus strategies" },
                { icon: Database, title: "Context Store", desc: "Shared memory with vector search" },
                { icon: Shield, title: "ZTB Engine", desc: "Zero Token Burn optimization" },
              ].map((item, i) => (
                <div key={i} style={{
                  padding: 16, borderRadius: 10,
                  background: "rgba(0,229,255,0.04)",
                  border: `1px solid rgba(0,229,255,0.08)`,
                }}>
                  <item.icon size={16} color={CYAN} style={{ marginBottom: 8 }} />
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: TEXT_DIM, fontSize: 11, lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </Glass>

          {/* Live Trace */}
          <AgentTrace />
        </div>
      </Reveal>

      {/* Code */}
      <Reveal>
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
      </Reveal>

      {/* Benchmark Chart */}
      <Reveal>
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
            <ProgressBar 
              key={i} 
              label={b.label} 
              value={b.value} 
              time={b.time} 
              active={i === 0} 
            />
          ))}
        </Glass>
      </Reveal>

      {/* AI Projects */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {AI_PROJECTS.map((project, i) => (
          <Reveal key={i} delay={i * 100}>
            <Glass>
              <project.icon size={24} color={CYAN} style={{ marginBottom: 12 }} />
              <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{project.title}</h4>
              <p style={{ color: TEXT_DIM, fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{project.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {project.tags.map(t => (
                  <Badge key={t} size="sm">{t}</Badge>
                ))}
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
