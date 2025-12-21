import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Truck, Clock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30" />

      <div className="container-custom relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Türkiye'nin Güvenilir İlaç Deposu</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Sağlık İçin
              <span className="block text-accent">Güvenilir Çözümler</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              30 yılı aşkın tecrübemizle, eczanelere ve sağlık kuruluşlarına 
              en kaliteli ilaç ve medikal ürünleri hızlı ve güvenli şekilde ulaştırıyoruz.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg">
                Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                Bize Ulaşın
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">5000+</div>
                <div className="text-sm text-primary-foreground/70">Ürün Çeşidi</div>
              </div>
              <div className="text-center border-x border-primary-foreground/20">
                <div className="text-3xl md:text-4xl font-bold text-accent">1500+</div>
                <div className="text-sm text-primary-foreground/70">Eczane</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">30+</div>
                <div className="text-sm text-primary-foreground/70">Yıl Tecrübe</div>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative hidden lg:block">
            <div className="space-y-4">
              {[
                { icon: Shield, title: 'Lisanslı & Güvenilir', desc: 'T.C. Sağlık Bakanlığı onaylı tüm ürünler' },
                { icon: Truck, title: 'Hızlı Teslimat', desc: 'Aynı gün kargo ile tüm Türkiye\'ye' },
                { icon: Clock, title: '7/24 Destek', desc: 'Her an yanınızdayız' },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 animate-slide-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-foreground mb-1">{item.title}</h3>
                      <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
