import Container from "@/components/Container";

import MobileHeader from "@/components/MobileHeader";
import Header from "@/components/Header";

import HeroSection from "@/sections/HeroSection";
import ChallengesSection from "@/sections/ChallengesSection";
import SolutionSection from "@/sections/SolutionSection";
import ProductsSection from "@/sections/ProductsSection";
import AdvantagesSection from "@/sections/AdvantagesSection";
import ReasonsSection from "@/sections/ReasonsSection";
import MarketSection from "@/sections/MarketSection";

import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <Container>
      <MobileHeader />
      <Header />

      <main className="flex w-full flex-col">
        <HeroSection />
        <ChallengesSection />
        <SolutionSection />
        <ProductsSection />
        <AdvantagesSection />
        <ReasonsSection />
        <MarketSection />
      </main>

      <Footer />
    </Container>
  );
}
