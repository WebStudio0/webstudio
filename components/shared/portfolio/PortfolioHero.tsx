
const PortfolioHero = () => {
  return (
<section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Karya Terbaik
              <span className="block text-gradient">yang Sudah Kami Buat</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Lihat berbagai proyek website yang telah kami kerjakan untuk klien
              dari berbagai industri dan skala bisnis.
            </p>
          </div>
        </div>
      </section>  )
}

export default PortfolioHero