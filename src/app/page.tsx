import Container from "@/components/Container";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="py-8 text-center text-6xl font-bold">Aqui é a HEADER</h1>
      </header>

      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-amber-500">Olá mundo!</h1>
      </main>

      <Footer />
    </Container>
  );
}
