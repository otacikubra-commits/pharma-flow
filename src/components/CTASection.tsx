import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <ScrollAnimationWrapper>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
                alt="Pharmacy background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 hero-gradient opacity-90" />
            </div>

            {/* Content */}
            <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Eczaneniz İçin<br />
                <span className="text-accent">Doğru Tedarikçiyi</span> Buldunuz
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Hemen bizimle iletişime geçin ve eczaneniz için özel fiyat tekliflerimizi alın. 
                Kaliteli hizmet ve rekabetçi fiyatlarla yanınızdayız.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="xl">
                  Teklif Al
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5" />
                  0212 123 45 67
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
