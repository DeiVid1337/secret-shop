import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { ShopSidebar } from "@/components/ShopSidebar";
import { 
  storefrontApiRequest, 
  STOREFRONT_PRODUCTS_QUERY, 
  COLLECTION_PRODUCTS_QUERY,
  type ShopifyProduct 
} from "@/lib/shopify";
import { Loader2, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function ShopPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || undefined;
  const category = searchParams.get("category") || undefined;

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        let data;
        if (category) {
          data = await storefrontApiRequest(COLLECTION_PRODUCTS_QUERY, { 
            handle: category, 
            first: 50 
          });
          if (data?.data?.collection?.products?.edges) {
            setProducts(data.data.collection.products.edges);
          } else {
            setProducts([]);
          }
        } else {
          data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { 
            first: 50, 
            query 
          });
          if (data?.data?.products?.edges) {
            setProducts(data.data.products.edges);
          } else {
            setProducts([]);
          }
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [query, category]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          <ShopSidebar />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h2 className="font-heading text-3xl md:text-4xl mb-2">
              {category ? `Coleção: ${category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')}` : query ? `Resultados para "${query}"` : "Nossa Coleção"}
            </h2>
            <p className="text-muted-foreground mb-10">
              Peças selecionadas com elegância e discrição
            </p>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : products.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="font-heading text-xl mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground text-sm max-w-md">
                  Ainda não temos produtos cadastrados nesta categoria. Em breve nossa coleção estará disponível para você.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.node.id} product={product} />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
