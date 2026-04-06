import Container from "@/components/Container";
import Footer from "@/components/Footer";

import HeroSection from "@/sections/HeroSection";
import SolutionSection from "@/sections/SolutionSection";
import ChallengesSection from "@/sections/ChallengesSection";
import AdvantagesSection from "@/sections/AdvantagesSection";
import WhySection from "@/sections/WhySection";
import MarketSection from "@/sections/MarketSection";

export default function HomePage() {
  return (
    <Container>
      <HeroSection />
      <main className="flex w-full flex-col">
        <SolutionSection />
        <ChallengesSection />
        <AdvantagesSection />
        <WhySection />
        <MarketSection />
      </main>
      <Footer />
    </Container>
  );
}
