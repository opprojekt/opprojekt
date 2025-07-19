import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Oferty = () => {
  const packages = [
    {
      name: "EKONOMICZNY",
      price: "od 3,200 zł/m²",
      popular: false,
      description: "Idealny dla osób szukających wysokiej jakości w przystępnej cenie",
      features: [
        "Projekt domu + adaptacja",
        "Fundamenty i ściany nośne",
        "Dach z pokryciem dachówką",
        "Tynki zewnętrzne i wewnętrzne",
        "Podstawowa instalacja elektryczna",
        "Instalacja wodno-kanalizacyjna",
        "Podstawowe wykończenia"
      ]
    },
    {
      name: "STANDARDOWY",
      price: "od 4,200 zł/m²",
      popular: true,
      description: "Najczęściej wybierany pakiet z doskonałym stosunkiem jakości do ceny",
      features: [
        "Wszystko z pakietu EKONOMICZNY",
        "Izolacja termiczna ścian",
        "Rozbudowana instalacja elektryczna",
        "Instalacja centralnego ogrzewania",
        "Okna o podwyższonych parametrach",
        "Wykończenia średniej klasy",
        "Termoizolacja podłogi",
        "Podstawowy system wentylacji"
      ]
    },
    {
      name: "PREMIUM",
      price: "od 5,800 zł/m²",
      popular: false,
      description: "Luksusowy pakiet z najwyższej jakości materiałami i wykończeniami",
      features: [
        "Wszystko z pakietu STANDARDOWY",
        "Materiały najwyższej jakości",
        "Inteligentny system zarządzania domem",
        "Rekuperacja powietrza",
        "Wykończenia premium",
        "Zaawansowane systemy bezpieczeństwa",
        "Projektowanie wnętrz",
        "Architektura krajobrazu"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Projekt architektoniczny",
      description: "Indywidualny projekt domu dostosowany do Twoich potrzeb",
      price: "od 8,000 zł"
    },
    {
      title: "Nadzór budowy",
      description: "Profesjonalny nadzór podczas całego procesu budowy",
      price: "od 2,500 zł"
    },
    {
      title: "Wykończenia wnętrz",
      description: "Kompleksowe wykończenia wnętrz pod klucz",
      price: "od 1,800 zł/m²"
    },
    {
      title: "Infrastruktura działki",
      description: "Przygotowanie działki, drogi dojazdowe, ogrodzenie",
      price: "od 25,000 zł"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
            Nasze Oferty
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up-delay">
            Wybierz pakiet idealnie dopasowany do Twoich potrzeb i budżetu
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Pakiety budowy domów
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferujemy trzy kompleksowe pakiety dostosowane do różnych potrzeb i budżetów
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative hover-lift transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-primary shadow-strong scale-105' 
                    : 'border-border shadow-soft'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="accent-gradient text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Najpopularniejszy
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-heading font-bold text-primary">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'hero-gradient text-white shadow-medium hover:shadow-strong' 
                        : 'variant-outline hover:bg-primary hover:text-primary-foreground'
                    }`}
                    size="lg"
                  >
                    Wybierz pakiet
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dodatkowe usługi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uzupełnij swój pakiet o dodatkowe usługi dla kompleksowej realizacji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="glass-card hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                      {service.price}
                    </span>
                    <Button variant="outline" size="sm">
                      Dowiedz się więcej
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Potrzebujesz indywidualnej wyceny?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Skontaktuj się z nami, aby otrzymać szczegółową wycenę dostosowaną do Twoich potrzeb
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hero-gradient text-white shadow-medium">
                Bezpłatna wycena
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

export default Oferty;