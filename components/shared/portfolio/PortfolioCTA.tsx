import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PortfolioCTA = () => {
  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container-narrow">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ingin Website Seperti Ini?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ceritakan ide dan kebutuhan bisnis Anda. Kami siap membantu
            mewujudkan website impian Anda.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link
              href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20setelah%20melihat%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2">
              Mulai Proyek Anda
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCTA