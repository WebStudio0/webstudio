import PortfolioCTA from "@/components/shared/portfolio/PortfolioCTA";
import PortfolioFilter from "@/components/shared/portfolio/PortfolioFilter";
import PortfolioHero from "@/components/shared/portfolio/PortfolioHero";

export default function Portfolio() {
  return (
    <>
      {/* Hero Section */}
      <PortfolioHero />

      {/* Filter & Grid */}
      <PortfolioFilter />

      {/* CTA Section */}
      <PortfolioCTA />
    </>
  );
}
