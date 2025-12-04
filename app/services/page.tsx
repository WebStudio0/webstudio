import ServicesCTA from "@/components/shared/services/ServicesCTA";
import ServicesGrid from "@/components/shared/services/ServicesGrid";
import ServicesHero from "@/components/shared/services/ServicesHero";
import { Button } from "@/components/ui/button";
import {
  ArrowRight
} from "lucide-react";
import Link from "next/link";



export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <ServicesHero/>

      {/* Services Grid */}
     <ServicesGrid/>
      {/* CTA Section */}
      <ServicesCTA/>
    </>
  );
}
