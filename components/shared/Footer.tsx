import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  layanan: [
    { label: "Website UMKM", href: "/services" },
    { label: "Landing Page", href: "/services" },
    { label: "Toko Online", href: "/services" },
    { label: "Custom Website", href: "/services" },
  ],
  perusahaan: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Kontak", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-display font-bold text-lg">
                  W
                </span>
              </div>
              <span className="font-display font-bold text-xl">WebStudio</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Studio pembuatan website profesional untuk bisnis modern. Kami
              membantu Anda membangun kehadiran digital yang kuat.
            </p>
            <div className="flex gap-3">
              {["instagram", "linkedin", "dribbble"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label={social}>
                  <span className="text-xs font-semibold uppercase">
                    {social[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-1 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  hello@webstudio.id
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  +62 812 3456 7890
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} WebStudio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
