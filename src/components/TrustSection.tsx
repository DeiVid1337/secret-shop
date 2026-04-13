import { motion } from "framer-motion";
import { ShieldCheck, Truck, Lock, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const trustItems = [
  {
    title: "Discrição Total",
    description: "A forma de entrega também é sua escolha ,oferecemos opções de embalagem para que você receba seu pedido com o nível de discrição que desejar.",
    icon: ShieldCheck,
  },
  {
    title: "Entrega Ágil",
    description: "Envio rápido para todo o Brasil com código de rastreio em tempo real.",
    icon: Truck,
  },
  {
    title: "Compra Segura",
    description: "Ambiente 100% criptografado e seus dados protegidos com máxima segurança.",
    icon: Lock,
  },
  {
    title: "Suporte Especializado",
    description: "Atendimento humanizado e discreto para tirar todas as suas dúvidas.",
    icon: MessageSquare,
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Sua privacidade é nossa prioridade
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-none bg-background/50 hover:bg-background transition-colors duration-300">
                <CardContent className="pt-8 flex flex-col items-center text-center">
                  <div className="mb-6 p-3 rounded-full bg-secondary text-primary">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-heading text-xl mb-3 text-foreground">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
