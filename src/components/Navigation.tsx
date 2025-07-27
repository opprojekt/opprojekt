import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Strona główna', path: '/', icon: Home },
    { name: 'Oferty', path: '/oferty' },
    { name: 'O firmie', path: '/o-firmie' },
    { name: 'Realizacje', path: '/realizacje' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 font-heading font-bold text-xl text-primary">
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span>OPprojekt</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive ? 'text-primary' : 'text-foreground/80'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Button className="hero-gradient text-white shadow-soft hover:shadow-medium transition-all duration-300">
              Bezpłatna wycena
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/80 hover:bg-muted hover:text-primary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button className="hero-gradient text-white shadow-soft mx-4 mt-2">
                Bezpłatna wycena
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;