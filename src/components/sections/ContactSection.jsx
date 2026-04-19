import { Button } from "../ui/Button";
import { CONTACT_LINKS } from "../../data/portfolio";
import { BORDER, TEXT_DIM } from "../../styles/theme";

export function ContactSection() {
  return (
    <section id="contact" style={{
      padding: "80px 0 60px",
      borderTop: `1px solid ${BORDER}`,
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 24px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: 32, fontWeight: 800, color: "#fff",
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 12,
        }}>
          Let's Build Something
        </h2>
        <p style={{ color: TEXT_DIM, fontSize: 16, marginBottom: 40, maxWidth: 500, margin: "0 auto 40px" }}>
          Open to AI Engineering, Technical Program Management, and leadership roles where strategy meets execution.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {CONTACT_LINKS.map((c, i) => (
            <Button key={i} href={c.href} variant="ghost" icon={c.icon}>
              {c.label}
            </Button>
          ))}
        </div>

        <div style={{ marginTop: 60, color: TEXT_DIM, fontSize: 12, opacity: 0.6 }}>
          © {new Date().getFullYear()} Jeff Milam. Built with obsessive attention to detail.
        </div>
      </div>
    </section>
  );
}
