import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="glow-accent absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2"
      />
      <Container className="flex flex-col items-center text-center">
        <span className="font-mono text-sm tracking-[0.2em] text-accent">ERROR 404</span>
        <h1 className="text-display text-wash mt-6">
          Página no encontrada<span className="text-accent">.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">
          La página que buscas no existe o se ha movido. Volvamos a terreno conocido.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/" icon="arrow-right" size="lg">
            Volver al inicio
          </Button>
          <Button href="/contacto" variant="secondary" size="lg">
            Contactar
          </Button>
        </div>
      </Container>
    </section>
  );
}
