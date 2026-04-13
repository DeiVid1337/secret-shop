import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { storefrontApiRequest, COLLECTIONS_QUERY } from "@/lib/shopify";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface Collection {
  node: {
    id: string;
    title: string;
    handle: string;
  };
}

interface CollectionNavProps {
  onSelect?: () => void;
  className?: string;
}

export function CollectionNav({ onSelect, className }: CollectionNavProps) {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  useEffect(() => {
    async function fetchCollections() {
      try {
        const data = await storefrontApiRequest(COLLECTIONS_QUERY, { first: 20 });
        if (data?.data?.collections?.edges) {
          setCollections(data.data.collections.edges);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className={cn("space-y-3", className)}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-6 w-full" />
        ))}
      </div>
    );
  }

  return (
    <nav className={cn("flex flex-col space-y-2", className)}>
      <Link
        to="/loja"
        onClick={onSelect}
        className={cn(
          "px-3 py-2 rounded-md transition-colors text-sm font-medium",
          !currentCategory 
            ? "bg-secondary text-foreground" 
            : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
        )}
      >
        Todos os Produtos
      </Link>
      
      {collections.map((collection) => (
        <Link
          key={collection.node.id}
          to={`/loja?category=${collection.node.handle}`}
          onClick={onSelect}
          className={cn(
            "px-3 py-2 rounded-md transition-colors text-sm font-medium",
            currentCategory === collection.node.handle
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
          )}
        >
          {collection.node.title}
        </Link>
      ))}
    </nav>
  );
}
