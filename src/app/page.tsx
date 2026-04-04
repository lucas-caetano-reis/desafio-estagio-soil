import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import MarketSection from "@/sections/MarketSection";

export default function HomePage() {
  return (
    <Container>
      <HeroSection />
      <main className="flex min-h-screen items-center justify-center">
        <MarketSection />
      </main>
      <Footer />
    </Container>
  );
}
