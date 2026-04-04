import Container from "@/components/Container";
import Footer from "@/components/Footer";
import AdvantagesSection from "@/sections/AdvantagesSection";
import HeroSection from "@/sections/HeroSection";
import MarketSection from "@/sections/MarketSection";
import WhySection from "@/sections/WhySection";

export default function HomePage() {
  return (
    <Container>
      <HeroSection />
      <main className="flex w-full flex-col">
        <AdvantagesSection />
        <WhySection />
        <MarketSection />
      </main>
      <Footer />
    </Container>
  );
}
