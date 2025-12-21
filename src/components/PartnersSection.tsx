import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';

export const PartnersSection: React.FC = () => {
  const partners = [
    'Pfizer', 'Roche', 'Novartis', 'Sanofi', 'Bayer', 
    'Johnson & Johnson', 'AstraZeneca', 'Merck', 'GSK', 'Abdi İbrahim'
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container-custom">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              İş Ortaklarımız
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Dünya Devleriyle Çalışıyoruz
            </h2>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="px-6 py-4 bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
