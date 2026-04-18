import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { ResumeSection } from "./components/sections/ResumeSection";
import { SandFishSection } from "./components/sections/SandFishSection";
import { LabSection } from "./components/sections/LabSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";
import { ContactSection } from "./components/sections/ContactSection";
import { BORDER } from "./styles/theme";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <ResumeSection />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <SandFishSection />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <LabSection />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <PhilosophySection />
      <ContactSection />
    </>
  );
}

export default App;
