import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { CheckCircle, Award, Users, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const features = [
    'T.C. Sağlık Bakanlığı lisanslı',
    'ISO 9001:2015 kalite belgeli',
    'GDP (İyi Dağıtım Uygulamaları) sertifikalı',
    'Soğuk zincir ürün taşımacılığı',
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <ScrollAnimationWrapper direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
                  alt="Modern ilaç deposu"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">30+</div>
                    <div className="text-muted-foreground">Yıllık Tecrübe</div>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
            </div>
          </ScrollAnimationWrapper>

          {/* Content Side */}
          <ScrollAnimationWrapper direction="right">
            <div>
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Hakkımızda
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Sağlık Sektöründe
                <span className="text-gradient block">Güvenin Adresi</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Hesecza Ecza Deposu olarak 1993 yılından bu yana Türkiye genelinde 
                eczanelere ve sağlık kuruluşlarına kesintisiz hizmet veriyoruz. 
                Modern depo sistemlerimiz, geniş ürün yelpazemiz ve uzman kadromuzla 
                sektörün lider firmalarından biri olmaktan gurur duyuyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-secondary/50 rounded-2xl">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">Çalışan</div>
                </div>
                <div className="text-center border-x border-border">
                  <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">15</div>
                  <div className="text-sm text-muted-foreground">Şube</div>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Ödül</div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
};
