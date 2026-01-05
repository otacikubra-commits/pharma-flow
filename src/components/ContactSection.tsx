import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const contactInfo = [
    { icon: MapPin, label: 'Adres', value: 'Organize Sanayi Bölgesi, 1. Cadde No:45, İstanbul' },
    { icon: Phone, label: 'Telefon', value: '0 551 562 66 62' },
    { icon: Mail, label: 'E-posta', value: 'info@hesecza.com' },
    { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt-Cmt: 08:00 - 18:00' },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              İletişim
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Bizimle
              <span className="text-gradient"> İletişime Geçin</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sorularınız ve sipariş talepleriniz için 7/24 müşteri hizmetlerimiz hizmetinizdedir.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollAnimationWrapper direction="left">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-lg border border-border card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimationWrapper>

          {/* Contact Form */}
          <ScrollAnimationWrapper direction="right">
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Mesaj Gönderin</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Eczane Adı</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      placeholder="Eczane Adı"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-posta</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-5 h-5" />
                  Mesaj Gönder
                </Button>
              </form>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
