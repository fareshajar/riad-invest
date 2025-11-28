import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth'; // Import the auth hook

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { session, signOut } = useAuth(); // Use the auth hook

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    // Optionally redirect to home or auth page after logout
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-extrabold text-riad-charcoal-dark">
          Riad<span className="text-riad-orange-primary">Invest</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <NavLink to="/" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
            Accueil
          </NavLink>
          <NavLink to="/method" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
            Notre Méthode
          </NavLink>
          <NavLink to="/offers" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
            Nos Offres
          </NavLink>
          <NavLink to="/investment-example" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
            Exemple d'Investissement
          </NavLink>
          <NavLink to="/faq" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
            FAQ
          </NavLink>
          {session ? (
            <>
              <NavLink to="/client-space/dashboard" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300 flex items-center gap-2">
                <User className="h-5 w-5" /> Mon Espace
              </NavLink>
              <Button onClick={handleSignOut} variant="ghost" className="text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300 flex items-center gap-2">
                <LogOut className="h-5 w-5" /> Déconnexion
              </Button>
            </>
          ) : (
            <NavLink to="/auth" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300">
              Espace Client
            </NavLink>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink to="/" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
              Accueil
            </NavLink>
            <NavLink to="/method" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
              Notre Méthode
            </NavLink>
            <NavLink to="/offers" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
              Nos Offres
            </NavLink>
            <NavLink to="/investment-example" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
              Exemple d'Investissement
            </NavLink>
            <NavLink to="/faq" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
              FAQ
            </NavLink>
            {session ? (
              <>
                <NavLink to="/client-space/dashboard" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300 flex items-center gap-2" onClick={toggleMobileMenu}>
                  <User className="h-5 w-5" /> Mon Espace
                </NavLink>
                <Button onClick={() => { handleSignOut(); toggleMobileMenu(); }} variant="ghost" className="text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300 flex items-center gap-2">
                  <LogOut className="h-5 w-5" /> Déconnexion
                </Button>
              </>
            ) : (
              <NavLink to="/auth" className="text-lg font-semibold text-riad-charcoal-dark hover:text-riad-orange-primary transition-colors duration-300" onClick={toggleMobileMenu}>
                Espace Client
              </NavLink>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
