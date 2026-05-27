import { ShoppingBag, Search, Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.avif";

const NAV = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produto" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="bg-black text-white text-center text-[13px] sm:text-sm font-extrabold tracking-wide py-2 px-4">
        🎁 PRODUTO VIRAL | OFERTAS DE HOJE 🎁
      </div>
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center max-w-7xl px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            className="text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <Link to="/" aria-label="SwapTattoo" className="justify-self-center">
          <img src={logo} alt="SwapTattoo" className="h-10 sm:h-12 w-auto object-contain" />
        </Link>
        <div className="justify-self-end flex items-center gap-4">
          <button aria-label="Buscar" className="hover:text-primary transition">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Carrinho" className="relative hover:text-primary transition">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-3 text-sm">
          {NAV.map((n) => (
            <Link key={n.label} to={n.href} className="py-1.5" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}