import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";
import type { ShopifyProduct } from "@/lib/shopify";

export function ProductCard({ product }: { product: ShopifyProduct }) {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const variant = product.node.variants.edges[0]?.node;
  const image = product.node.images.edges[0]?.node;
  const price = product.node.priceRange.minVariantPrice;

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Adicionado à sacola", { position: "top-center" });
  };

  return (
    <Link to={`/produto/${product.node.handle}`} className="group block">
      <div className="aspect-square rounded overflow-hidden bg-muted mb-3">
        {image && (
          <img
            src={image.url}
            alt={image.altText || product.node.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <h4 className="font-heading text-lg mb-1">{product.node.title}</h4>
      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.node.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold">R$ {parseFloat(price.amount).toFixed(2)}</span>
        <Button
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleAdd}
          disabled={isLoading || !variant?.availableForSale}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Plus className="h-4 w-4 mr-1" />Adicionar</>}
        </Button>
      </div>
    </Link>
  );
}
