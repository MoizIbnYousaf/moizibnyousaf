import HeroVerse from "@/components/HeroVerse";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import EffortMeter from "@/components/EffortMeter";
import GeometricBackground from "@/components/GeometricBackground";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        {/* Background elements */}
        <GeometricBackground />
        
        {/* Effort meter - fixed on right */}
        <EffortMeter />
        
        {/* Main content */}
        <main className="relative z-10">
          {/* Hero section with the verse */}
          <HeroVerse />
          
          {/* Journey section */}
          <Journey />
          
          {/* Contact section */}
          <Contact />
        </main>
      </div>
    </SmoothScroll>
  );
}