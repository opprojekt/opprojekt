import { Mail, Phone, MapPin, Home, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 accent-gradient rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl">OPprojekt</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Specjalizujemy się w budowie nowoczesnych domów z najwyższą jakością wykonania. 
              Twój wymarzony dom jest w zasięgu ręki.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Nasze usługi</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="hover:text-background cursor-pointer transition-colors">Budowa domów jednorodzinnych</li>
              <li className="hover:text-background cursor-pointer transition-colors">Projekty architektoniczne</li>
              <li className="hover:text-background cursor-pointer transition-colors">Nadzór budowy</li>
              <li className="hover:text-background cursor-pointer transition-colors">Wykończenia wnętrz</li>
              <li className="hover:text-background cursor-pointer transition-colors">Modernizacje</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Szybkie linki</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="hover:text-background cursor-pointer transition-colors">Oferty</li>
              <li className="hover:text-background cursor-pointer transition-colors">O firmie</li>
              <li className="hover:text-background cursor-pointer transition-colors">Realizacje</li>
              <li className="hover:text-background cursor-pointer transition-colors">Kontakt</li>
              <li className="hover:text-background cursor-pointer transition-colors">Polityka prywatności</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Kontakt</h3>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>kontakt@OPprojekt.pl</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>ul. Budowlana 123<br />00-001 Warszawa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 OPprojekt. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;