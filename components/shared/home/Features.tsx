import { Clock, Shield, Sparkles, Zap } from "lucide-react";

// Features Section
export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Performa Optimal",
      description:
        "Website dengan loading cepat dan dioptimalkan untuk SEO sehingga mudah ditemukan di Google.",
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description:
        "Dilengkapi SSL certificate dan sistem keamanan modern untuk melindungi data bisnis Anda.",
    },
    {
      icon: Clock,
      title: "Pengerjaan Cepat",
      description:
        "Proses pengerjaan efisien dengan timeline yang jelas dan update progress berkala.",
    },
    {
      icon: Sparkles,
      title: "Desain Premium",
      description:
        "UI/UX modern yang menarik dan user-friendly untuk meningkatkan konversi bisnis.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Keunggulan Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Kenapa Memilih WebStudio?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kami berkomitmen memberikan layanan terbaik dengan standar kualitas
            profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
