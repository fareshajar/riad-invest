import { LayoutDashboard, Camera, DollarSign, Folder, CalendarDays, Quote, UserCheck, Eye, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Import Link

const ClientSpacePage = () => {
  const testimonial = {
    text: "Grâce à l'espace client, j'ai vu mon riad prendre vie depuis Paris comme si j'y étais. La transparence est totale.",
    author: "Sophie, investisseuse depuis 2022",
  };

  const howItWorksSteps = [
    {
      icon: <UserCheck className="h-10 w-10 text-riad-orange-primary" />,
      title: "Accès Sécurisé",
      description: "Connectez-vous à votre espace personnel avec des identifiants uniques et sécurisés."
    },
    {
      icon: <Eye className="h-10 w-10 text-riad-orange-primary" />,
      title: "Transparence Totale",
      description: "Visualisez l'avancement, les finances et les documents de votre projet en temps réel."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-riad-orange-primary" />,
      title: "Communication Simplifiée",
      description: "Échangez directement avec notre équipe et recevez des mises à jour régulières."
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section
        className="relative text-center text-white py-32 rounded-3xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, // Pexels image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-riad-teal-accent/80 to-riad-teal-light/80"></div> {/* Overlay */}
        <div className="relative z-10 container mx-auto">
          <h1 className="text-6xl font-serif font-extrabold mb-6 leading-tight">Votre Riad, Sous Contrôle.</h1>
          <p className="text-2xl font-sans max-w-4xl mx-auto mb-10 opacity-90">
            La clé de la confiance est la transparence. Votre Espace Client sécurisé est le centre de commande de votre investissement, où que vous soyez.
          </p>
          <Button asChild className="bg-riad-orange-primary text-white hover:bg-riad-orange-dark transition-all duration-300 ease-in-out rounded-full px-10 py-5 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <Link to="/client-space/dashboard">Accéder à mon Tableau de Bord</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-riad-charcoal-dark">
          Ce que vous y <span className="text-riad-teal-accent">trouvez</span> :
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard
            icon={<LayoutDashboard className="h-10 w-10 text-riad-orange-primary" />}
            title="Tableau de Bord Centralisé"
            description="Une vue d'ensemble de l'avancement et des KPI financiers de votre projet."
          />
          <FeatureCard
            icon={<Camera className="h-10 w-10 text-riad-orange-primary" />}
            title="Journal de Bord Visuel"
            description="Photos et vidéos HD du chantier, mis à jour chaque semaine pour un suivi immersif."
          />
          <FeatureCard
            icon={<DollarSign className="h-10 w-10 text-riad-orange-primary" />}
            title="Suivi Financier Transparent"
            description="Dépenses (acquisition, travaux) et revenus (location) en temps réel, sans surprise."
          />
          <FeatureCard
            icon={<Folder className="h-10 w-10 text-riad-orange-primary" />}
            title="Coffre-fort Digital"
            description="Tous vos documents juridiques, contrats et factures en un seul endroit sécurisé et accessible."
          />
          <FeatureCard
            icon={<CalendarDays className="h-10 w-10 text-riad-orange-primary" />}
            title="Calendrier Interactif"
            description="Suivi détaillé des réservations et de la performance locative de votre bien."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-riad-orange-primary" />}
            title="Communication Directe"
            description="Un canal privilégié pour échanger avec notre équipe et obtenir des réponses rapides."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto py-16 bg-riad-beige-light rounded-3xl shadow-inner">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-riad-charcoal-dark">
          Comment ça <span className="text-riad-orange-primary">marche</span> ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="p-5 rounded-full bg-white shadow-md mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-serif font-semibold mb-3 text-riad-charcoal-dark">
                {step.title}
              </h3>
              <p className="text-lg text-riad-charcoal-dark/80 font-sans max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="container mx-auto text-center bg-gradient-to-r from-riad-orange-primary to-riad-orange-dark text-white py-20 rounded-3xl shadow-xl">
        <Quote className="h-16 w-16 text-white mx-auto mb-8 opacity-90" />
        <blockquote className="text-3xl italic font-serif max-w-4xl mx-auto leading-relaxed">
          "{testimonial.text}"
        </blockquote>
        <p className="text-xl font-sans font-semibold mt-8 opacity-90">
          - {testimonial.author}
        </p>
      </section>

      {/* Support Section */}
      <section className="container mx-auto text-center py-12">
        <h2 className="text-5xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Besoin d'aide <span className="text-riad-teal-accent">?</span>
        </h2>
        <p className="text-xl font-sans max-w-3xl mx-auto mb-10 text-riad-charcoal-dark/80">
          Notre équipe dédiée est à votre entière disposition pour répondre à toutes vos questions et vous offrir une assistance personnalisée.
        </p>
        <Button className="bg-riad-teal-accent text-white hover:bg-riad-teal-dark transition-all duration-300 ease-in-out rounded-full px-10 py-5 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Contacter le Support
        </Button>
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
  <Card className="p-8 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
    <CardHeader className="flex flex-col items-center justify-center pb-6">
      <div className="p-4 rounded-full bg-riad-beige-light mb-5 shadow-inner">
        {icon}
      </div>
      <CardTitle className="text-2xl font-serif font-semibold text-riad-charcoal-dark">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="text-riad-charcoal-dark/80 font-sans text-lg">
      {description}
    </CardContent>
  </Card>
);

export default ClientSpacePage;
