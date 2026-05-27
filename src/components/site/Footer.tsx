import { Instagram, Facebook, Youtube, Mail, ShieldCheck, Truck, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer id="sobre" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-serif text-2xl font-bold mb-3">
            Swap<span className="text-gold">Tattoo</span>
          </div>
          <p className="text-sm text-white/70">
            A maneira mais inteligente de usar tatuagens incríveis — sem tinta, sem dor,
            sem arrependimentos.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-primary"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Facebook" className="text-white/70 hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="text-white/70 hover:text-primary"><Youtube className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="text-white/70 hover:text-primary"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold mb-3">Loja</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#produtos" className="hover:text-primary">Produtos</a></li>
            <li><a href="#" className="hover:text-primary">Coleções</a></li>
            <li><a href="#" className="hover:text-primary">Novidades</a></li>
            <li><a href="#" className="hover:text-primary">Mais vendidos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold mb-3">Atendimento</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            <li><a href="#" className="hover:text-primary">Política de Envio</a></li>
            <li><a href="#" className="hover:text-primary">Trocas e Devoluções</a></li>
            <li><a href="#" className="hover:text-primary">Política de Privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold mb-3">Garantias</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 90 dias de garantia</li>
            <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-primary" /> Frete grátis</li>
            <li className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-primary" /> Pagamento seguro</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <span>© {new Date().getFullYear()} SwapTattoo Brasil. Todos os direitos reservados.</span>
          <div className="flex flex-wrap items-center gap-2">
            {["VISA", "MASTER", "PIX", "BOLETO", "AMEX", "ELO"].map((p) => (
              <span key={p} className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-bold tracking-wider text-white">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}