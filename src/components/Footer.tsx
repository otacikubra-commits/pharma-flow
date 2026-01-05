import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'Hakkımızda', href: '#about' },
      { label: 'Kariyer', href: '#' },
      { label: 'Basın Odası', href: '#' },
      { label: 'Sürdürülebilirlik', href: '#' },
    ],
    services: [
      { label: 'Reçeteli İlaçlar', href: '#services' },
      { label: 'OTC Ürünler', href: '#services' },
      { label: 'Dermokozmetik', href: '#services' },
      { label: 'Medikal Cihazlar', href: '#services' },
    ],
    support: [
      { label: 'SSS', href: '#' },
      { label: 'Teslimat Bilgisi', href: '#' },
      { label: 'İade Politikası', href: '#' },
      { label: 'Gizlilik Politikası', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="mb-6 inline-block">
              <img src={logo} alt="Hesecza Ecza Deposu" className="h-12 w-auto brightness-0 invert" />
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              2024'ten bu yana Türkiye'nin güvenilir ecza deposu. Kaliteli ürünler, hızlı teslimat, 
              profesyonel hizmet anlayışıyla eczanelerinizin yanındayız.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Kurumsal</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Ürünler</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Destek</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Hesecza Ecza Deposu. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:bg-accent transition-colors"
            aria-label="Yukarı çık"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
