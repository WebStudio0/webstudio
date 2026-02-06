"use client";

import ContactCTA from "@/components/shared/contact/ContactCTA";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validation/contactSchema";
import { useForm } from "@tanstack/react-form";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+62 812 3456 7890",
    description: "Response dalam 1 jam",
    action: "https://wa.me/6281234567890 ",
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
    value: "Semarang, Indonesia",
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

// Field configuration untuk type safety dan maintainability
const fieldConfig = [
  {
    name: "name" as const,
    label: "Nama Lengkap",
    required: true,
    type: "text" as const,
    placeholder: "John Doe",
  },
  {
    name: "email" as const,
    label: "Email",
    required: true,
    type: "email" as const,
    placeholder: "john@example.com",
  },
  {
    name: "phone" as const,
    label: "Nomor WhatsApp",
    required: false,
    type: "tel" as const,
    placeholder: "081234567890",
  },
  {
    name: "subject" as const,
    label: "Subjek",
    required: true,
    type: "text" as const,
    placeholder: "Website UMKM",
  },
  {
    name: "message" as const,
    label: "Pesan",
    required: true,
    type: "textarea" as const,
    placeholder: "Ceritakan kebutuhan website Anda...",
    rows: 5,
  },
];

const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
    onSubmit: async ({ value }) => {
      // Simulasi API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", value);
      toast.success("Pesan Anda telah terkirim!");
      form.reset();
    },
  });

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
                className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold mb-0.5">{info.title}</h3>

                  {info.action ? (
                    <Link
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <span className="text-foreground">{info.value}</span>
                  )}

                  <p className="text-sm text-muted-foreground mt-0.5">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

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

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  form.handleSubmit();
                }}
                className="space-y-6"
              >
                <div className="space-y-6">
                  {fieldConfig.map((config) => (
                    <form.Field
                      key={config.name}
                      name={config.name}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label
                            htmlFor={field.name}
                            className={
                              config.required
                                ? "after:content-['*'] after:ml-0.5 after:text-red-500"
                                : ""
                            }
                          >
                            {config.label}
                          </Label>

                          {config.type === "textarea" ? (
                            <Textarea
                              id={field.name}
                              name={field.name}
                              rows={config.rows}
                              placeholder={config.placeholder}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="resize-none"
                              aria-invalid={field.state.meta.errors.length > 0}
                              aria-describedby={
                                field.state.meta.errors.length > 0
                                  ? `${field.name}-error`
                                  : undefined
                              }
                            />
                          ) : (
                            <Input
                              id={field.name}
                              name={field.name}
                              type={config.type}
                              placeholder={config.placeholder}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="h-12"
                              aria-invalid={field.state.meta.errors.length > 0}
                              aria-describedby={
                                field.state.meta.errors.length > 0
                                  ? `${field.name}-error`
                                  : undefined
                              }
                            />
                          )}

                          {field.state.meta.errors.length > 0 && (
                            <p
                              id={`${field.name}-error`}
                              className="text-sm font-medium text-red-500"
                              role="alert"
                            >
                              {field.state.meta.errors[0]?.message}
                            </p>
                          )}
                        </div>
                      )}
                    </form.Field>
                  ))}
                </div>

                <form.Subscribe
                  selector={(state) => ({
                    canSubmit: state.canSubmit,
                    isSubmitting: state.isSubmitting,
                    isValid: state.isValid,
                  })}
                >
                  {({ canSubmit, isSubmitting, isValid }) => (
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={!canSubmit || isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Mengirim...
                        </span>
                      ) : (
                        <>
                          Kirim Pesan
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  )}
                </form.Subscribe>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
