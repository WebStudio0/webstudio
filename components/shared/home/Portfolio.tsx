import { Button } from "@/components/ui/button";
import db from "@/lib/prisma";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PortfolioGrid from "./PortfolioGrid";

export async function PortfolioPreviewSection() {
  const portfolioItems = await db.portfolio.findMany({
    select: {
      title: true,
      description: true,
      category: {
        select: {
          id: true,
          name: true,
          portfolios: true,
        },
      },
      categoryId: true,
      id: true,
      createdAt: true,
      updatedAt: true,

      image: true,
      link: true,
      technologies: true,
    },
  });

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

        <PortfolioGrid portfolioItems={portfolioItems} />
      </div>
    </section>
  );
}
