"use client";

import ContactCTA from "@/components/shared/contact/ContactCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";


const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+62 812 3456 7890",
    description: "Response dalam 1 jam",
    action: "https://wa.me/6281234567890",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@webstudio.id",
    description: "Response dalam 24 jam",
    action: "mailto:hello@webstudio.id",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Jakarta, Indonesia",
    description: "Remote-first studio",
    action: null,
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Senin - Sabtu",
    description: "09:00 - 18:00 WIB",
    action: null,
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Pesan Anda telah terkirim!");

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <section className="section-padding pt-0">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h2 className="font-display text-2xl font-bold mb-2">
                Informasi Kontak
              </h2>
              <p className="text-muted-foreground">
                Pilih cara yang paling nyaman untuk menghubungi kami.
              </p>
            </div>

            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-0.5">{info.title}</h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-foreground">{info.value}</span>
                  )}
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <ContactCTA />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="font-display text-2xl font-bold mb-2">
                Kirim Pesan
              </h2>
              <p className="text-muted-foreground mb-8">
                Isi form di bawah dan kami akan menghubungi Anda secepatnya.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor WhatsApp</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Website UMKM"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan kebutuhan website Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Mengirim..."
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
