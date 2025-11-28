import { Link } from 'react-router-dom';
import { Building, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-riad-charcoal-dark text-riad-beige-light py-12 px-6 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-serif font-bold text-riad-orange-primary">
            <Building className="h-8 w-8 text-riad-orange-primary" />
            <span>Riad Invest</span>
          </Link>
          <p className="text-sm">
            Votre partenaire de confiance pour l'investissement immobilier à Marrakech.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-riad-orange-primary transition-colors">Accueil</Link></li>
            <li><Link to="/method" className="hover:text-riad-orange-primary transition-colors">Notre Méthode</Link></li>
            <li><Link to="/offers" className="hover:text-riad-orange-primary transition-colors">Nos Offres</Link></li>
            <li><Link to="/client-space" className="hover:text-riad-orange-primary transition-colors">Espace Client</Link></li>
            <li><Link to="/investment-example" className="hover:text-riad-orange-primary transition-colors">Exemple Invest.</Link></li>
            <li><Link to="/faq" className="hover:text-riad-orange-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-riad-orange-primary" />
              <span>contact@riadinvest.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-riad-orange-primary" />
              <span>+212 6 XX XX XX XX</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-riad-orange-primary" />
              <span>Marrakech, Maroc</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Suivez-nous</h3>
          <div className="flex space-x-4">
            {/* Placeholder for social media icons */}
            <a href="#" className="text-riad-beige-light hover:text-riad-orange-primary transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-riad-beige-light hover:text-riad-orange-primary transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.007-.532A8.318 8.318 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 014 9.74c-.095 0-.187.007-.28.015a4.102 4.102 0 003.292 4.022 4.095 4.095 0 01-1.844.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-riad-beige-dark mt-8 pt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} Riad Invest. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
