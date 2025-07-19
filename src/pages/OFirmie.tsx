import { Users, Award, TrendingUp, Heart, Shield, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const OFirmie = () => {
  const stats = [
    { number: "15+", label: "Lat doświadczenia", icon: Award },
    { number: "300+", label: "Ukończonych projektów", icon: TrendingUp },
    { number: "200+", label: "Zadowolonych rodzin", icon: Heart },
    { number: "100%", label: "Gwarancja jakości", icon: Shield }
  ];

  const values = [
    {
      icon: Shield,
      title: "Niezawodność",
      description: "Dotrzymujemy wszystkich obietnic i terminów. Nasza reputacja jest naszym największym skarbem."
    },
    {
      icon: Award,
      title: "Jakość",
      description: "Używamy wyłącznie najlepszych materiałów i współpracujemy z doświadczonymi fachowcami."
    },
    {
      icon: Heart,
      title: "Pasja",
      description: "Budownictwo to nasza pasja. Każdy dom traktujemy jak nasz własny wymarzony projekt."
    },
    {
      icon: Users,
      title: "Wsparcie",
      description: "Oferujemy pełne wsparcie na każdym etapie - od projektu po wykończenia."
    }
  ];

  const team = [
    {
      name: "Marek Kowalski",
      position: "Założyciel i Dyrektor",
      experience: "20 lat doświadczenia",
      description: "Inżynier budowy z pasją do tworzenia wyjątkowych domów"
    },
    {
      name: "Anna Nowak",
      position: "Architekt",
      experience: "12 lat doświadczenia", 
      description: "Specjalistka w projektowaniu nowoczesnych domów jednorodzinnych"
    },
    {
      name: "Piotr Wiśniewski",
      position: "Kierownik budowy",
      experience: "15 lat doświadczenia",
      description: "Nadzoruje realizację projektów od fundamentów po klucz"
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
            O Firmie BudujDom
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delay">
            Od ponad 15 lat tworzymy wymarzone domy dla polskich rodzin. 
            Nasza misja to przekształcanie marzeń w rzeczywistość.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up">
                <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Nasza Historia
              </h2>
              <p className="text-lg text-muted-foreground">
                Poznaj historię firmy, która zmieniła życie setek rodzin
              </p>
            </div>

            <div className="space-y-8">
              <Card className="glass-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center text-white font-bold">
                      2009
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">Początek marzeń</h3>
                      <p className="text-muted-foreground">
                        Marek Kowalski, doświadczony inżynier budowy, zakłada firmę z misją budowy 
                        wysokiej jakości domów w przystępnych cenach. Pierwszy projekt - dom dla własnej rodziny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center text-white font-bold">
                      2015
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">Rozwój zespołu</h3>
                      <p className="text-muted-foreground">
                        Po zbudowaniu 50 domów, zespół rozrasta się o doświadczonych architektów i 
                        kierowników budowy. Rozpoczynamy oferowanie kompleksowych usług projektowych.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center text-white font-bold">
                      2020
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">Nowoczesne technologie</h3>
                      <p className="text-muted-foreground">
                        Wprowadzamy najnowsze technologie budowlane, systemy inteligentnego domu 
                        i ekologiczne rozwiązania. 200 szczęśliwych rodzin już mieszka w naszych domach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0 shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 accent-gradient rounded-full flex items-center justify-center text-white font-bold">
                      2025
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">Przyszłość budownictwa</h3>
                      <p className="text-muted-foreground">
                        Dziś jesteśmy jedną z najbardziej zaufanych firm budowlanych w regionie. 
                        Nadal z pasją realizujemy marzenia o idealnym domu dla każdej rodziny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasze Wartości
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wartości, które kierują nami w codziennej pracy i budowaniu relacji z klientami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Nasz Zespół
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Poznaj ludzi, którzy z pasją tworzą Twój wymarzony dom
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="glass-card text-center hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-accent text-xs mb-3">{member.experience}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
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
              Gotowy na współpracę z nami?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dołącz do grona zadowolonych klientów i rozpocznij budowę swojego wymarzonego domu
            </p>
            <Button size="lg" className="hero-gradient text-white shadow-medium">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OFirmie;