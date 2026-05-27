import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { ProductInfo } from "@/components/site/ProductInfo";
import {
  Benefits,
  FaqSection,
  Reviews,
  MarqueeBar,
} from "@/components/site/Sections";
import { TATTOOS } from "@/assets";
import tamanhoUniversal from "@/assets/tamanho-universal.png";
import tatuagensSemTinta from "@/assets/tatuagens-sem-tinta.png";
import qualidadeAcabamento from "@/assets/qualidade-acabamento.png";
import gostosMudam from "@/assets/gostos-mudam.png";
import garantia90dias from "@/assets/garantia-90dias.png";
import comparativoAvaliacoes from "@/assets/comparativo-avaliacoes.png";

export const Route = createFileRoute("/produto")({
  head: () => ({
    meta: [
      { title: "SwapTattoo — Malha Invisível de Tatuagem | Brasil" },
      {
        name: "description",
        content:
          "Tatuagens ultrarrealistas sem tinta e sem dor. Frete grátis, brinde surpresa e garantia de 90 dias. +845 clientes satisfeitos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const images = TATTOOS.map((t) => ({ src: t.src, alt: t.alt, label: t.name }));
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <Gallery images={images} />
            <ProductInfo />
          </div>
        </section>
        <MarqueeBar />
        <Benefits />
        <FaqSection />
        <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
          <img src={tamanhoUniversal} alt="Tamanho Universal — efeito segunda pele" className="w-full h-auto" loading="lazy" />
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
          <img src={tatuagensSemTinta} alt="Tatuagens sem tinta — efeito ultrarrealista" className="w-full h-auto" loading="lazy" />
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
          <img src={qualidadeAcabamento} alt="Qualidade e acabamento realista" className="w-full h-auto" loading="lazy" />
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
          <img src={gostosMudam} alt="Os gostos mudam, a pele não" className="w-full h-auto" loading="lazy" />
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
          <img src={garantia90dias} alt="90 dias de garantia SwapTattoo" className="w-full h-auto" loading="lazy" />
        </section>
        <section className="mx-auto max-w-3xl px-4 pb-12 sm:pb-16">
          <img src={comparativoAvaliacoes} alt="SwapTattoo vs Outros — 4,9 de 203 avaliações" className="w-full h-auto" loading="lazy" />
        </section>
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
