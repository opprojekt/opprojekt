import { useState } from 'react';
import { Calendar, MapPin, Square, Star, ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import house1 from '@/assets/completed-house-1.jpg';
import house2 from '@/assets/completed-house-2.jpg';
import house3 from '@/assets/completed-house-3.jpg';

const Realizacje = () => {
  const [activeFilter, setActiveFilter] = useState('wszystkie');

  const filters = [
    { id: 'wszystkie', label: 'Wszystkie' },
    { id: 'ekonomiczny', label: 'Ekonomiczny' },
    { id: 'standardowy', label: 'Standardowy' },
    { id: 'premium', label: 'Premium' }
  ];

  const projects = [
    {
      id: 1,
      title: "Nowoczesny dom w Warszawie",
      location: "Warszawa, Wilanów",
      area: "180 m²",
      year: "2024",
      category: "standardowy",
      price: "850,000 zł",
      image: house1,
      rating: 5.0,
      description: "Elegancki dom jednorodzinny z nowoczesnym designem, dużymi przeszkleniami i przemyślaną funkcjonalnością.",
      features: ["4 pokoje", "2 łazienki", "Garaż", "Ogród"],
      testimonial: "Jestem zachwycona jakością wykonania. Dom przekroczył nasze oczekiwania!",
      client: "Anna K."
    },
    {
      id: 2,
      title: "Luksusowa willa z basenem",
      location: "Konstancin-Jeziorna",
      area: "280 m²",
      year: "2024",
      category: "premium",
      price: "1,200,000 zł",
      image: house2,
      rating: 5.0,
      description: "Ekskluzywna willa z basenem, spa i inteligentnym systemem zarządzania domem.",
      features: ["6 pokoi", "3 łazienki", "Basen", "Spa", "Smart home"],
      testimonial: "Profesjonalizm na najwyższym poziomie. Każdy detal dopracowany do perfekcji.",
      client: "Marcin W."
    },
    {
      id: 3,
      title: "Ekologiczny dom w stylu skandynawskim",
      location: "Piaseczno",
      area: "160 m²",
      year: "2023",
      category: "ekonomiczny",
      price: "720,000 zł",
      image: house3,
      rating: 5.0,
      description: "Energooszczędny dom z ekologicznymi materiałami i odnawialnych źródeł energii.",
      features: ["3 pokoje", "2 łazienki", "Pompa ciepła", "Panele słoneczne"],
      testimonial: "Świetna współpraca od początku do końca. Polecamy wszystkim znajomym!",
      client: "Katarzyna M."
    },
    {
      id: 4,
      title: "Dom z charakterem",
      location: "Józefów",
      area: "200 m²",
      year: "2023",
      category: "standardowy",
      price: "920,000 zł",
      image: house1,
      rating: 5.0,
      description: "Unikalny projekt łączący tradycyjne elementy z nowoczesnymi rozwiązaniami.",
      features: ["5 pokoi", "2 łazienki", "Biblioteka", "Taras"],
      testimonial: "Każde spotkanie było produktywne. Zespół bardzo doświadczony i pomocny.",
      client: "Robert P."
    },
    {
      id: 5,
      title: "Rodzinne gniazdo",
      location: "Otwock",
      area: "150 m²",
      year: "2023",
      category: "ekonomiczny",
      price: "680,000 zł",
      image: house2,
      rating: 5.0,
      description: "Przytulny dom dla młodej rodziny z funkcjonalnym rozkładem i przyjazną przestrzenią.",
      features: ["4 pokoje", "2 łazienki", "Plac zabaw", "Altana"],
      testimonial: "Dom marzeń w doskonałej cenie. Dziękujemy za realizację naszych planów!",
      client: "Joanna i Tomasz L."
    },
    {
      id: 6,
      title: "Minimalistyczna elegancja",
      location: "Wilanów",
      area: "220 m²",
      year: "2024",
      category: "premium",
      price: "1,100,000 zł",
      image: house3,
      rating: 5.0,
      description: "Minimalistyczny design z najwyższej jakości materiałami i przemyślanymi detalami.",
      features: ["4 pokoje", "3 łazienki", "Garderoba", "Home office"],
      testimonial: "Absolutnie wyjątkowy projekt. Każdy metr został wykorzystany idealnie.",
      client: "Magdalena S."
    }
  ];

  const filteredProjects = activeFilter === 'wszystkie' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
            Nasze Realizacje
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delay">
            Zobacz domy, które wybudowaliśmy dla naszych klientów. 
            Każda realizacja to unikalna historia i spełnione marzenia.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground text-sm">Ukończonych projektów</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">15</div>
              <div className="text-muted-foreground text-sm">Lat doświadczenia</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">5.0</div>
              <div className="text-muted-foreground text-sm">Średnia ocena</div>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Zadowolonych klientów</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center text-muted-foreground mr-4">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm">Filtruj według pakietu:</span>
            </div>
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "hero-gradient text-white" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-lift border-0 shadow-soft">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="w-3 h-3 text-accent mr-1 fill-current" />
                      <span className="text-xs font-medium">{project.rating}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-4 h-4 mr-2" />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="border-t border-border pt-4">
                    <blockquote className="text-xs italic text-muted-foreground mb-2">
                      "{project.testimonial}"
                    </blockquote>
                    <div className="text-xs font-medium text-primary">- {project.client}</div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-primary">{project.price}</span>
                    <Button variant="outline" size="sm">
                      Zobacz więcej
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Twój dom może być następny
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dołącz do grona zadowolonych klientów i rozpocznij budowę swojego wymarzonego domu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient text-white shadow-medium">
                Rozpocznij projekt
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Umów spotkanie
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Realizacje;