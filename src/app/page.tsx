import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import HeroSection from "@/sections/HeroSection";
import ChallengesSection from "@/sections/ChallengesSection";
import SolutionSection from "@/sections/SolutionSection";
import ProductsSection from "@/sections/ProductsSection";
import AdvantagesSection from "@/sections/AdvantagesSection";
import WhySection from "@/sections/WhySection";
import MarketSection from "@/sections/MarketSection";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <main className="flex w-full flex-col">
        <HeroSection />
        <ChallengesSection />
        <SolutionSection />
        <ProductsSection />
        <AdvantagesSection />
        <WhySection />
        <MarketSection />
      </main>
      <Footer />
    </Container>
  );
}
