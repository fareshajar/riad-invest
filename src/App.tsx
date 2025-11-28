import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import OurMethodPage from './pages/OurMethodPage';
import OurOffersPage from './pages/OurOffersPage';
import ClientSpacePage from './pages/ClientSpacePage';
import ClientDashboardPage from './pages/ClientDashboardPage';
import ExampleInvestmentPage from './pages/ExampleInvestmentPage';
import FAQPage from './pages/FAQPage';
import AuthPage from './pages/AuthPage';
import { useAuth } from './hooks/useAuth';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-riad-charcoal-dark text-xl">
        Chargement...
      </div>
    );
  }

  return session ? children : <Navigate to="/auth" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="method" element={<OurMethodPage />} />
          <Route path="offers" element={<OurOffersPage />} />
          <Route path="client-space" element={<ClientSpacePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route
            path="client-space/dashboard"
            element={
              <PrivateRoute>
                <ClientDashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="investment-example" element={<ExampleInvestmentPage />} />
          <Route path="faq" element={<FAQPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
