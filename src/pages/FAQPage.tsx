import { HelpCircle, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  const faqs = [
    {
      category: "La confiance à distance",
      questions: [
        {
          question: "Comment puis-je avoir confiance dans la qualité des travaux sans être sur place ?",
          answer: "C'est tout l'objet de notre Espace Client. Outre les photos et vidéos hebdomadaires, nous réalisons des points vidéo mensuels sur site et fournissons des certificats de conformité pour toutes les installations (électricité, plomberie). La réception des travaux est une étape formalisée."
        },
        {
          question: "Comment êtes-vous rémunérés ? Y a-t-il des conflits d'intérêts ?",
          answer: "Notre modèle est transparent. Une partie de notre rémunération est fixe (pilotage de projet), l'autre est liée à la performance (pourcentage sur les économies de négociation et sur les revenus de gestion). Nos intérêts sont donc alignés sur les vôtres : acheter au meilleur prix et maximiser vos revenus."
        },
      ]
    },
    {
      category: "Budget & Investissement",
      questions: [
        {
          question: "Quel est le budget minimum pour un projet sérieux ?",
          answer: "Pour un projet clé en main de rénovation abouti, il faut compter un budget global minimum de 250 000 €. Pour une création neuve, le budget démarre plutôt autour de 400 000 €. Nous proposons un audit préalable gratuit pour tout projet."
        },
        {
          question: "Les rendements annoncés sont-ils garantis ?",
          answer: "Non, aucun rendement n'est garanti. Les chiffres présentés sont des projections basées sur notre expérience du marché. Ils dépendent de la conjoncture économique et touristique. Nous nous engageons en revanche sur la rigueur de notre gestion et l'optimisation de chaque levier pour les atteindre."
        },
      ]
    },
    {
      category: "Gestion & Au Quotidien",
      questions: [
        {
          question: "Qui gère les problèmes sur place (ex : un problème de climatisation à 22h un samedi) ?",
          answer: "Notre équipe locale, disponible 7j/7, dispose d'un réseau d'artisans de confiance pour intervenir en moins de 2 heures en cas d'urgence. Les voyageurs et vous-même êtes informés de la résolution du problème."
        },
      ]
    },
  ];

  return (
    <div className="space-y-16 py-12">
      <section className="text-center bg-gradient-to-br from-riad-teal-accent to-riad-teal-light text-white py-24 rounded-3xl shadow-xl">
        <h1 className="text-5xl font-serif font-extrabold mb-4">Questions Fréquentes (FAQ)</h1>
        <p className="text-xl font-sans max-w-3xl mx-auto">
          Trouvez les réponses à vos interrogations sur l'investissement en riad à Marrakech.
        </p>
      </section>

      <section className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-riad-charcoal-dark">
          Vos Questions, Nos Réponses
        </h2>
        {faqs.map((category, catIndex) => (
          <div key={`category-${catIndex}`} className="mb-8">
            <h3 className="text-3xl font-serif font-bold text-riad-orange-primary mb-6 flex items-center">
              <HelpCircle className="mr-3 h-8 w-8 text-riad-orange-primary" />
              {category.category}
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {category.questions.map((faq, index) => (
                <AccordionItem key={`item-${catIndex}-${index}`} value={`item-${catIndex}-${index}`} className="border-b border-riad-beige-dark">
                  <AccordionTrigger className="flex justify-between items-center py-4 text-left text-xl font-serif font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 text-riad-charcoal-dark/80 font-sans leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </section>

      <section className="container mx-auto text-center bg-riad-beige-light py-20 rounded-3xl">
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Vous n'avez pas trouvé votre réponse ?
        </h2>
        <p className="text-xl font-sans max-w-2xl mx-auto mb-8 text-riad-charcoal-dark/80">
          N'hésitez pas à nous contacter directement, notre équipe est là pour vous aider.
        </p>
        <Button className="bg-riad-orange-primary text-white hover:bg-riad-orange-dark transition-colors rounded-full px-8 py-4 text-lg">
          Contacter Riad Invest
        </Button>
      </section>
    </div>
  );
};

export default FAQPage;
