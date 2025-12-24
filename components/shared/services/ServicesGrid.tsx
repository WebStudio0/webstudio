import { Button } from '@/components/ui/button';
import { Check, Code, LayoutIcon, Monitor, RefreshCw, Settings, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Monitor,
    title: "Website UMKM",
    description:
      "Website profesional untuk bisnis kecil dan menengah. Tampilkan produk dan layanan Anda dengan website modern yang menarik pelanggan.",
    features: [
      "5-7 Halaman (Home, About, Services, Portfolio, Contact)",
      "Desain responsive untuk semua device",
      "Optimasi SEO dasar",
      "Integrasi media sosial",
      "Form kontak dengan notifikasi email",
      "Google Analytics setup",
    ],
    duration: "7-14 hari kerja",
    price: "Mulai dari Rp 3.500.000",
    popular: false,
  },
  {
    icon: LayoutIcon,
    title: "Landing Page",
    description:
      "Halaman fokus konversi untuk kampanye marketing, promosi produk, atau lead generation. Dioptimalkan untuk hasil maksimal.",
    features: [
      "Single page dengan desain premium",
      "High-converting layout",
      "A/B Testing ready",
      "Integrasi WhatsApp & form",
      "Loading super cepat",
      "Tracking pixel ready (FB, Google)",
    ],
    duration: "3-7 hari kerja",
    price: "Mulai dari Rp 1.500.000",
    popular: true,
  },
 
  {
    icon: Code,
    title: "Custom Website",
    description:
      "Solusi website khusus sesuai kebutuhan bisnis yang lebih kompleks. Fitur custom dan integrasi sesuai permintaan.",
    features: [
      "Desain & fitur sesuai kebutuhan",
      "Custom dashboard & admin panel",
      "API integration",
      "Scalable architecture",
      "Database design",
      "Dokumentasi lengkap",
    ],
    duration: "30-60 hari kerja",
    price: "Custom quote",
    popular: false,
  },

];

const ServicesGrid = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border ${
                service.popular
                  ? "border-accent ring-2 ring-accent/20"
                  : "border-border hover:border-accent/30"
              }`}>
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  Paling Populer
                </div>
              )}

              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-accent" />
              </div>

              <h3 className="font-display font-bold text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Estimasi waktu:</span>
                  <span className="font-medium">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Harga:</span>
                  <span className="font-display font-bold text-accent">
                    {service.price}
                  </span>
                </div>
              </div>

              <Button
                variant={service.popular ? "hero" : "outline"}
                className="w-full mt-6"
                asChild>
                <Link
                  href={`https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Konsultasi Gratis
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid