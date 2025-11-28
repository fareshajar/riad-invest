import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input'; // Import Input for search
import {
  LayoutDashboard,
  TrendingUp,
  DollarSign,
  Percent,
  MapPin,
  CalendarDays,
  FileText,
  Download,
  BellRing,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  Clock,
  User, // Added for project manager
  AlertTriangle, // For warning notifications
  Info, // For info notifications
  Check,
  X,
} from 'lucide-react';
import { mockProjects, mockDocuments, mockNotifications, mockQuickActions, Project, Document, Notification } from '@/data/mockData';

const ClientDashboardPage = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(mockProjects[0]?.id || '');
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [documentSearchTerm, setDocumentSearchTerm] = useState<string>('');

  const selectedProject = mockProjects.find(p => p.id === selectedProjectId);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'En cours': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Terminé': return 'bg-green-100 text-green-800 border-green-200';
      case 'En attente': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getNotificationColor = (type: Notification['type']) => {
    switch (type) {
      case 'info': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'warning': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'success': return 'bg-green-50 text-green-700 border-green-200';
      case 'urgent': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'info': return <Info className="h-6 w-6 text-blue-600" />;
      case 'warning': return <AlertTriangle className="h-6 w-6 text-yellow-600" />;
      case 'success': return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'urgent': return <BellRing className="h-6 w-6 text-red-600" />;
      default: return <BellRing className="h-6 w-6 text-gray-600" />;
    }
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  const filteredDocuments = mockDocuments.filter(doc =>
    doc.name.toLowerCase().includes(documentSearchTerm.toLowerCase()) && doc.name.includes(selectedProject?.name || '')
  );

  if (!selectedProject) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-serif font-bold text-riad-charcoal-dark mb-4">Aucun projet sélectionné</h1>
        <p className="text-lg text-riad-charcoal-dark/80">Veuillez sélectionner un projet pour afficher le tableau de bord.</p>
      </div>
    );
  }

  const nextMilestone = selectedProject.timeline.find(item => new Date(item.date) > new Date());
  const daysRemaining = Math.ceil((new Date(selectedProject.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-12 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <h1 className="text-5xl font-serif font-extrabold text-riad-charcoal-dark">
          Espace Client <span className="text-riad-orange-primary">Dashboard</span>
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold text-riad-charcoal-dark">Mon Projet:</span>
          <Select value={selectedProjectId} onValueChange={setSelectedProjectId}>
            <SelectTrigger className="w-[250px] bg-white border-riad-beige-dark text-riad-charcoal-dark">
              <SelectValue placeholder="Sélectionner un projet" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {mockProjects.map(project => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Project Overview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card
          className="lg:col-span-2 p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white relative overflow-hidden"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, // Pexels image for project overview
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div> {/* Semi-transparent overlay */}
          <div className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-3xl font-serif font-bold text-riad-charcoal-dark">
                {selectedProject.name}
              </CardTitle>
              <Badge className={`text-sm font-semibold px-3 py-1 rounded-full border ${getStatusColor(selectedProject.status)}`}>
                {selectedProject.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4 text-riad-charcoal-dark/80">
              <p className="flex items-center gap-2 text-lg">
                <MapPin className="h-5 w-5 text-riad-orange-primary" />
                <span>{selectedProject.location}</span>
              </p>
              <p className="flex items-center gap-2 text-lg">
                <User className="h-5 w-5 text-riad-orange-primary" />
                <span>Chef de projet: {selectedProject.projectManager}</span>
              </p>
              <div className="flex items-center gap-4 text-lg">
                <CalendarDays className="h-5 w-5 text-riad-orange-primary" />
                <span>Début: {selectedProject.startDate}</span>
                <span>Fin prévue: {selectedProject.endDate}</span>
              </div>
              {nextMilestone && (
                <div className="flex items-center gap-2 text-lg text-riad-charcoal-dark">
                  <Clock className="h-5 w-5 text-riad-teal-accent" />
                  <span>Prochaine étape: <b className="font-semibold">{nextMilestone.event}</b> ({nextMilestone.date})</span>
                </div>
              )}
              <div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-riad-charcoal-dark">Avancement</h3>
                <Progress value={selectedProject.progress} className="h-3 bg-riad-beige-light" indicatorClassName="bg-riad-teal-accent" />
                <p className="text-right text-sm mt-1">{selectedProject.progress}% Complété</p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-orange-primary bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            {mockQuickActions.map(action => (
              <Button
                key={action.id}
                onClick={action.action}
                className="flex flex-col items-center justify-center h-28 bg-riad-beige-light text-riad-charcoal-dark hover:bg-riad-beige-dark transition-colors rounded-lg shadow-sm"
              >
                <action.icon className="h-8 w-8 mb-2 text-riad-teal-accent" />
                <span className="text-sm font-semibold text-center">{action.label}</span>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Key Performance Indicators (KPIs) */}
      <section>
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Tableau de Bord <span className="text-riad-teal-accent">KPIs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <KPICard
            icon={<DollarSign className="h-8 w-8 text-riad-orange-primary" />}
            title="Budget Dépensé"
            value={`${selectedProject.kpis.budgetSpent.toLocaleString('fr-MA')} MAD`}
            description={`Sur ${selectedProject.kpis.budgetTotal.toLocaleString('fr-MA')} MAD`}
            trend="up"
          />
          <KPICard
            icon={<TrendingUp className="h-8 w-8 text-riad-teal-accent" />}
            title="ROI Projeté"
            value={`${selectedProject.kpis.roiProjection}%`}
            description="Rendement sur investissement annuel"
            trend="up"
          />
          <KPICard
            icon={<Percent className="h-8 w-8 text-riad-orange-primary" />}
            title="Taux d'Occupation"
            value={`${selectedProject.kpis.occupancyRate}%`}
            description="Moyenne annuelle (si applicable)"
            trend="up"
          />
          <KPICard
            icon={<Clock className="h-8 w-8 text-riad-teal-accent" />}
            title="Jours Restants"
            value={daysRemaining > 0 ? daysRemaining.toString() : '0'}
            description="Avant la fin prévue du projet"
            trend="neutral"
          />
        </div>
      </section>

      {/* Comparative Tables & Visualizations */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Project Timeline */}
        <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Chronologie du Projet</CardTitle>
            <CardDescription className="text-riad-charcoal-dark/70">Étapes clés et avancement.</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="relative border-l-2 border-riad-beige-dark ml-4">
              {selectedProject.timeline.map((item, index) => {
                const isCurrent = index === selectedProject.timeline.length - 1 && selectedProject.status === 'En cours';
                const isCompleted = new Date(item.date) < new Date();
                const iconColor = isCompleted ? 'bg-riad-teal-accent' : 'bg-riad-orange-primary';
                const ringColor = isCompleted ? 'ring-riad-teal-light' : 'ring-riad-orange-light';
                const textColor = isCompleted ? 'text-riad-charcoal-dark/70' : 'text-riad-charcoal-dark';

                let eventIcon = <Check className="h-3 w-3 text-white" />;
                if (item.type === 'milestone') eventIcon = <CalendarDays className="h-3 w-3 text-white" />;
                if (item.type === 'task') eventIcon = <Clock className="h-3 w-3 text-white" />;
                if (item.type === 'delivery') eventIcon = <Download className="h-3 w-3 text-white" />;

                return (
                  <li key={index} className="mb-8 ml-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 ${iconColor} rounded-full -left-3 ring-8 ${ringColor}`}>
                      {eventIcon}
                    </span>
                    <h3 className={`flex items-center mb-1 text-lg font-semibold ${textColor}`}>
                      {item.event}
                      {isCurrent && (
                        <Badge className="ml-3 bg-riad-orange-primary text-white">Actuel</Badge>
                      )}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-riad-charcoal-dark/60">
                      {item.date}
                    </time>
                    <p className="text-base font-normal text-riad-charcoal-dark/80">{item.description}</p>
                  </li>
                );
              })}
            </ol>
          </CardContent>
        </Card>

        {/* Visualizations & Graphs */}
        <Card
          className="p-6 rounded-xl shadow-lg border-t-4 border-riad-orange-primary bg-white flex flex-col justify-center items-center text-center relative overflow-hidden"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, // Pexels image for visualizations
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div> {/* Semi-transparent overlay */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Visualisations & Graphes</CardTitle>
              <CardDescription className="text-riad-charcoal-dark/70">Évolution financière, performance locative...</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center items-center">
              <LayoutDashboard className="h-24 w-24 text-riad-beige-dark mb-4" />
              <p className="text-lg text-riad-charcoal-dark/80">
                Les graphiques interactifs (ex: Chiffre d'affaires, Taux d'occupation) seront disponibles ici.
                <br />
                (Intégration future avec des bibliothèques comme Recharts ou Chart.js)
              </p>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Documents and Deliverables */}
      <section>
        <h2 className="text-4xl font-serif font-bold mb-8 text-riad-charcoal-dark">
          Documents & <span className="text-riad-teal-accent">Livrables</span>
        </h2>
        <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Mes Documents</CardTitle>
            <CardDescription className="text-riad-charcoal-dark/70">Accédez à tous les fichiers importants liés à votre projet.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Input
                placeholder="Rechercher un document..."
                value={documentSearchTerm}
                onChange={(e) => setDocumentSearchTerm(e.target.value)}
                className="w-full md:w-1/2 bg-riad-beige-light border-riad-beige-dark text-riad-charcoal-dark"
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[150px]">Type</TableHead>
                  <TableHead>Nom du Document</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map(doc => (
                    <TableRow key={doc.id}>
                      <TableCell className="font-medium">
                        <Badge variant="outline" className="bg-riad-beige-light text-riad-charcoal-dark border-riad-beige-dark">
                          {doc.type}
                        </Badge>
                      </TableCell>
                      <TableCell>{doc.name}</TableCell>
                      <TableCell className="text-right">{doc.date}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={doc.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-end gap-1 text-riad-teal-accent hover:text-riad-teal-dark">
                            <Download className="h-4 w-4" /> Télécharger
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-riad-charcoal-dark/70 py-8">
                      Aucun document trouvé pour votre recherche.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity & Important Notifications */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-orange-primary bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Activité Récente</CardTitle>
            <CardDescription className="text-riad-charcoal-dark/70">Les dernières mises à jour de votre projet.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {selectedProject.activityLog.map(activity => (
                <li key={activity.id} className="flex items-start gap-3 p-3 bg-riad-beige-light rounded-lg shadow-sm">
                  <div className="p-2 rounded-full bg-white shadow-sm">
                    <activity.icon className="h-5 w-5 text-riad-teal-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-riad-charcoal-dark">{activity.description}</p>
                    <p className="text-sm text-riad-charcoal-dark/60 mt-1">{activity.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Important Notifications */}
        <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-teal-accent bg-white">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-serif font-bold text-riad-charcoal-dark">Notifications <span className="text-riad-orange-primary">Importantes</span></CardTitle>
            <CardDescription className="text-riad-charcoal-dark/70">Messages et alertes concernant votre projet.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.filter(notif => notif.message.includes(selectedProject.name) || notif.type === 'urgent').map(notif => (
                <div key={notif.id} className={`flex items-start gap-4 p-4 rounded-xl shadow-sm border ${getNotificationColor(notif.type)} ${notif.read ? 'opacity-70' : ''}`}>
                  {getNotificationIcon(notif.type)}
                  <div className="flex-grow">
                    <p className={`font-semibold ${notif.read ? 'text-riad-charcoal-dark/70' : 'text-riad-charcoal-dark'}`}>
                      {notif.message}
                    </p>
                    <p className="text-sm text-riad-charcoal-dark/60 mt-1">{notif.date}</p>
                  </div>
                  {!notif.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMarkAsRead(notif.id)}
                      className="ml-auto text-riad-orange-primary hover:text-riad-orange-dark"
                    >
                      Marquer comme lu
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

interface KPICardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
}

const KPICard = ({ icon, title, value, description, trend }: KPICardProps) => (
  <Card className="p-6 rounded-xl shadow-lg border-t-4 border-riad-beige-dark bg-white">
    <CardHeader className="flex flex-row items-center justify-between pb-4">
      {icon}
      <Badge className={`text-xs font-medium px-2 py-1 rounded-full border ${trend === 'up' ? 'bg-green-100 text-green-800 border-green-200' : trend === 'down' ? 'bg-red-100 text-red-800 border-red-200' : 'bg-gray-100 text-gray-800 border-gray-200'}`}>
        {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '—'}
      </Badge>
    </CardHeader>
    <CardContent className="space-y-1">
      <CardTitle className="text-3xl font-serif font-bold text-riad-charcoal-dark">{value}</CardTitle>
      <CardDescription className="text-riad-charcoal-dark/70">{title}</CardDescription>
      <p className="text-sm text-riad-charcoal-dark/60">{description}</p>
    </CardContent>
  </Card>
);

export default ClientDashboardPage;
