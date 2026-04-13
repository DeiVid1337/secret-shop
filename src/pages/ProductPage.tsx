import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { storefrontApiRequest, PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Loader2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductNode {
  id: string;
  title: string;
  description: string;
  handle: string;
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
  images: { edges: Array<{ node: { url: string; altText: string | null } }> };
  variants: { edges: Array<{ node: { id: string; title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean; selectedOptions: Array<{ name: string; value: string }> } }> };
  options: Array<{ name: string; values: string[] }>;
}

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isCartLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        if (data?.data?.productByHandle) {
          setProduct(data.data.productByHandle);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    if (handle) fetchProduct();
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Produto não encontrado.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const variant = product.variants.edges[selectedVariantIdx]?.node;
  const images = product.images.edges;

  const handleAddToCart = async () => {
    if (!variant) return;
    await addItem({
      product: { node: product },
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success("Adicionado à sacola", { position: "top-center" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Images */}
          <div className="space-y-3">
            <div className="aspect-square rounded overflow-hidden bg-muted">
              {images[selectedImage]?.node && (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 rounded overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      i === selectedImage ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-2">{product.title}</h2>
              <p className="text-2xl font-semibold text-primary">
                R$ {parseFloat(variant?.price.amount || product.priceRange.minVariantPrice.amount).toFixed(2)}
              </p>
            </div>

            {/* Variant selector */}
            {product.variants.edges.length > 1 && (
              <div>
                {product.options.map((option) => (
                  <div key={option.name} className="mb-4">
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">{option.name}</label>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.edges.map((v, idx) => {
                        const optVal = v.node.selectedOptions.find(o => o.name === option.name)?.value;
                        return (
                          <button
                            key={v.node.id}
                            onClick={() => setSelectedVariantIdx(idx)}
                            className={`px-3 py-1.5 rounded text-sm border transition-colors ${
                              idx === selectedVariantIdx
                                ? 'border-primary bg-primary/10 text-foreground'
                                : 'border-border text-muted-foreground hover:border-primary/50'
                            } ${!v.node.availableForSale ? 'opacity-40 line-through' : ''}`}
                            disabled={!v.node.availableForSale}
                          >
                            {optVal || v.node.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto"
              onClick={handleAddToCart}
              disabled={isCartLoading || !variant?.availableForSale}
            >
              {isCartLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><ShoppingBag className="h-5 w-5 mr-2" />Adicionar à Sacola</>}
            </Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
