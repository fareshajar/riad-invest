import { type LucideIcon } from 'lucide-react';
import { LayoutDashboard, Camera, DollarSign, Folder, CalendarDays, Quote, UserCheck, Eye, MessageSquare, TrendingUp, FileText, BellRing, Download, CheckCircle, Clock } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  status: 'En cours' | 'Terminé' | 'En attente';
  progress: number; // 0-100
  startDate: string;
  endDate: string;
  location: string;
  projectManager: string; // New field
  kpis: {
    budgetSpent: number;
    budgetTotal: number;
    roiProjection: number;
    occupancyRate: number;
  };
  timeline: {
    date: string;
    event: string;
    description: string;
    type: 'milestone' | 'task' | 'delivery'; // New field for timeline event type
  }[];
  activityLog: { // New field for recent activities
    id: string;
    type: 'document_upload' | 'comment' | 'status_update' | 'meeting';
    description: string;
    date: string;
    icon: LucideIcon;
  }[];
}

export interface Document {
  id: string;
  name: string;
  type: 'Contrat' | 'Facture' | 'Plan' | 'Rapport' | 'Photo' | 'Vidéo';
  date: string;
  url: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'urgent';
  date: string;
  read: boolean;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  action: () => void;
}

export const mockProjects: Project[] = [
  {
    id: 'proj-001',
    name: 'Riad Al-Amal',
    status: 'En cours',
    progress: 75,
    startDate: '2023-01-15',
    endDate: '2024-06-30',
    location: 'Marrakech, Médina',
    projectManager: 'Fatima Zahra', // Added
    kpis: {
      budgetSpent: 180000,
      budgetTotal: 240000,
      roiProjection: 12, // %
      occupancyRate: 85, // %
    },
    timeline: [
      { date: '2023-01-15', event: 'Acquisition du bien', description: 'Signature de l\'acte de vente.', type: 'milestone' },
      { date: '2023-03-01', event: 'Début des travaux', description: 'Démolition et gros œuvre.', type: 'milestone' },
      { date: '2023-07-20', event: 'Second œuvre', description: 'Installation électrique et plomberie.', type: 'task' },
      { date: '2024-01-10', event: 'Finitions', description: 'Peinture, décoration, ameublement.', type: 'task' },
      { date: '2024-06-30', event: 'Livraison Finale', description: 'Remise des clés et mise en service.', type: 'delivery' },
    ],
    activityLog: [ // Added
      { id: 'act-001', type: 'document_upload', description: 'Nouveau rapport d\'avancement (Q1 2024) téléchargé.', date: '2024-03-15', icon: FileText },
      { id: 'act-002', type: 'comment', description: 'Commentaire de l\'architecte sur les choix de carrelage.', date: '2024-03-12', icon: MessageSquare },
      { id: 'act-003', type: 'status_update', description: 'Statut "Finitions" mis à jour à 75%.', date: '2024-03-10', icon: CheckCircle },
      { id: 'act-004', type: 'meeting', description: 'Réunion de suivi hebdomadaire avec l\'équipe.', date: '2024-03-08', icon: CalendarDays },
    ],
  },
  {
    id: 'proj-002',
    name: 'Villa Oasis',
    status: 'Terminé',
    progress: 100,
    startDate: '2022-05-01',
    endDate: '2023-03-10',
    location: 'Essaouira, Bord de mer',
    projectManager: 'Ahmed El Fassi', // Added
    kpis: {
      budgetSpent: 350000,
      budgetTotal: 350000,
      roiProjection: 15,
      occupancyRate: 92,
    },
    timeline: [
      { date: '2022-05-01', event: 'Acquisition', description: 'Achat de la villa.', type: 'milestone' },
      { date: '2022-06-15', event: 'Rénovation', description: 'Modernisation complète.', type: 'task' },
      { date: '2023-03-10', event: 'Livraison', description: 'Mise en location.', type: 'delivery' },
    ],
    activityLog: [ // Added
      { id: 'act-005', type: 'document_upload', description: 'Contrat de location signé pour la saison estivale.', date: '2023-04-01', icon: FileText },
      { id: 'act-006', type: 'status_update', description: 'Projet marqué comme "Terminé".', date: '2023-03-10', icon: CheckCircle },
    ],
  },
  {
    id: 'proj-003',
    name: 'Appartement Jardin Secret',
    status: 'En attente',
    progress: 10,
    startDate: '2024-03-01',
    endDate: '2025-03-01',
    location: 'Fès, Ville Nouvelle',
    projectManager: 'Sara Benani', // Added
    kpis: {
      budgetSpent: 15000,
      budgetTotal: 120000,
      roiProjection: 10,
      occupancyRate: 0,
    },
    timeline: [
      { date: '2024-03-01', event: 'Acquisition', description: 'Signature du compromis de vente.', type: 'milestone' },
      { date: '2024-04-15', event: 'Planification travaux', description: 'Élaboration des plans d\'aménagement.', type: 'task' },
    ],
    activityLog: [ // Added
      { id: 'act-007', type: 'document_upload', description: 'Compromis de vente téléchargé.', date: '2024-03-05', icon: FileText },
      { id: 'act-008', type: 'status_update', description: 'Projet mis en "En attente".', date: '2024-03-01', icon: Clock },
    ],
  },
];

export const mockDocuments: Document[] = [
  { id: 'doc-001', name: 'Contrat de Vente Riad Al-Amal', type: 'Contrat', date: '2023-01-10', url: '#' },
  { id: 'doc-002', name: 'Facture Gros Œuvre Riad Al-Amal', type: 'Facture', date: '2023-04-05', url: '#' },
  { id: 'doc-003', name: 'Plans 3D Riad Al-Amal', type: 'Plan', date: '2023-02-20', url: '#' },
  { id: 'doc-004', name: 'Rapport d\'Avancement S2 2023', type: 'Rapport', date: '2023-07-15', url: '#' },
  { id: 'doc-005', name: 'Photos Chantier Riad Al-Amal (Jan 2024)', type: 'Photo', date: '2024-01-25', url: '#' },
  { id: 'doc-006', name: 'Contrat de Location Villa Oasis', type: 'Contrat', date: '2023-03-20', url: '#' },
  { id: 'doc-007', name: 'Facture Ameublement Villa Oasis', type: 'Facture', date: '2023-02-01', url: '#' },
  { id: 'doc-008', name: 'Compromis de Vente Appartement Jardin Secret', type: 'Contrat', date: '2024-03-05', url: '#' },
];

export const mockNotifications: Notification[] = [
  { id: 'notif-001', message: 'Nouvelles photos du chantier Riad Al-Amal disponibles !', type: 'info', date: '2024-02-10', read: false },
  { id: 'notif-002', message: 'Rapport financier Q4 2023 pour Villa Oasis publié.', type: 'success', date: '2024-01-20', read: true },
  { id: 'notif-003', message: 'Action requise : Valider le devis pour les finitions du Riad Al-Amal.', type: 'urgent', date: '2024-02-05', read: false },
  { id: 'notif-004', message: 'Votre projet Appartement Jardin Secret est en attente de démarrage.', type: 'warning', date: '2024-03-01', read: false },
  { id: 'notif-005', message: 'Mise à jour des conditions générales de service.', type: 'info', date: '2024-01-01', read: true },
];

export const mockQuickActions: QuickAction[] = [
  { id: 'qa-001', label: 'Télécharger Contrat', icon: Download, action: () => alert('Télécharger Contrat') },
  { id: 'qa-002', label: 'Commenter Avancement', icon: MessageSquare, action: () => alert('Commenter Avancement') },
  { id: 'qa-003', label: 'Valider Devis', icon: CheckCircle, action: () => alert('Valider Devis') },
];
