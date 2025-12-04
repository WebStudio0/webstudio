import { Button } from "@/components/ui/button";
import {
    ArrowRight
} from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-hero py-20 md:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-10" />

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Siap Memulai Proyek Website Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Konsultasikan kebutuhan website Anda dengan tim kami secara
              gratis. Mari wujudkan website impian bisnis Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="accent"
                size="xl"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
                asChild>
                <Link
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2">
                  Konsultasi Gratis Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20"
                asChild>
                <Link href="/contact">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
