import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  /* =========================
     SEED CATEGORY
  ========================= */
  const categories = [
    "E-Commerce",
    "Company Profile",
    "Landing Page",
    "Custom Website",
  ];

  const categoryMap: Record<string, number> = {};

  for (const name of categories) {
    const category = await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    categoryMap[name] = category.id;
  }

  /* =========================
     SEED TECHNOLOGY
  ========================= */
  const technologies = [
    "React",
    "Tailwind",
    "Supabase",
    "Next.js",
    "Framer Motion",
    "Cal.com",
    "WordPress",
    "WooCommerce",
    "Sanity CMS",
    "Shopify",
    "Custom Theme",
    "Calendly",
    "PostgreSQL",
    "Stripe",
    "Node.js",
    "MongoDB",
  ];

  const techMap: Record<string, number> = {};

  for (const name of technologies) {
    const tech = await prisma.technology.upsert({
      where: { name },
      update: {},
      create: { name },
    });
    techMap[name] = tech.id;
  }

  /* =========================
     SEED PORTFOLIO
  ========================= */
  const portfolios = [
    {
      title: "Sweet Delights Bakery",
      category: "E-Commerce",
      description:
        "Toko online untuk bakery dengan sistem pre-order dan delivery tracking.",
      image: "bg-amber-500/20",
      tech: ["React", "Tailwind", "Supabase"],
    },
    {
      title: "TechVenture Startup",
      category: "Company Profile",
      description:
        "Website company profile modern untuk startup teknologi dengan animasi interaktif.",
      image: "bg-blue-500/20",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
    },
    {
      title: "FitLife Gym",
      category: "Landing Page",
      description:
        "Landing page high-converting untuk membership gym dengan booking system.",
      image: "bg-green-500/20",
      tech: ["React", "Tailwind", "Cal.com"],
    },
    {
      title: "Warung Pak Eko",
      category: "E-Commerce",
      description:
        "Website UMKM untuk warung makan dengan menu digital dan order online.",
      image: "bg-red-500/20",
      tech: ["WordPress", "WooCommerce"],
    },
    {
      title: "Creative Agency Co",
      category: "Custom Website",
      description: "Portfolio website untuk creative agency dengan CMS custom.",
      image: "bg-purple-500/20",
      tech: ["Next.js", "Sanity CMS", "Tailwind"],
    },
    {
      title: "Fashion Forward",
      category: "E-Commerce",
      description:
        "Online store untuk brand fashion lokal dengan virtual try-on feature.",
      image: "bg-pink-500/20",
      tech: ["Shopify", "Custom Theme"],
    },
    {
      title: "Lawyer & Associates",
      category: "Company Profile",
      description:
        "Website profesional untuk firma hukum dengan appointment booking.",
      image: "bg-slate-500/20",
      tech: ["React", "Tailwind", "Calendly"],
    },
    {
      title: "EduTech Platform",
      category: "Custom Website",
      description:
        "Platform e-learning dengan video courses dan progress tracking.",
      image: "bg-indigo-500/20",
      tech: ["Next.js", "PostgreSQL", "Stripe"],
    },
    {
      title: "Property Listing",
      category: "Custom Website",
      description:
        "Website listing properti dengan filter advanced dan virtual tour.",
      image: "bg-emerald-500/20",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  for (const item of portfolios) {
    const portfolio = await prisma.portfolio.create({
      data: {
        title: item.title,
        description: item.description,
        image: item.image,
        link: "#",
        categoryId: categoryMap[item.category],
      },
    });

    for (const techName of item.tech) {
      await prisma.portfolioTech.create({
        data: {
          portfolioId: portfolio.id,
          technologyId: techMap[techName],
        },
      });
    }
  }

  console.log("✅ Seeder berhasil dijalankan");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
