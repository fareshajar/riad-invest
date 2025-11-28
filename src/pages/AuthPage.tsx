import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle } from 'lucide-react';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { data, error } = await signIn(email, password);

    if (error) {
      setError(error.message);
    } else if (data.user) {
      navigate('/client-space/dashboard');
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-riad-beige-light py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8 rounded-xl shadow-2xl border-t-8 border-riad-orange-primary bg-white">
        <CardHeader className="text-center mb-8">
          <CardTitle className="text-4xl font-serif font-extrabold text-riad-charcoal-dark mb-3">
            Bienvenue Client
          </CardTitle>
          <CardDescription className="text-lg text-riad-charcoal-dark/70">
            Connectez-vous à votre espace personnel sécurisé.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-riad-charcoal-dark text-base font-semibold mb-2 block">
                Adresse Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="votre.email@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-riad-beige-dark focus:ring-2 focus:ring-riad-teal-accent focus:border-transparent transition-all duration-200 text-riad-charcoal-dark bg-riad-beige-light"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-riad-charcoal-dark text-base font-semibold mb-2 block">
                Mot de Passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-riad-beige-dark focus:ring-2 focus:ring-riad-teal-accent focus:border-transparent transition-all duration-200 text-riad-charcoal-dark bg-riad-beige-light"
              />
            </div>
            {error && (
              <Alert variant="destructive" className="bg-red-50 border-red-200 text-red-700">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Erreur de connexion</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full bg-riad-teal-accent text-white hover:bg-riad-teal-dark transition-all duration-300 ease-in-out rounded-lg px-6 py-3 text-lg font-semibold shadow-md hover:shadow-lg flex items-center justify-center"
              disabled={loading}
            >
              {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
              Se Connecter
            </Button>
          </form>
          <p className="mt-8 text-center text-riad-charcoal-dark/70 text-sm">
            Mot de passe oublié ? <a href="#" className="text-riad-orange-primary hover:underline font-medium">Réinitialiser</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthPage;
