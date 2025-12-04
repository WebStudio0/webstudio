"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  "Semua",
  "E-Commerce",
  "Landing Page",
  "Company Profile",
  "Custom Website",
];

const portfolioItems = [
  {
    id: 1,
    title: "Sweet Delights Bakery",
    category: "E-Commerce",
    description:
      "Toko online untuk bakery dengan sistem pre-order dan delivery tracking.",
    image: "bg-amber-500/20",
    tech: ["React", "Tailwind", "Supabase"],
    link: "#",
  },
  {
    id: 2,
    title: "TechVenture Startup",
    category: "Company Profile",
    description:
      "Website company profile modern untuk startup teknologi dengan animasi interaktif.",
    image: "bg-blue-500/20",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
  },
  {
    id: 3,
    title: "FitLife Gym",
    category: "Landing Page",
    description:
      "Landing page high-converting untuk membership gym dengan booking system.",
    image: "bg-green-500/20",
    tech: ["React", "Tailwind", "Cal.com"],
    link: "#",
  },
  {
    id: 4,
    title: "Warung Pak Eko",
    category: "E-Commerce",
    description:
      "Website UMKM untuk warung makan dengan menu digital dan order online.",
    image: "bg-red-500/20",
    tech: ["WordPress", "WooCommerce"],
    link: "#",
  },
  {
    id: 5,
    title: "Creative Agency Co",
    category: "Custom Website",
    description: "Portfolio website untuk creative agency dengan CMS custom.",
    image: "bg-purple-500/20",
    tech: ["Next.js", "Sanity CMS", "Tailwind"],
    link: "#",
  },
  {
    id: 6,
    title: "Fashion Forward",
    category: "E-Commerce",
    description:
      "Online store untuk brand fashion lokal dengan virtual try-on feature.",
    image: "bg-pink-500/20",
    tech: ["Shopify", "Custom Theme"],
    link: "#",
  },
  {
    id: 7,
    title: "Lawyer & Associates",
    category: "Company Profile",
    description:
      "Website profesional untuk firma hukum dengan appointment booking.",
    image: "bg-slate-500/20",
    tech: ["React", "Tailwind", "Calendly"],
    link: "#",
  },
  {
    id: 8,
    title: "EduTech Platform",
    category: "Custom Website",
    description:
      "Platform e-learning dengan video courses dan progress tracking.",
    image: "bg-indigo-500/20",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    link: "#",
  },
  {
    id: 9,
    title: "Property Listing",
    category: "Custom Website",
    description:
      "Website listing properti dengan filter advanced dan virtual tour.",
    image: "bg-emerald-500/20",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

const PortfolioFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems =
    activeCategory === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);
  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === category
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}>
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-accent/30">
              {/* Image Area */}
              <div
                className={`relative aspect-16/10 ${item.image} overflow-hidden`}>
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="accent" size="sm" className="gap-2" asChild>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer">
                      Lihat Detail
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  {item.category}
                </span>
                <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;
