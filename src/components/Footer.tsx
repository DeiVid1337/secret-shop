import { Package, Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
            <Logo size={40} className="text-primary" />
            <div>
              <h4 className="font-heading text-xl font-semibold mb-1 uppercase tracking-tighter">Secret Shop</h4>
              <p className="text-sm text-muted-foreground italic font-heading">Elegância, discrição e prazer com significado.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>Embalagem 100% discreta</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Secret Shop. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
