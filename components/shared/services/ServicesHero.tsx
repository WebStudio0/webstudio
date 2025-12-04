import React from 'react'

const ServicesHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Layanan Kami
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Solusi Website untuk
            <span className="block text-gradient">Setiap Kebutuhan Bisnis</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Dari website sederhana hingga solusi custom yang kompleks, kami siap
            membantu mewujudkan website impian Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero