import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("age-verified");
    if (!verified) setShow(true);
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("age-verified", "true");
    setShow(false);
  };

  return (
    <Dialog open={show} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-card border-border text-card-foreground" onPointerDownOutside={(e) => e.preventDefault()}>
        <div className="flex flex-col items-center text-center gap-6 py-4">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">Secret Shop</h1>
          <DialogTitle className="font-body text-sm text-muted-foreground font-normal">
            Este site contém conteúdo destinado exclusivamente a maiores de 18 anos.
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            Ao continuar, você confirma ter 18 anos ou mais.
          </p>
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => window.location.href = "https://www.google.com"}
            >
              Sair
            </Button>
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={handleConfirm}
            >
              Tenho +18 anos
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
