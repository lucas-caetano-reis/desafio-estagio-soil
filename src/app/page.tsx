import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";

export default function HomePage() {
  return (
    <Container>
      <HeroSection />
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-amber-500">Olá mundo!</h1>
      </main>
      <Footer />
    </Container>
  );
}
