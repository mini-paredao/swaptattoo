import { Star, ShieldCheck, Info, Truck, RotateCcw, CheckSquare, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { TATTOOS } from "@/assets";
import bonus1 from "@/assets/bonus-1.avif";
import bonus2 from "@/assets/bonus-2.avif";
import bonus3 from "@/assets/bonus-3.avif";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const PACKS = [
  { id: "1", label: "Compre 1", units: 1, price: 13.95, original: 18.95, checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/2319ab52-98e7-48f1-8a94-1e32264280bc" },
  { id: "2", label: "Compre 1 + 2un com 50%", units: 3, price: 20.94, original: 37.90, popular: true, checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/ae98abfb-f7ed-452d-9eb4-cedd6d4a2e81" },
  { id: "3", label: "Compre 2+1 GRÁTIS", units: 3, price: 27.90, original: 56.85, checkoutUrl: "https://pay.transacaoseguraemprestimo.online/c/5a394f80-8c0f-46c1-a864-8b3d276c6f03" },
];

const DESIGNS = TATTOOS.slice(0, 7);

const MINI_REVIEWS = [
  {
    name: "Laura M.",
    text: "Tinha dúvidas pela minha altura mas ficou perfeito. É elástico e se ajusta sem problemas. Já usei várias vezes e continua igual, não rasgou!",
    avatar: review1,
  },
  {
    name: "Jorge A.",
    text: "Bom material, fino mas resistente. Depois de lavar o desenho continua impecável. Pelo preço, vale muito a pena.",
    avatar: review2,
  },
  {
    name: "Marta G.",
    text: "Me surpreendeu o quão real parece. Achei que ficaria falso e não — parece tatuagem de verdade. Super confortável.",
    avatar: review3,
  },
];

const TRUST_ITEMS = [
  { icon: Truck, title: "Envio Grátis e Seguro", text: "Enviamos para todo o Brasil em embalagem discreta. Prazo de 6 a 9 dias úteis com código de rastreamento." },
  { icon: RotateCcw, title: "Garantia de 90 dias", text: "Se não ficar 100% satisfeito, devolvemos seu dinheiro — sem perguntas." },
  { icon: CheckSquare, title: "Pagamento seguro e Protegido", text: "Compra protegida com criptografia. Aceitamos Pix, cartão e boleto." },
];

export function ProductInfo() {
  const [pack, setPack] = useState("2");
  const [designChoices, setDesignChoices] = useState<Record<number, string>>({
    0: DESIGNS[0].name,
    1: DESIGNS[1].name,
    2: DESIGNS[2].name,
  });

  const selected = PACKS.find((p) => p.id === pack)!;

  const handleDesignChange = (index: number, value: string) => {
    setDesignChoices((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
          SwapTattoo — Malha Invisível de Tatuagem
        </h1>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-semibold">845+ Clientes com Estilo.</span>
        </div>
      </div>

      <div className="rounded-md bg-black py-2.5 px-4 text-center text-sm font-extrabold tracking-wide text-white">
        NOVA COLEÇÃO | POUCAS UNIDADES
      </div>

      <ul className="space-y-3 text-base">
        <li className="flex gap-2"><span>🕷️</span><span><b>Aproveite</b> - sem precisar tatuar a pele</span></li>
        <li className="flex gap-2"><span>🖤</span><span><b>Troque</b> - um visual diferente a cada dia</span></li>
        <li className="flex gap-2"><span>✨</span><span><b>Destaque</b> - eleva qualquer look</span></li>
      </ul>

      <div className="rounded-lg bg-[oklch(0.95_0.02_25)] p-5 text-sm">
        <p className="flex items-center gap-2 font-bold mb-2 text-base">
          <Info className="h-5 w-5" /> AVISO
        </p>
        <p className="text-foreground/85">
          Devido à <b>alta demanda</b>, o estoque está atualmente{" "}
          <b>limitado</b>. <b>Garanta o seu hoje</b> antes que acabe.
        </p>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 bg-border" />
          <div className="font-bold">Escolha seu Pack e Economize</div>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex flex-col gap-3">
          {PACKS.map((p) => {
            const active = pack === p.id;
            return (
              <label
                key={p.id}
                className={`relative cursor-pointer rounded-xl border-2 p-5 transition ${
                  active ? "border-foreground bg-background" : "border-transparent bg-[oklch(0.95_0.003_80)] hover:bg-[oklch(0.93_0.003_80)]"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 right-4 rounded-md bg-black px-3 py-1 text-[11px] font-extrabold tracking-wide text-white">
                    MAIS VENDIDO!
                  </span>
                )}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="pack"
                      checked={active}
                      onChange={() => setPack(p.id)}
                      className="h-5 w-5 accent-black"
                    />
                    <span className="font-extrabold text-lg">{p.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-lg">R$ {p.price.toFixed(2).replace(".", ",")}</div>
                    <div className="text-sm text-muted-foreground line-through">
                      R$ {p.original.toFixed(2).replace(".", ",")}
                    </div>
                  </div>
                </div>
                {active && (
                  <div className="mt-4 space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground">Escolha seus Designs</div>
                    {Array.from({ length: p.units }).map((_, i) => {
                      const selectedDesign = DESIGNS.find((d) => d.name === designChoices[i]) ?? DESIGNS[i % DESIGNS.length];
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <div className="h-12 w-12 overflow-hidden rounded-md border border-border shrink-0">
                            <img src={selectedDesign.src} alt={selectedDesign.alt} className="h-full w-full object-cover" />
                          </div>
                          <select
                            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
                            value={designChoices[i] ?? DESIGNS[i % DESIGNS.length].name}
                            onChange={(e) => handleDesignChange(i, e.target.value)}
                          >
                            {DESIGNS.map((d) => (
                              <option key={d.name} value={d.name}>{d.name}</option>
                            ))}
                          </select>
                        </div>
                      );
                    })}
                  </div>
                )}
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-center font-extrabold text-xl mb-4">
          🎁 Bônus Desbloqueados Com Seu Pedido Agora
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { img: bonus1, badge: "GRÁTIS", old: null, label: "Frete Grátis" },
            { img: bonus2, badge: "GRÁTIS", old: "R$ 19,90", label: "Brinde Surpresa" },
            { img: bonus3, badge: "GRÁTIS", old: "R$ 24,90", label: "26% DTO" },
          ].map((b) => (
            <div key={b.label} className="rounded-xl border-2 border-foreground bg-background p-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="rounded bg-muted px-2 py-0.5 text-[11px] font-extrabold tracking-wide">FREE</span>
                {b.old && <span className="text-xs text-muted-foreground line-through">{b.old}</span>}
              </div>
              <div className="aspect-square w-full flex items-center justify-center mb-2">
                <img src={b.img} alt={b.label} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="text-sm font-semibold leading-tight">{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href={selected.checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full rounded-xl bg-gradient-orange py-5 text-center text-lg font-extrabold uppercase tracking-wider text-primary-foreground shadow-glow animate-pulse-glow transition hover:scale-[1.01] inline-block"
      >
        Adicionar ao Carrinho
      </a>

      <div className="flex flex-col gap-1 text-center text-xs text-muted-foreground">
        <span className="flex items-center justify-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Pagamento 100% seguro • Garantia de 90 dias</span>
        <span>🚚 Frete grátis para todo o Brasil</span>
      </div>

      <ReviewCarousel />
      <TrustAccordion />
    </div>
  );
}

function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const total = MINI_REVIEWS.length;
  const current = MINI_REVIEWS[index];
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <div className="pt-2">
      <div className="flex gap-4">
        <img
          src={current.avatar}
          alt={current.name}
          className="h-14 w-14 shrink-0 rounded-full object-cover"
        />
        <p className="text-sm leading-relaxed text-foreground/90">"{current.text}"</p>
      </div>
      <div className="mt-3 flex items-center gap-3 pl-[72px]">
        <span className="italic text-sm text-muted-foreground">{current.name}</span>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="grid h-7 w-7 place-items-center rounded border border-foreground/40 hover:bg-muted"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        {MINI_REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Depoimento ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-foreground/60 ${i === index ? "bg-foreground" : "bg-transparent"}`}
          />
        ))}
        <button
          onClick={() => go(1)}
          aria-label="Próximo"
          className="grid h-7 w-7 place-items-center rounded border border-foreground/40 hover:bg-muted"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function TrustAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border-t border-border">
      {TRUST_ITEMS.map((item, i) => {
        const isOpen = open === i;
        const Icon = item.icon;
        return (
          <div key={item.title} className="border-b border-border">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5" strokeWidth={2} />
                <span className="font-extrabold text-base">{item.title}</span>
              </span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <p className="pb-4 pl-8 pr-2 text-sm text-muted-foreground animate-fade-in">{item.text}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}