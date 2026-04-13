import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Logo } from "./Logo";
import { CollectionNav } from "./CollectionNav";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button className="p-2 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-card p-0">
            <div className="p-6">
              <SheetTitle className="font-heading text-xl mb-6 flex items-center gap-2">
                <Logo size={24} />
                Menu
              </SheetTitle>
              
              <ScrollArea className="h-[calc(100vh-120px)] pr-4">
                <nav className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold px-3">Navegação</h3>
                    <Link to="/" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-body text-sm hover:text-primary transition-colors">Início</Link>
                    <Link to="/loja" onClick={() => setMenuOpen(false)} className="px-3 py-2 font-body text-sm hover:text-primary transition-colors">Loja</Link>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold px-3">Categorias</h3>
                    <CollectionNav onSelect={() => setMenuOpen(false)} />
                  </div>
                </nav>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-body text-sm hover:text-primary transition-colors">Início</Link>
          <Link to="/loja" className="font-body text-sm hover:text-primary transition-colors">Loja</Link>
        </nav>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <Logo size={40} className="text-primary" />
          <div className="flex flex-col items-center">
            <h1 className="font-heading text-2xl font-semibold tracking-tighter uppercase">Secret</h1>
            <span className="text-[10px] tracking-[0.4em] uppercase -mt-1 font-body font-light opacity-80">Shop</span>
          </div>
        </Link>

        <CartDrawer />
      </div>
    </header>
  );
}
