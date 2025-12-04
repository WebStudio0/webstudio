export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Owner, Bakery Rumahan",
      content:
        "Website dari WebStudio sangat membantu bisnis saya. Sekarang pelanggan bisa order online dengan mudah. Penjualan naik 40%!",
      avatar: "BS",
    },
    {
      name: "Sarah Putri",
      role: "Founder, Fashion Brand",
      content:
        "Desainnya premium banget dan proses pengerjaannya cepat. Tim WebStudio sangat responsif dan profesional.",
      avatar: "SP",
    },
    {
      name: "Andi Wijaya",
      role: "CEO, Tech Startup",
      content:
        "Hasil kerjanya memuaskan, website kami sekarang modern dan performanya excellent. Highly recommended!",
      avatar: "AW",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3 block">
            Testimonial
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kepuasan klien adalah prioritas utama kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-xl p-6 shadow-card border border-border relative">
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-6xl text-accent/10 font-serif leading-none">
                &quot;
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="font-display font-semibold text-accent">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
