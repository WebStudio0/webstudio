import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Elements - adjusted positioning and opacity for mobile */}
      <div className="absolute inset-0 pattern-dots opacity-30 md:opacity-40" />
      <div className="absolute top-1/4 -right-48 md:-right-32 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 md:-left-32 w-60 md:w-80 h-60 md:h-80 bg-accent/5 rounded-full blur-3xl" />

      {/* Geometric Shapes - hidden on mobile for cleaner layout */}
      <div className="hidden md:block absolute top-32 right-[15%] w-16 h-16 border-2 border-accent/20 rounded-lg rotate-12 animate-float" />
      <div className="hidden md:block absolute bottom-40 left-[10%] w-12 h-12 bg-accent/10 rounded-full animate-float delay-300" />
      <div className="hidden lg:block absolute top-1/2 right-[5%] w-8 h-8 border-2 border-primary/10 rounded-full animate-float delay-500" />

      <div className="container-wide relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm font-medium text-accent">
                Studio Web Development
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 animate-fade-up delay-100">
              Wujudkan Website
              <span className="block text-gradient">Impian Bisnis Anda</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-8 animate-fade-up delay-200">
              Kami membantu bisnis Anda tampil profesional di dunia digital
              dengan website modern, cepat, dan dioptimalkan untuk konversi.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="lg" asChild>
                <Link
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2 text-sm md:text-base">
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link href="/portfolio" className="text-sm md:text-base">
                  Lihat Portfolio
                </Link>
              </Button>
            </div>

            {/* Stats - responsive grid: 1 col mobile, 3 cols md+ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-border animate-fade-up delay-400">
              {[
                { value: "50+", label: "Proyek Selesai" },
                { value: "98%", label: "Klien Puas" },
                { value: "3+", label: "Tahun Pengalaman" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - hidden on mobile/tablet, visible on lg+ */}
          <div className="hidden lg:block relative animate-fade-up delay-200">
            <div className="relative bg-gradient-surface rounded-2xl p-6 md:p-8 shadow-card-hover">
              {/* Browser Mockup */}
              <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                {/* Browser Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                    <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-muted rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                      www.yourwebsite.com
                    </div>
                  </div>
                </div>
                {/* Content Preview */}
                <div className="p-6 space-y-4">
                  <div className="h-8 bg-primary/10 rounded-md w-3/4" />
                  <div className="h-4 bg-muted rounded-md w-full" />
                  <div className="h-4 bg-muted rounded-md w-5/6" />
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="h-20 bg-accent/10 rounded-lg" />
                    <div className="h-20 bg-accent/10 rounded-lg" />
                    <div className="h-20 bg-accent/10 rounded-lg" />
                  </div>
                  <div className="h-10 bg-accent rounded-lg w-1/3 mt-4" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">Performa</div>
                    <div className="text-xs text-muted-foreground">98/100</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-3 shadow-lg border border-border animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">Keamanan</div>
                    <div className="text-xs text-muted-foreground">
                      SSL Active
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
