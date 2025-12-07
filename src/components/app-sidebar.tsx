'use client';

import * as React from 'react';
import {
  SquareTerminal,
  FileText,
  UserCircle,
  MessageSquare,
  ListChecks,
  AlertTriangle,
  Hourglass,
  Briefcase,
  Mail,
  Video,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

export const sidebarNavData = {
  navMain: [
    {
      title: 'Créer son compte eCampus France',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        { id: 'prerequis-compte', title: 'Prérequis', url: '#' },
        {
          id: 'infos-personnelles',
          title: 'Informations personnelles',
          url: '#',
        },
        { id: 'activation-compte', title: 'Activation du compte', url: '#' },
      ],
    },
    {
      title: 'Remplir son dossier',
      url: '#',
      icon: FileText,
      items: [
        { id: 'etat-civil', title: 'Etat civil', url: '#' },
        { id: 'parcours-academique', title: 'Parcours académique', url: '#' },
        { id: 'documents-dossier', title: 'Documents à fournir', url: '#' },
      ],
    },
    {
      title: 'Faire son CV Campus France',
      url: '#',
      icon: UserCircle,
      items: [
        { id: 'cv-structure', title: 'Structure du CV', url: '#' },
        { id: 'cv-competences', title: 'Compétences', url: '#' },
        { id: 'cv-experiences', title: 'Expériences', url: '#' },
      ],
    },
    {
      title: 'Préparer l’entretien',
      url: '#',
      icon: MessageSquare,
      items: [
        { id: 'entretien-questions', title: 'Questions fréquentes', url: '#' },
        { id: 'entretien-pieges', title: 'Pièges à éviter', url: '#' },
        { id: 'entretien-conseils', title: 'Conseils pratiques', url: '#' },
      ],
    },
    {
      title: 'Choisir ses formations',
      url: '#',
      icon: ListChecks,
      items: [
        {
          id: 'formations-filtrer',
          title: 'Comment filtrer les formations',
          url: '#',
        },
        { id: 'formations-types', title: 'Licence / Master / BTS', url: '#' },
        {
          id: 'formations-selection',
          title: 'Sélection intelligente',
          url: '#',
        },
      ],
    },
    {
      title: 'Éviter les erreurs',
      url: '#',
      icon: AlertTriangle,
      items: [
        { id: 'erreurs-courantes', title: 'Erreurs courantes', url: '#' },
        {
          id: 'erreurs-documents',
          title: 'Documents non conformes',
          url: '#',
        },
      ],
    },
    {
      title: 'Suivre l’avancement du dossier',
      url: '#',
      icon: Hourglass,
      items: [
        { id: 'dossier-etapes', title: 'Étapes du processus', url: '#' },
        {
          id: 'dossier-statuts',
          title: 'Comprendre chaque statut',
          url: '#',
        },
      ],
    },
    {
      title: 'Préparer le dépôt au consulat',
      url: '#',
      icon: Briefcase,
      items: [
        {
          id: 'consulat-documents',
          title: 'Documents obligatoires',
          url: '#',
        },
        {
          id: 'consulat-rdv',
          title: 'Jour du rendez-vous',
          url: '#',
        },
      ],
    },
    {
      title: 'Modèles de mails',
      url: '#',
      icon: Mail,
      items: [
        {
          id: 'mail-universite',
          title: 'Mail pour une université',
          url: '#',
        },
        { id: 'mail-campus-france', title: 'Mail pour Campus France', url: '#' },
        { id: 'mail-consulat', title: 'Mail pour le consulat', url: '#' },
      ],
    },
    {
      title: 'Tutoriels vidéo',
      url: '#',
      icon: Video,
      items: [
        {
          id: 'video-dossier',
          title: 'Tutoriel création de dossier',
          url: '#',
        },
        { id: 'video-entretien', title: 'Tutoriel entretien', url: '#' },
      ],
    },
  ],
  projects: [],
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  activeItemId?: string;
  onItemSelect?: (id: string) => void;
};

export function AppSidebar({
  activeItemId,
  onItemSelect,
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarContent>
        <NavMain
          items={sidebarNavData.navMain}
          activeItemId={activeItemId}
          onItemSelect={onItemSelect}
        />
        {/* NavProjects disabled for now */}
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
