import React from 'react';
import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const categories = [
    {
      title: 'Reçeteli İlaçlar',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
      count: '2500+ Ürün',
    },
    {
      title: 'OTC Ürünler',
      image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80',
      count: '1200+ Ürün',
    },
    {
      title: 'Dermokozmetik',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80',
      count: '800+ Ürün',
    },
    {
      title: 'Medikal Cihazlar',
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80',
      count: '500+ Ürün',
    },
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimationWrapper>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Ürün Kategorileri
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Geniş Ürün
              <span className="text-gradient"> Yelpazemiz</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              İlaç sektörünün önde gelen markalarıyla çalışarak eczanelerinize 
              en kaliteli ürünleri sunuyoruz.
            </p>
          </div>
        </ScrollAnimationWrapper>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {categories.map((category, index) => (
            <ScrollAnimationWrapper
              key={category.title}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 100}
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-xl h-72 card-hover">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-accent/90 text-accent-foreground text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {category.count}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">{category.title}</h3>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

      </div>
    </section>
  );
};
