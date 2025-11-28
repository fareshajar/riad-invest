import { DollarSign, TrendingUp, Rocket, Lightbulb, Award } from 'lucide-react'; // Removed unused BarChart, Home, CalendarDays
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExampleInvestmentPage = () => {
  return (
    <div className="space-y-16 py-12">
      <section className="text-center bg-gradient-to-br from-riad-orange-primary to-riad-orange-dark text-white py-24 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-serif font-extrabold mb-4">Simulation d'Investissement : Le Riad "Almora"</h1>
        <p className="text-xl font-sans max-w-3xl mx-auto">
          Ces chiffres sont basés sur des projets réels menés en 2023. Les performances passées ne préjugent pas des résultats futurs, mais illustrent la méthodologie appliquée.
        </p>
      </section>

      <section className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark flex items-center justify-center">
          <Rocket className="inline-block mr-4 h-8 w-8 text-riad-teal-accent" />
          Scénario : Rénovation lourde d'un riad 6 chambres à Marrakech (Médina)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Investissement Initial */}
          <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-semibold text-riad-charcoal-dark flex items-center">
                <DollarSign className="inline-block mr-3 h-6 w-6 text-riad-teal-accent" />
                1. Investissement Initial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-riad-charcoal-dark/80 font-sans">
              <div className="flex justify-between">
                <span>Achat + Frais</span>
                <span className="font-medium text-riad-orange-primary">152 500 €</span>
              </div>
              <div className="flex justify-between">
                <span>Rénovation & Décoration</span>
                <span className="font-medium text-riad-orange-primary">130 000 €</span>
              </div>
              <hr className="my-4 border-riad-beige-dark" />
              <div className="flex justify-between text-xl font-bold text-riad-charcoal-dark">
                <span>Total Investissement</span>
                <span className="text-riad-teal-accent">282 500 €</span>
              </div>
            </CardContent>
          </Card>

          {/* Performance Locative Annuelle */}
          <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-orange-primary bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-semibold text-riad-charcoal-dark flex items-center">
                <TrendingUp className="inline-block mr-3 h-6 w-6 text-riad-orange-primary" />
                2. Performance Locative Annuelle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-riad-charcoal-dark/80 font-sans">
              <div className="flex justify-between">
                <span>Chiffre d'Affaires (65% occupancy @ 160€/nuit)</span>
                <span className="font-medium text-riad-teal-accent">~38 000 €</span>
              </div>
              <div className="flex justify-between">
                <span>Charges (Personnel, énergie, marketing, etc.)</span>
                <span className="font-medium text-riad-teal-accent">~19 000 €</span>
              </div>
              <hr className="my-4 border-riad-beige-dark" />
              <div className="flex justify-between text-xl font-bold text-riad-charcoal-dark">
                <span>Revenu Net Annuel</span>
                <span className="text-riad-orange-primary">~18 860 €</span>
              </div>
              <p className="text-sm text-right text-riad-charcoal-dark/70">(Rendement locatif ~6.7%)</p>
            </CardContent>
          </Card>

          {/* Création de Valeur (Hypothèse à 7 ans) */}
          <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-semibold text-riad-charcoal-dark flex items-center">
                <Award className="inline-block mr-3 h-6 w-6 text-riad-teal-accent" />
                3. Création de Valeur (Hypothèse à 7 ans)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-riad-charcoal-dark/80 font-sans">
              <div className="flex justify-between">
                <span>Plus-value estimée à +25%</span>
                <span className="font-medium text-riad-orange-primary">+70 500 €</span>
              </div>
              <div className="flex justify-between">
                <span>Revenus nets cumulés (7 ans)</span>
                <span className="font-medium text-riad-orange-primary">+132 000 €</span>
              </div>
              <hr className="my-4 border-riad-beige-dark" />
              <div className="flex justify-between text-xl font-bold text-riad-charcoal-dark">
                <span>Gain Total sur 7 ans</span>
                <span className="text-riad-teal-accent">~202 500 €</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-riad-charcoal-dark mt-2">
                <span>Rendement Annuel Moyen Complet</span>
                <span className="text-riad-orange-primary">~10.2%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Levier d'Amélioration */}
        <Card className="mt-10 p-6 rounded-xl shadow-lg border-l-4 border-riad-orange-primary bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-semibold text-riad-charcoal-dark flex items-center">
              <Lightbulb className="inline-block mr-3 h-6 w-6 text-riad-orange-primary" />
              Levier d'Amélioration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-riad-charcoal-dark/80 font-sans">
            <p>Avec une optimisation du pricing (180€/nuit) et de l'occupation (70%), le rendement annuel moyen global peut atteindre <span className="font-bold text-riad-teal-accent">12-14%</span>.</p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Prêt à Investir ?
        </h2>
        <p className="text-xl font-sans max-w-2xl mx-auto mb-8 text-riad-charcoal-dark/80">
          Contactez-nous pour discuter de votre projet et obtenir une simulation personnalisée.
        </p>
        <Button className="bg-riad-orange-primary text-white hover:bg-riad-orange-dark transition-colors rounded-full px-8 py-4 text-lg">
          Prendre Rendez-vous
        </Button>
      </section>
    </div>
  );
};

export default ExampleInvestmentPage;
