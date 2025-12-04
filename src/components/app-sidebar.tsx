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

const data = {
  navMain: [
    {
      title: 'Créer son compte eCampus France',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: 'Prérequis', url: '#' },
        { title: 'Informations personnelles', url: '#' },
        { title: 'Activation du compte', url: '#' },
      ],
    },
    {
      title: 'Remplir son dossier',
      url: '#',
      icon: FileText,
      items: [
        { title: 'Etat civil', url: '#' },
        { title: 'Parcours académique', url: '#' },
        { title: 'Documents à fournir', url: '#' },
      ],
    },
    {
      title: 'Faire son CV Campus France',
      url: '#',
      icon: UserCircle,
      items: [
        { title: 'Structure du CV', url: '#' },
        { title: 'Compétences', url: '#' },
        { title: 'Expériences', url: '#' },
      ],
    },
    {
      title: 'Préparer l’entretien',
      url: '#',
      icon: MessageSquare,
      items: [
        { title: 'Questions fréquentes', url: '#' },
        { title: 'Pièges à éviter', url: '#' },
        { title: 'Conseils pratiques', url: '#' },
      ],
    },
    {
      title: 'Choisir ses formations',
      url: '#',
      icon: ListChecks,
      items: [
        { title: 'Comment filtrer les formations', url: '#' },
        { title: 'Licence / Master / BTS', url: '#' },
        { title: 'Sélection intelligente', url: '#' },
      ],
    },
    {
      title: 'Éviter les erreurs',
      url: '#',
      icon: AlertTriangle,
      items: [
        { title: 'Erreurs courantes', url: '#' },
        { title: 'Documents non conformes', url: '#' },
      ],
    },
    {
      title: 'Suivre l’avancement du dossier',
      url: '#',
      icon: Hourglass,
      items: [
        { title: 'Étapes du processus', url: '#' },
        { title: 'Comprendre chaque statut', url: '#' },
      ],
    },
    {
      title: 'Préparer le dépôt au consulat',
      url: '#',
      icon: Briefcase,
      items: [
        { title: 'Documents obligatoires', url: '#' },
        { title: 'Jour du rendez-vous', url: '#' },
      ],
    },
    {
      title: 'Modèles de mails',
      url: '#',
      icon: Mail,
      items: [
        { title: 'Mail pour une université', url: '#' },
        { title: 'Mail pour Campus France', url: '#' },
        { title: 'Mail pour le consulat', url: '#' },
      ],
    },
    {
      title: 'Tutoriels vidéo',
      url: '#',
      icon: Video,
      items: [
        { title: 'Tutoriel création de dossier', url: '#' },
        { title: 'Tutoriel entretien', url: '#' },
      ],
    },
  ],
  projects: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader />
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* NavProjects disabled for now */}
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
