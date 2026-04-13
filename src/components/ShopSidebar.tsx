import { CollectionNav } from "./CollectionNav";

export function ShopSidebar() {
  return (
    <aside className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h3 className="font-heading text-xl mb-6 pb-2 border-b">Categorias</h3>
        
        <CollectionNav />

        <div className="mt-12 pt-8 border-t">
          <h3 className="font-heading text-xl mb-6 pb-2 border-b">Sobre a Entrega</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Todas as nossas entregas são realizadas em embalagens totalmente discretas, sem logotipos ou menção ao conteúdo externo. Sua privacidade é garantida do pedido à entrega.
          </p>
        </div>
      </div>
    </aside>
  );
}
