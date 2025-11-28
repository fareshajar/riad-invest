import { Lightbulb, Target, Hammer, BarChart, ShieldCheck } from 'lucide-react'; // Removed unused Handshake

const OurMethodPage = () => {
  return (
    <div className="space-y-16 py-12">
      <section className="text-center bg-gradient-to-br from-riad-teal-accent to-riad-teal-light text-white py-24 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-serif font-extrabold mb-4">Notre Méthode</h1>
        <p className="text-xl font-sans max-w-3xl mx-auto">
          Investir à distance exige plus qu'un prestataire : un partenaire de confiance. Notre méthode est conçue pour éliminer l'incertitude et garantir que chaque décision, de l'achat à la gestion, sert votre objectif de rendement.
        </p>
      </section>

      <section className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark">
          Les 5 Piliers de Notre Succès
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <MethodCard
            icon={<Lightbulb className="h-12 w-12 text-riad-orange-primary" />}
            title="Stratégie & Alignement"
            description="Nous définissons ensemble votre 'Pourquoi' : recherche de rendement, plus-value à moyen terme, ou usage personnel périodique. Ce cadrage guide chaque décision."
          />
          <MethodCard
            icon={<Target className="h-12 w-12 text-riad-orange-primary" />}
            title="Sourcing & Due Diligence"
            description="Notre réseau local et notre analyse rigoureuse identifient des opportunités exclusives et sûres. Chaque bien est présenté avec une étude de marché, une projection financière et un plan de valorisation."
          />
          <MethodCard
            icon={<ShieldCheck className="h-12 w-12 text-riad-orange-primary" />}
            title="Sécurisation Juridique & Notariale"
            description="Nous sommes votre bouclier. Nos experts vérifient la solvabilité du vendeur, la conformité urbaine et la propriété foncière. Le notaire, indépendant, scelle la transaction en toute sécurité."
          />
          <MethodCard
            icon={<Hammer className="h-12 w-12 text-riad-orange-primary" />}
            title="Transformation Maîtrisée"
            description="Nous réalisons votre vision. Avec des architectes et artisans de confiance, nous pilotons les travaux avec rigueur budgétaire et qualitative. Votre espace client vous donne un accès visuel et financier au chantier, semaine après semaine."
          />
          <MethodCard
            icon={<BarChart className="h-12 w-12 text-riad-orange-primary" />}
            title="Optimisation & Croissance"
            description="L'aboutissement : la performance. Notre équipe de gestion déploie une stratégie marketing agressive, optimise les prix et gère l'équipe sur place pour maximiser votre taux d'occupation et vos revenus."
          />
        </div>
      </section>

      {/* Removed "Notre Processus en Détail" section as it was replaced by "Les 5 Piliers" */}
      {/* <section className="bg-riad-beige-light py-20 rounded-3xl text-center">
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Notre Processus en Détail
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <ProcessStep
            step="1. Définition du Projet"
            description="Analyse de vos attentes, de votre budget et de vos objectifs d'investissement. Création d'un cahier des charges précis."
          />
          <ProcessStep
            step="2. Recherche et Sélection"
            description="Présentation d'une sélection de biens correspondant à vos critères, avec analyse de potentiel et de rentabilité."
          />
          <ProcessStep
            step="3. Acquisition et Formalités"
            description="Accompagnement juridique et administratif complet pour une acquisition sécurisée et sans tracas."
          />
          <ProcessStep
            step="4. Rénovation et Aménagement"
            description="Conception architecturale, suivi des travaux, décoration et ameublement pour un riad clé en main."
          />
          <ProcessStep
            step="5. Mise en Exploitation"
            description="Mise en place de la stratégie de commercialisation et gestion locative pour générer vos premiers revenus."
          />
        </div>
      </section> */}
    </div>
  );
};

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MethodCard = ({ icon, title, description }: MethodCardProps) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-riad-teal-accent text-center">
    <div className="mb-6 flex justify-center">
      <div className="p-4 rounded-full bg-riad-beige-light">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-serif font-semibold mb-3 text-riad-charcoal-dark">{title}</h3>
    <p className="text-riad-charcoal-dark/80 font-sans">{description}</p>
  </div>
);

// Removed unused ProcessStepProps and ProcessStep component
// interface ProcessStepProps {
//   step: string;
//   description: string;
// }

// const ProcessStep = ({ step, description }: ProcessStepProps) => (
//   <div className="bg-white p-6 rounded-lg shadow-md text-left border-l-4 border-riad-orange-primary">
//     <h3 className="text-xl font-serif font-semibold mb-2 text-riad-charcoal-dark">{step}</h3>
//     <p className="text-riad-charcoal-dark/80 font-sans">{description}</p>
//   </div>
// );

export default OurMethodPage;
