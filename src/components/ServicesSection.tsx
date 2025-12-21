import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { Pill, Thermometer, Stethoscope, Heart, Baby, Eye } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Pill,
      title: 'Reçeteli İlaçlar',
      description: 'Tüm reçeteli ilaçların güvenli ve hızlı temini',
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      icon: Thermometer,
      title: 'Soğuk Zincir Ürünler',
      description: 'Aşılar ve özel saklama gerektiren ürünler',
      color: 'bg-cyan-500/10 text-cyan-600',
    },
    {
      icon: Stethoscope,
      title: 'Medikal Cihazlar',
      description: 'Tansiyon aletleri, şeker ölçerler ve daha fazlası',
      color: 'bg-teal-500/10 text-teal-600',
    },
    {
      icon: Heart,
      title: 'Takviye Ürünler',
      description: 'Vitamin, mineral ve besin takviyeleri',
      color: 'bg-red-500/10 text-red-600',
    },
    {
      icon: Baby,
      title: 'Anne & Bebek',
      description: 'Bebek mamaları, bakım ürünleri ve aksesuarlar',
      color: 'bg-pink-500/10 text-pink-600',
    },
    {
      icon: Eye,
      title: 'Dermokozmetik',
      description: 'Cilt bakım ürünleri ve kozmetikler',
      color: 'bg-purple-500/10 text-purple-600',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Hizmetlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kapsamlı Ürün
              <span className="text-gradient"> Portföyümüz</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              5000'den fazla ürün çeşidiyle eczanelerinizin tüm ihtiyaçlarını 
              tek noktadan karşılıyoruz.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollAnimationWrapper
              key={service.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group bg-card rounded-2xl p-8 shadow-lg border border-border card-hover h-full">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};
