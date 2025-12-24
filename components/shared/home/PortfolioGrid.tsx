"use client";

import { Prisma } from "@/lib/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";


type PortfolioItem = Prisma.PortfolioGetPayload<{
  include: {
    category: true;
    technologies: true;
  };
}>;


const PortfolioGrid = ({
  portfolioItems,
}: {
  portfolioItems: PortfolioItem[];
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {portfolioItems.map((item) => (
        <Link
          href={item.link || ""}
          target="_blank"
          key={item.title}
          className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-card shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
          {/* Image */}
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Always-on gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/30 to-transparent" />
          </div>

          {/* Content (always visible) */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
              {item.categoryId}
            </span>

            <h3 className="text-lg font-semibold leading-tight text-white">
              {item.title}
            </h3>
          </div>

          {/* Hover detail */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white">
              Lihat Detail
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PortfolioGrid;
