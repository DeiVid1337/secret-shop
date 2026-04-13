import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroBg}
        alt="Secret Shop"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 3.8, 
          ease: "linear", 
          repeat: 0, 
          repeatType: "reverse" 
        }}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h2 className="font-heading text-4xl md:text-6xl font-light text-white mb-4 leading-tight drop-shadow-2xl">
          Onde o prazer encontra a elegância
        </h2>
        <p className="font-body text-white/95 text-lg mb-8 drop-shadow-xl font-medium">
          Descubra uma nova forma de viver o bem-estar íntimo
        </p>
        <Link to="/loja">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body tracking-wide">
            Explorar Coleção
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
