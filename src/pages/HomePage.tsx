import { Button } from '@/components/ui/button';
import { Landmark, Wallet, TrendingUp as TrendingUpIcon, ShieldCheck, Eye, DollarSign, MapPin, Hammer, BarChart, Target } from 'lucide-react'; // Removed unused icons

const HomePage = () => {
  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-riad-orange-primary to-riad-orange-dark text-white py-32 px-6 rounded-3xl shadow-xl overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl font-serif font-extrabold mb-6 leading-tight">
            Votre Riad à Marrakech, de la Conception aux Revenus.
          </h1>
          <p className="text-2xl font-sans max-w-4xl mx-auto mb-10 opacity-90">
            Votre partenaire clé en main pour investir, construire ou rénover, et générer des revenus. Nous agissons, vous pilotez à distance, en toute transparence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-lg mx-auto"> {/* Added w-full max-w-lg mx-auto for better mobile centering */}
            <Button className="w-full sm:w-auto bg-riad-teal-accent text-white hover:bg-riad-teal-dark transition-colors rounded-full px-6 py-4 text-lg sm:px-10 sm:py-6 sm:text-xl font-semibold shadow-lg">
              📅 Échangeons sur votre projet
            </Button>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-riad-orange-primary transition-colors rounded-full px-6 py-4 text-lg sm:px-10 sm:py-6 sm:text-xl font-semibold shadow-lg">
              📘 Télécharger notre Guide de l'Investisseur
            </Button>
          </div>
        </div>
        {/* Optional: Add a subtle background pattern or image for Marrakech vibe */}
      </section>

      {/* Pourquoi un Riad ? */}
      <section className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark">
          Le Riad, un Actif à Part Entière.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Landmark className="h-12 w-12 text-riad-orange-primary" />}
            title="Patrimoine & Émotion"
            description="Plus qu'un investissement, un bien de caractère ancré dans l'histoire de médinas prestigieuses."
          />
          <FeatureCard
            icon={<Wallet className="h-12 w-12 text-riad-orange-primary" />}
            title="Rendement Résilient"
            description="Une demande touristique internationale et constante, générant des revenus locatifs attractifs."
          />
          <FeatureCard
            icon={<TrendingUpIcon className="h-12 w-12 text-riad-orange-primary" />}
            title="Plus-Value Structurelle"
            description="La rénovation et une gestion professionnelle transforment le potentiel en valeur patrimoniale tangible."
          />
        </div>
      </section>

      {/* Notre Différence */}
      <section className="bg-riad-beige-light py-20 rounded-3xl">
        <div className="container mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark">
            L'Expertise Intégrée qui Fait la Différence.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<ShieldCheck className="h-10 w-10 text-riad-teal-accent" />}
              title="Un Pilote, Votre Projet"
              description="Un chef de projet dédié, votre seul interlocuteur expert de A à Z."
            />
            <BenefitCard
              icon={<ShieldCheck className="h-10 w-10 text-riad-teal-accent" />}
              title="Maîtrise du Processus"
              description="De la sélection du bien (ou du terrain) à la gestion locative, nous maîtrisons toute la chaîne de valeur."
            />
            <BenefitCard
              icon={<Eye className="h-10 w-10 text-riad-teal-accent" />}
              title="Transparence Radicale"
              description="Votre Espace Client unique : suivi en temps réel, documents, finances, photos et reporting."
            />
            <BenefitCard
              icon={<DollarSign className="h-10 w-10 text-riad-teal-accent" />}
              title="Rentabilité Maximisée"
              description="Notre expertise en négociation, travaux et gestion locative est optimisée pour votre rendement."
            />
          </div>
        </div>
      </section>

      {/* Le Parcours Client */}
      <section className="container mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-12 text-riad-charcoal-dark">
          Le Parcours Client
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-riad-beige-dark hidden md:block"></div>

          <ProcessStep
            step="1"
            title="Vision & Stratégie"
            description="Cadrage de votre projet et plan d'investissement."
            icon={<Target className="h-8 w-8 text-riad-orange-primary" />}
            position="left"
          />
          <ProcessStep
            step="2"
            title="Acquisition Sûre"
            description="Recherche, négociation et sécurisation juridique."
            icon={<MapPin className="h-8 w-8 text-riad-teal-accent" />}
            position="right"
          />
          <ProcessStep
            step="3"
            title="Transformation & Style"
            description="Pilotage des travaux et décoration sur-mesure."
            icon={<Hammer className="h-8 w-8 text-riad-orange-primary" />}
            position="left"
          />
          <ProcessStep
            step="4"
            title="Exploitation & Revente"
            description="Gestion locative premium ou accompagnement à la revente."
            icon={<BarChart className="h-8 w-8 text-riad-teal-accent" />}
            position="right"
          />
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-riad-orange-primary text-center">
    <div className="mb-6 flex justify-center">
      <div className="p-4 rounded-full bg-riad-beige-light">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-serif font-semibold mb-3 text-riad-charcoal-dark">{title}</h3>
    <p className="text-riad-charcoal-dark/80 font-sans">{description}</p>
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

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
}

const ProcessStep = ({ step, title, description, icon, position }: ProcessStepProps) => (
  <div className={`relative w-full md:w-1/2 my-8 flex items-center ${position === 'left' ? 'md:pr-20 md:self-start' : 'md:pl-20 md:self-end justify-end'}`}>
    <div className={`absolute hidden md:block w-10 h-10 rounded-full bg-riad-orange-primary border-4 border-white z-10 ${position === 'left' ? 'right-0 -mr-5' : 'left-0 -ml-5'}`}></div>
    <div className="flex-shrink-0 p-3 rounded-full bg-riad-beige-light mr-4 md:hidden">
      {icon}
    </div>
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${position === 'left' ? 'border-riad-orange-primary' : 'border-riad-teal-accent'} w-full`}>
      <div className="flex items-center mb-3">
        <span className="text-2xl font-serif font-bold text-riad-orange-primary mr-3">{step}.</span>
        <h3 className="text-2xl font-serif font-semibold text-riad-charcoal-dark">{title}</h3>
      </div>
      <p className="text-riad-charcoal-dark/80 font-sans">{description}</p>
    </div>
  </div>
);

export default HomePage;
