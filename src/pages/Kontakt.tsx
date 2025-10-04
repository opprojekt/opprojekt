import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+48 660 930 713", "+48 889 781 597"],
      description: "Zadzwoń do nas w godzinach pracy"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["kontakt@OPprojekt.pl", "biuro@OPprojekt.pl"],
      description: "Napisz do nas, odpowiemy w 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      details: ["ul. Bieżuńska 1/48", "03-578 Warszawa"],
      description: "Odwiedź nasze biuro"
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      details: ["Pn-Pt: 8:00 - 18:00", "Sb: 9:00 - 14:00"],
      description: "Jesteśmy dostępni dla Ciebie"
    }
  ];

  const faqs = [
    {
      question: "Ile trwa budowa domu?",
      answer: "Standardowy czas budowy to 6-12 miesięcy, w zależności od wielkości i złożoności projektu."
    },
    {
      question: "Czy oferujecie financing?",
      answer: "Współpracujemy z bankami i pomożemy Ci znaleźć najlepsze rozwiązanie finansowe."
    },
    {
      question: "Czy można modyfikować projekty?",
      answer: "Tak, wszystkie nasze projekty można dostosować do indywidualnych potrzeb klienta."
    },
    {
      question: "Jakiej gwarancji udzielacie?",
      answer: "Oferujemy 5-letnią gwarancję na konstrukcję i 2-letnią na wykończenia."
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate-fade-in-up">
            Skontaktuj się z nami
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in-up-delay">
            Masz pytania? Chcesz otrzymać wycenę? Jesteśmy tutaj, aby pomóc. 
            Skontaktuj się z nami już dziś!
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-primary font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 subtle-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="glass-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading flex items-center">
                    <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                    Napisz do nas
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Imię i nazwisko *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Twoje imię i nazwisko"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+48 897 815 97"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="twoj@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Temat</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Czego dotyczy Twoja wiadomość?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Wiadomość *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Opisz swoje potrzeby, zadaj pytanie lub poproś o wycenę..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hero-gradient text-white shadow-medium">
                      Wyślij wiadomość
                      <Send className="ml-2 w-4 h-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Wypełniając formularz wyrażasz zgodę na przetwarzanie danych osobowych 
                      zgodnie z naszą polityką prywatności.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="glass-card border-0 shadow-soft">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Mapa lokalizacji</p>
                      <p className="text-sm text-muted-foreground">ul. Budowlana 123, Warszawa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="glass-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Potrzebujesz szybkiej pomocy?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Zadzwoń teraz</p>
                      <p className="text-sm text-muted-foreground">+48 889781597</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Napisz email</p>
                      <p className="text-sm text-muted-foreground">kontakt@OPprojekt.pl</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="lg">
                    Umów bezpłatną konsultację
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące budowy domów
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3 text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
            <Button variant="outline" size="lg">
              Zadaj pytanie bezpośrednio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;