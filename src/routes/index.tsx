import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroHome from "@/assets/hero-home.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SwapTattoo — Mude e brilhe diferente todo dia" },
      {
        name: "description",
        content:
          "Tatuagens ultrarrealistas sem tinta e sem dor. Troque seu visual quando quiser.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="w-full">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[2/1] w-full max-h-[55vh] overflow-hidden bg-muted">
            <img
              src={heroHome}
              alt="SwapTattoo — manga de tatuagem realista"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="mx-auto max-w-2xl px-6 py-12 sm:py-16 text-center">
            <h1 className="font-sans text-3xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Mude e brilhe diferente todo dia
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground">
              Tatuagens ultrarrealistas, sem tinta, sem dor e sem arrependimentos.
              Troque seu visual quando quiser.
            </p>
            <Link
              to="/produto"
              className="mt-8 inline-block rounded-md bg-black px-8 py-4 text-base font-extrabold uppercase tracking-wide text-white transition hover:bg-black/85"
            >
              Explorar agora
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}