import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function WhatsAppButton() {
  const [suggestion, setSuggestion] = useState("");
  const [open, setOpen] = useState(false);

  const phoneNumber = "5511999999999"; // O usuário pode alterar depois
  
  const handleSend = () => {
    if (!suggestion.trim()) return;
    
    const message = encodeURIComponent(`Olá! Gostaria de deixar uma sugestão para a Secret Shop:\n\n${suggestion}`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    setSuggestion("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20ba5a] transition-colors duration-300 group"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-heading font-medium tracking-wide">Sugestões</span>
        </motion.button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px] bg-background border-secondary">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl italic">Sua Sugestão</DialogTitle>
          <DialogDescription className="font-body text-muted-foreground">
            Sua opinião é fundamental para nós. Conte-nos como podemos melhorar sua experiência na Secret Shop.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="Escreva aqui sua sugestão, dúvida ou feedback..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            className="min-h-[150px] font-body resize-none focus-visible:ring-primary/30"
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSend}
            disabled={!suggestion.trim()}
            className="bg-[#25D366] hover:bg-[#20ba5a] text-white gap-2 px-6"
          >
            Enviar via WhatsApp
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
