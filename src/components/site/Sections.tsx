import { Sparkles, Shield, Truck, Star, RefreshCw, Heart, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Countdown } from "./Countdown";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { TATTOOS } from "@/assets";
import lifestyle1 from "@/assets/lifestyle-1.png";
import lifestyle2 from "@/assets/lifestyle-2.png";
import lifestyle3 from "@/assets/lifestyle-3.png";
import review1 from "@/assets/reviews/r1.png";
import review2 from "@/assets/reviews/r2.jpg";
import review3 from "@/assets/reviews/r3.jpg";
import review4 from "@/assets/reviews/r4.jpg";
import review5 from "@/assets/reviews/r5.jpg";
import review6 from "@/assets/reviews/r6.jpg";
import review7 from "@/assets/reviews/r7.jpg";

const REVIEW_IMAGES = [
  { src: review1, alt: "Cliente usando manga SwapTattoo no braço" },
  { src: review2, alt: "Cliente usando SwapTattoo na perna — peônias" },
  { src: review3, alt: "Detalhe de dois designs SwapTattoo dragão e serpente" },
  { src: review4, alt: "Cliente usando manga SwapTattoo peônias rosas" },
  { src: review5, alt: "Quatro mangas SwapTattoo sobre a mesa" },
  { src: review6, alt: "Detalhe macro do desenho Hannya" },
  { src: review7, alt: "Cliente usando duas mangas SwapTattoo no espelho" },
];

export function Benefits() {
  const slides = [
    { src: lifestyle1, alt: "Look completo com SwapTattoo na perna" },
    { src: lifestyle2, alt: "Detalhe da tatuagem Hannya na panturrilha" },
    { src: lifestyle3, alt: "Detalhe macro do desenho de ondas japonesas" },
  ];
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section id="produtos" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center mb-8">
        <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight">+50 milhões nas Redes</h2>
      </div>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${index * 100}% / 2 + 0%))` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="w-1/2 shrink-0 px-2">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                  <img src={s.src} alt={s.alt} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/80 shadow-card hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Próximo"
          className="absolute right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/80 shadow-card hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? "bg-foreground" : "bg-foreground/25"}`}
          />
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { n: "01", title: "Escolha seu design", text: "Selecione entre demônios, serpentes, dragões, ondas e mais." },
    { n: "02", title: "Vista em segundos", text: "Encaixe a malha no braço ou perna — pronto, parece real." },
    { n: "03", title: "Arrase no visual", text: "Use o dia todo, lave e reutilize quantas vezes quiser." },
  ];
  return (
    <section className="bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Passo a passo</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">Como funciona</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-background p-8 text-center">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-gradient-orange font-serif text-lg font-bold text-primary-foreground shadow-glow">
                {s.n}
              </div>
              <h3 className="font-serif text-xl font-bold mt-4 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  const pairs = [
    { before: TATTOOS[7], after: TATTOOS[0] },
    { before: TATTOOS[7], after: TATTOOS[5] },
    { before: TATTOOS[7], after: TATTOOS[6] },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Resultados Reais</span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">Antes &amp; Depois</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {pairs.map((p, i) => (
          <div key={i} className="grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card p-3 shadow-card">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img src={p.before.src} alt={p.before.alt} className="h-full w-full object-cover grayscale opacity-70" loading="lazy" />
              <span className="absolute left-2 top-2 rounded bg-background/80 px-2 py-0.5 text-[10px] font-bold">ANTES</span>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img src={p.after.src} alt={p.after.alt} className="h-full w-full object-cover" loading="lazy" />
              <span className="absolute left-2 top-2 rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">DEPOIS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const REVIEWS = [
  { name: "Larissa M.", text: "Tinha dúvidas pela minha altura mas ficou perfeito. Elástico, ajusta sem apertar. Já usei várias vezes e continua igual." },
  { name: "Jorge A.", text: "Bom material, fino mas resistente. Depois de lavar o desenho continua impecável. Pelo preço, vale muito a pena." },
  { name: "Marta G.", text: "Me surpreendeu o quão real parece. Achei que ficaria falso e não — parece tatuagem de verdade. Super confortável." },
  { name: "Kevin R.", text: "O mais TOP que comprei em meses. Os designs são uma loucura e a qualidade impressionante." },
  { name: "Roberto H.", text: "Tecido perfeito para o verão, fino e elástico, não esquenta. Parece estar de verdade na pele." },
  { name: "Gisela M.", text: "Lindas demais, amei o detalhe das florzinhas rosas. Dão um toque feminino lindo." },
];

export function Reviews() {
  return (
    <section className="bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">+50 milhões nas Redes</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2">O que dizem nossos clientes</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4,9/5</span>
            <span className="text-muted-foreground text-sm">— 845+ avaliações verificadas</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-background p-6 shadow-card">
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                <img src={REVIEW_IMAGES[i % REVIEW_IMAGES.length].src} alt={REVIEW_IMAGES[i % REVIEW_IMAGES.length].alt} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="flex mb-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic mb-3">"{r.text}"</p>
              <p className="font-semibold text-sm">— {r.name} <span className="text-primary text-xs">✓ Verificado</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  const rows = ["Visual realista", "Adapta a qualquer corpo", "Confortável o dia todo", "Resistente a lavagens", "Sem dor e reversível"];
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold">SwapTattoo vs Outros</h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <table className="w-full text-sm sm:text-base">
          <thead>
            <tr className="border-b border-border bg-background/50">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-center font-serif text-lg">SwapTattoo</th>
              <th className="p-4 text-center text-muted-foreground">Outros</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r} className="border-b border-border/60 last:border-0">
                <td className="p-4 font-semibold">{r}</td>
                <td className="p-4 text-center">
                  <Check className="inline h-5 w-5 text-primary" />
                </td>
                <td className="p-4 text-center">
                  <X className="inline h-5 w-5 text-muted-foreground/50" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-background p-8 sm:p-12 shadow-card">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative shrink-0">
            <div className="grid h-36 w-36 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-glow">
              <div className="text-center">
                <div className="font-serif text-4xl font-extrabold leading-none">90</div>
                <div className="text-xs font-bold tracking-wider">DIAS</div>
              </div>
            </div>
            <Shield className="absolute -bottom-2 -right-2 h-10 w-10 text-primary bg-background rounded-full p-2 border border-border" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Garantia de 90 dias</h3>
            <p className="text-muted-foreground">
              Queremos que você ame seu SwapTattoo. Se não ficar 100% satisfeito,
              devolvemos seu dinheiro — sem perguntas. Pagamento seguro e protegido
              em todas as etapas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ = [
  { q: "Que tamanho vai me servir?", a: "Os produtos SwapTattoo têm tecido elástico que se adapta a diferentes corpos e alturas. Ajuste confortável (aprox. 40–90 kg) sem apertar ou marcar." },
  { q: "E se eu tiver pele morena?", a: "Adapta-se a todos os tons de pele: morena, clara e média. O efeito hiperrealista mantém definição e realismo em qualquer tom." },
  { q: "É resistente ou rasga fácil?", a: "Apesar de fino, o material é flexível e durável. Com uso normal e cuidados básicos, mantém a forma e o desenho mesmo após vários lavados." },
  { q: "É confortável para usar por horas?", a: "Sim. O tecido é leve, respirável e flexível — feito para uso diário. Não aperta e você pode usar por horas sem desconforto." },
  { q: "Quanto tempo demora a entrega?", a: "Processamos pedidos em 1–2 dias úteis. A entrega leva entre 6–9 dias úteis para todo o Brasil." },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="contato" className="bg-[oklch(0.13_0.005_60)] text-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold">Perguntas Frequentes</h2>
      </div>
      <div className="space-y-3">
        {FAQ.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-xl border border-white/15 bg-white/5 overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left font-semibold hover:bg-white/10"
              >
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-white/70 animate-fade-in">{f.a}</div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-orange p-8 sm:p-14 text-center shadow-glow">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
        <div className="relative">
          <span className="inline-block rounded-full bg-background/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground mb-4">
            Última chance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-primary-foreground mb-3">
            Garanta o seu SwapTattoo antes que acabe
          </h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-6">
            Frete grátis, brinde surpresa e até 50% OFF nos packs. Promoção termina em breve.
          </p>
          <div className="flex justify-center mb-6">
            <div className="rounded-xl bg-background/15 backdrop-blur px-4 py-2">
              <div className="text-primary-foreground"><Countdown minutes={14} /></div>
            </div>
          </div>
          <a
            href="#top"
            className="inline-block rounded-xl bg-background px-10 py-4 text-lg font-extrabold uppercase tracking-wider text-primary shadow-card hover:scale-[1.02] transition"
          >
            Quero o meu agora
          </a>
        </div>
      </div>
    </section>
  );
}

export function MarqueeBar() {
  const items = ["✈️ FRETE GRÁTIS", "🎁 BRINDE SURPRESA", "🛡️ GARANTIA 90 DIAS", "💳 PAGAMENTO SEGURO", "⭐ 4,9/5 (845+ AVALIAÇÕES)"];
  const all = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border bg-card py-3">
      <div className="flex w-max gap-12 animate-marquee whitespace-nowrap text-sm font-semibold">
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-primary">◆</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}