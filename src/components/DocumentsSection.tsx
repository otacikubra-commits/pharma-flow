import React, { useState } from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { FileCheck, X } from 'lucide-react';

import gdpCertificate from '@/assets/certificates/gdp-certificate.png';
import iso9001Certificate from '@/assets/certificates/iso-9001-certificate.png';
import iso27001Certificate from '@/assets/certificates/iso-27001-certificate.png';
import iso14001Certificate from '@/assets/certificates/iso-14001-certificate.png';
import iso45001Certificate from '@/assets/certificates/iso-45001-certificate.png';

const certificates = [
  {
    id: 1,
    title: 'GDP - İyi Dağıtım Uygulamaları',
    description: 'VIVACERT belgelendirme tarafından denetlenmiş',
    image: gdpCertificate,
  },
  {
    id: 2,
    title: 'ISO 9001:2015',
    description: 'Kalite Yönetim Sistemi',
    image: iso9001Certificate,
  },
  {
    id: 3,
    title: 'ISO 27001:2022',
    description: 'Bilgi Güvenliği Yönetim Sistemi',
    image: iso27001Certificate,
  },
  {
    id: 4,
    title: 'ISO 14001:2015',
    description: 'Çevre Yönetim Sistemi',
    image: iso14001Certificate,
  },
  {
    id: 5,
    title: 'ISO 45001:2018',
    description: 'İş Sağlığı ve Güvenliği Yönetim Sistemi',
    image: iso45001Certificate,
  },
];

export const DocumentsSection: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="belgeler" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileCheck className="w-4 h-4" />
              Sertifikalarımız
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Belgelerimiz
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uluslararası standartlara uygun sertifikalarımız ile kalite ve güvenilirliğimizi belgeliyoruz.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certificates.map((cert, index) => (
            <ScrollAnimationWrapper key={cert.id} delay={index * 100}>
              <div
                onClick={() => setSelectedCertificate(cert)}
                className="group cursor-pointer bg-background rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-muted">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm text-center mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  {cert.description}
                </p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>

      {/* Modal for enlarged certificate view */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
