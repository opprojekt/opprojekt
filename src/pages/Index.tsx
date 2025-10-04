import { ArrowRight, CheckCircle, Users, Award, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';
import heroImage from '@/assets/hero-construction.jpg';
import house1 from '@/assets/completed-house-1.jpg';
import house2 from '@/assets/completed-house-2.jpg';
import house3 from '@/assets/completed-house-3.jpg';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Budowa nowoczesnego domu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 animate-fade-in-up">
              Budujemy Twój
              <span className="block accent-gradient bg-clip-text text-transparent">
                Wymarzony Dom
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delay">
              Specjalizujemy się w budowie nowoczesnych domów jednorodzinnych. 
              Z nami stworzysz przestrzeń idealną dla Twojej rodziny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <Button size="lg" className="accent-gradient text-white shadow-strong hover:shadow-medium transition-all duration-300">
                Bezpłatna wycena
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-foreground">
                Zobacz realizacje
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dlaczego wybierają nas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Łączymy tradycyjne rzemiosło z nowoczesnymi technologiami, aby stworzyć domy najwyższej jakości
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "15+ lat doświadczenia",
                description: "Wieloletnie doświadczenie w branży budowlanej"
              },
              {
                icon: Users,
                title: "200+ zadowolonych klientów",
                description: "Setki rodzin już mieszka w naszych domach"
              },
              {
                icon: CheckCircle,
                title: "Gwarancja jakości",
                description: "Pełna gwarancja na wszystkie wykonane prace"
              },
              {
                icon: Clock,
                title: "Terminowość",
                description: "Zawsze dotrzymujemy ustalonych terminów"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-card hover-lift animate-fade-in-up border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze najnowsze realizacje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zobacz domy, które wybudowaliśmy dla naszych klientów
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: house1, title: "Dom rodzinny w Warszawie", area: "180 m²", price: "od 850 000 zł" },
              { image: house2, title: "Willa z basenem", area: "280 m²", price: "od 1 200 000 zł" },
              { image: house3, title: "Ekologiczny dom", area: "160 m²", price: "od 720 000 zł" }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover-lift animate-fade-in-up shadow-soft border-0">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Ukończone
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>Powierzchnia: {project.area}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-accent mr-1 fill-current" />
                      <span>5.0</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{project.price}</span>
                    <Button variant="outline" size="sm">
                      Zobacz więcej
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
              Zobacz wszystkie realizacje
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 animate-fade-in-up">
            Gotowy na rozpoczęcie budowy?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up-delay">
            Skontaktuj się z nami już dziś i otrzymaj bezpłatną wycenę Twojego przyszłego domu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
              Skontaktuj się z nami
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Zadzwoń: +48 889 781 597
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
