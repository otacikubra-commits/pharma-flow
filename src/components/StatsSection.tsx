import React from 'react';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Package, Users, MapPin, Truck } from 'lucide-react';

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  isVisible: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, value, suffix = '', label, isVisible }) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div className="text-center p-8">
      <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-lg">{label}</div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  const stats = [
    { icon: Package, value: 5000, suffix: '+', label: 'Ürün Çeşidi' },
    { icon: Users, value: 1500, suffix: '+', label: 'Aktif Eczane' },
    { icon: MapPin, value: 81, label: 'İl Kapsama' },
    { icon: Truck, value: 50000, suffix: '+', label: 'Aylık Teslimat' },
  ];

  return (
    <section ref={ref} className="py-20 hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};
