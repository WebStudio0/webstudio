import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const ServicesCTA = () => {
  return (
    <section className="section-padding bg-gradient-surface">
      <div className="container-narrow">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card-hover border border-border text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Butuh Sesuatu yang Berbeda?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Setiap bisnis itu unik. Ceritakan kebutuhan spesifik Anda dan kami
            akan memberikan solusi terbaik yang sesuai dengan budget dan goals
            bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link
                href="https://wa.me/6281234567890?text=Halo,%20saya%20butuh%20konsultasi%20untuk%20kebutuhan%20website%20khusus"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2">
                Diskusi Kebutuhan Custom
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA