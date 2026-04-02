import Container from "@/components/Container";

export default function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
      </header>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-3xl font-bold text-amber-500">Olá mundo!</h1>
      </main>
      <footer>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o FOOTER</h1>
      </footer>
    </Container>
  );
}
