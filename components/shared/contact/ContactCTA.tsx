import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <div className="bg-gradient-hero rounded-xl p-6 mt-8">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="w-6 h-6 text-accent" />
        <h3 className="font-display font-semibold text-primary-foreground">
          Respons Cepat via WhatsApp
        </h3>
      </div>
      <p className="text-primary-foreground/80 text-sm mb-4">
        Butuh jawaban cepat? Chat langsung dengan tim kami di WhatsApp.
      </p>
      <Button variant="accent" className="w-full shadow-glow" asChild>
        <Link
          href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20jasa%20pembuatan%20website"
          target="_blank"
          rel="noopener noreferrer"
          className="gap-2">
          Chat Sekarang
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}

export default ContactCTA