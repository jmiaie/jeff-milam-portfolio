import { Nav } from "./components/layout/Nav";
import { Hero } from "./components/sections/Hero";
import { ResumeSection } from "./components/sections/ResumeSection";
import { SandFishSection } from "./components/sections/SandFishSection";
import { RETechSection } from "./components/sections/RETechSection";
import { QuantSection } from "./components/sections/QuantSection";
import { PhilosophySection } from "./components/sections/PhilosophySection";
import { ContactSection } from "./components/sections/ContactSection";
import { BackToTop } from "./components/ui/BackToTop";
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
      <RETechSection />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <QuantSection />
      <div style={{
        width: "100%", height: 1,
        background: `linear-gradient(90deg, transparent, ${BORDER}, transparent)`,
      }} />
      <PhilosophySection />
      <ContactSection />
      <BackToTop />
    </>
  );
}


export default App;
