import { Building, Wrench, Star, LayoutGrid, TrendingUp } from 'lucide-react'; // Removed unused Home, DollarSign, CheckCircle, Lightbulb
import { Button } from '@/components/ui/button';

const OurOffersPage = () => {
  return (
    <div className="space-y-16 py-12">
      <section className="text-center bg-gradient-to-br from-riad-orange-primary to-riad-orange-dark text-white py-24 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-serif font-extrabold mb-4">Votre Projet, Notre Accompagnement</h1>
        <p className="text-xl font-sans max-w-3xl mx-auto">
          Quel que soit le point de départ de votre aventure, nous avons une solution structurée.
        </p>
      </section>

      <section className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark">
          Choisissez l'Offre qui Vous Correspond
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OfferCard
            icon={<Wrench className="h-12 w-12 text-riad-teal-accent" />}
            title="Pack 'Rénovation & Rendement'"
            description="Pour l'investisseur recherchant la meilleure balance rendement/plus-value."
            value="Notre œil expert pour dénicher le bon riad à transformer et notre maîtrise des coûts de rénovation font toute la différence."
            buttonText="Découvrir ce pack"
          />
          <OfferCard
            icon={<LayoutGrid className="h-12 w-12 text-riad-teal-accent" />}
            title="Pack 'Création sur Mesure'"
            description="Pour le visionnaire qui souhaite un riad unique, de conception neuve."
            value="De l'acquisition du terrain à la conception architecturale, nous matérialisons votre rêve dans le respect des traditions et des standards modernes."
            buttonText="Concevoir mon riad"
          />
          <OfferCard
            icon={<TrendingUp className="h-12 w-12 text-riad-teal-accent" />}
            title="Pack 'Optimisation & Performance'"
            description="Pour le propriétaire d'un riad existant, sous-performant ou dont la gestion est chronophage."
            value="Audit, repositionnement et gestion professionnelle pour transformer votre bien en une machine à revenus."
            buttonText="Optimiser mon bien"
          />
        </div>
      </section>

      <section className="bg-riad-beige-light py-20 rounded-3xl text-center">
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Pourquoi Choisir Riad Invest ?
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <BenefitCard
            icon={<Star className="h-10 w-10 text-riad-orange-primary" />}
            title="Expertise Locale Inégalée"
            description="Une connaissance approfondie du marché immobilier de Marrakech et de ses spécificités."
          />
          <BenefitCard
            icon={<Building className="h-10 w-10 text-riad-orange-primary" />}
            title="Transparence et Confiance"
            description="Un suivi en temps réel de votre projet et une communication claire à chaque étape."
          />
        </div>
      </section>
    </div>
  );
};

interface OfferCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  buttonText: string;
}

const OfferCard = ({ icon, title, description, value, buttonText }: OfferCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-riad-orange-primary flex flex-col h-full">
    <div className="mb-6 flex justify-center">
      <div className="p-4 rounded-full bg-riad-beige-light">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-serif font-semibold mb-3 text-riad-charcoal-dark text-center">{title}</h3>
    <p className="text-riad-charcoal-dark/80 font-sans mb-4 text-center flex-grow">{description}</p>
    <div className="mb-8 text-riad-charcoal-dark/90 font-semibold text-center">
      <span className="font-bold text-riad-teal-accent">Notre valeur :</span> {value}
    </div>
    <Button className="w-full bg-riad-orange-primary text-white hover:bg-riad-orange-dark transition-colors rounded-full py-3">
      {buttonText}
    </Button>
  </div>
);

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-md text-left border-l-4 border-riad-teal-accent">
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-full bg-riad-beige-light mr-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold text-riad-charcoal-dark">{title}</h3>
    </div>
    <p className="text-riad-charcoal-dark/80 font-sans">{description}</p>
  </div>
);

export default OurOffersPage;
