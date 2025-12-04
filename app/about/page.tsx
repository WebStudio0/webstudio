import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Code2,
    Heart,
    Target,
    Users
} from "lucide-react";

const tools = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "Node.js", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Framer Motion", category: "Animation" },
];

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description:
      "Kami tidak hanya membuat website yang cantik, tapi juga yang memberikan hasil nyata untuk bisnis Anda.",
  },
  {
    icon: Users,
    title: "Kolaborasi Erat",
    description:
      "Kami percaya komunikasi yang baik adalah kunci. Anda akan selalu terupdate dengan progress proyek.",
  },
  {
    icon: Heart,
    title: "Dedikasi Penuh",
    description:
      "Setiap proyek kami kerjakan dengan passion dan perhatian detail yang tinggi.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Memahami bisnis, target audience, dan goals yang ingin dicapai.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Menyusun strategi, sitemap, dan wireframe untuk blueprint website.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "Membuat desain visual yang menarik dan sesuai brand identity.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Mengembangkan website dengan teknologi modern dan best practices.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Quality assurance menyeluruh untuk memastikan performa optimal.",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployment dan handover lengkap dengan panduan penggunaan.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Tentang Kami
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Studio Web Development
                <span className="block text-gradient">untuk Bisnis Modern</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                WebStudio adalah studio pembuatan website profesional yang
                berdedikasi membantu bisnis Indonesia tampil lebih baik di dunia
                digital. Dengan pengalaman 3+ tahun dan 50+ proyek selesai, kami
                memahami apa yang dibutuhkan bisnis untuk sukses online.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2">
                    Mari Ngobrol
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card-hover border border-border">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "50+", label: "Proyek Selesai" },
                    { value: "98%", label: "Klien Puas" },
                    { value: "3+", label: "Tahun Pengalaman" },
                    { value: "24/7", label: "Support" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-secondary/50 rounded-xl">
                      <div className="font-display text-3xl font-bold text-accent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-4 -right-4 bg-accent rounded-xl p-4 shadow-glow">
                <Code2 className="w-8 h-8 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-gradient-surface">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              Tech Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Tools & Teknologi yang Kami Gunakan
            </h2>
            <p className="text-muted-foreground">
              Kami selalu menggunakan teknologi terkini untuk hasil yang
              optimal.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="px-5 py-3 bg-card rounded-lg border border-border hover:border-accent/30 hover:shadow-card transition-all duration-200 group">
                <span className="font-medium group-hover:text-accent transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              Nilai Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Yang Membuat Kami Berbeda
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-xl shadow-card border border-border hover:border-accent/30 transition-all duration-300">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-surface">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              Cara Kerja
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Proses Pengerjaan Kami
            </h2>
            <p className="text-muted-foreground">
              Metodologi yang terstruktur untuk hasil yang konsisten dan
              berkualitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative bg-card rounded-xl p-6 shadow-card border border-border group hover:border-accent/30 transition-all duration-300">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow">
                  <span className="font-display font-bold text-accent-foreground">
                    {item.step}
                  </span>
                </div>
                <div className="pt-6">
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-10" />

            <div className="relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Siap Bekerja Sama dengan Kami?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Mari diskusikan bagaimana kami bisa membantu bisnis Anda
                memiliki presence digital yang kuat.
              </p>
              <Button
                variant="accent"
                size="lg"
                className="shadow-glow"
                asChild>
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20untuk%20bekerja%20sama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2">
                  Hubungi Kami Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
