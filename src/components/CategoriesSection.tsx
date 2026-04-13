import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cat1 from "@/assets/cat-1.jpg";
import cat2 from "@/assets/cat-2.jpg";
import cat3 from "@/assets/cat-3.jpg";
import cat4 from "@/assets/cat-4.jpg";

const categories = [
  { name: "Pompoarismo", image: cat1, query: "pompoarismo" },
  { name: "Bem-Estar", image: cat2, query: "bem-estar" },
  { name: "Fantasias", image: cat3, query: "fantasias" },
  { name: "Acessórios", image: cat4, query: "acessorios" },
];

export function CategoriesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-muted-foreground mb-12 text-center">
          Categorias
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/loja?category=${cat.query}`} className="group block">
                <div className="aspect-[3/4] rounded overflow-hidden mb-3">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={800}
                  />
                </div>
                <h4 className="font-heading text-lg text-center">{cat.name}</h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
