import { Button } from "@/components/ui/button";
import {
    Code,
    Layout,
    Monitor,
    ShoppingCart
} from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Website UMKM",
      description:
        "Website profesional untuk bisnis kecil dan menengah dengan fitur lengkap.",
      features: ["5-7 Halaman", "Mobile Responsive", "SEO Optimized"],
    },
    {
      icon: Layout,
      title: "Landing Page",
      description:
        "Halaman fokus konversi untuk kampanye marketing dan promosi produk.",
      features: ["Single Page", "High Converting", "A/B Testing Ready"],
    },
    {
      icon: ShoppingCart,
      title: "Toko Online",
      description:
        "E-commerce lengkap dengan sistem pembayaran dan manajemen produk.",
      features: ["Payment Gateway", "Inventory System", "Order Management"],
    },
    {
      icon: Code,
      title: "Custom Website",
      description:
        "Solusi website khusus sesuai kebutuhan bisnis yang lebih kompleks.",
      features: ["Custom Features", "API Integration", "Scalable"],
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Layanan Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Solusi Website untuk Setiap Kebutuhan
          </h2>
          <p className="text-muted-foreground text-lg">
            Pilih layanan yang sesuai dengan kebutuhan dan budget bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border hover:border-accent/30 overflow-hidden">
              {/* Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                asChild>
                <Link href="/services">Selengkapnya</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
