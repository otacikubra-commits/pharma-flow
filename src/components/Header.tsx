import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '@/assets/heslogo.png';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Hizmetlerimiz', href: '#services' },
    { label: 'Ürünler', href: '#products' },
    { label: 'Belgeler', href: '#belgeler' },
    { label: 'İletişim', href: '#contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+905515626662" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              0 551 562 66 62
            </a>
            <a href="mailto:info@hesecza.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@hesecza.com
            </a>
          </div>
          <div className="text-primary-foreground/80">
            Türkiye'nin Güvenilir İlaç Tedarikçisi
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-card/95 backdrop-blur-lg shadow-lg py-3'
            : 'bg-transparent py-4'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <img src={logo} alt="Hesecza Ecza Deposu" className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button size="sm" asChild>
              <a href="#contact">Sipariş Ver</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl border-t border-border">
            <nav className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Sipariş Ver</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
