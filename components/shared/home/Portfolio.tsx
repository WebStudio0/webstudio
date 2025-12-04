import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PortfolioPreviewSection() {
  const portfolioItems = [
    { title: "Bakery Shop", category: "E-Commerce", color: "bg-amber-500/20" },
    {
      title: "Tech Startup",
      category: "Company Profile",
      color: "bg-blue-500/20",
    },
    {
      title: "Fitness Center",
      category: "Landing Page",
      color: "bg-green-500/20",
    },
    { title: "Restaurant", category: "Website UMKM", color: "bg-red-500/20" },
    {
      title: "Digital Agency",
      category: "Custom Website",
      color: "bg-purple-500/20",
    },
    { title: "Fashion Brand", category: "E-Commerce", color: "bg-pink-500/20" },
  ];

  return (
    <section className="section-padding bg-gradient-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Karya Terbaru Kami
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/portfolio" className="gap-2">
              Lihat Semua Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-4/3 bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer">
              <div
                className={`absolute inset-0 ${item.color} transition-transform duration-500 group-hover:scale-110`}>
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-accent-foreground/80 text-xs font-medium uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-primary-foreground font-display font-semibold text-xl">
                  {item.title}
                </h3>
              </div>

              {/* Default State */}
              <div className="absolute inset-0 p-6 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                    {item.title}
                  </h3>
                  <span className="text-muted-foreground text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
