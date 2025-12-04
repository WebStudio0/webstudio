
const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Kontak
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Mari Bicara tentang
            <span className="block text-gradient">Proyek Anda</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Punya pertanyaan atau ingin memulai proyek? Kami senang mendengar
            dari Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero