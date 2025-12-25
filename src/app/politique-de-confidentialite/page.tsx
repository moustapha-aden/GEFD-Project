import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Shield className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Politique de confidentialité
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Introduction */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Le Guide E-Campus France Djibouti (GEFD) s'engage à protéger votre
                  vie privée. Cette politique de confidentialité explique comment
                  nous collectons, utilisons et protégeons vos informations
                  personnelles lorsque vous utilisez notre site web.
                </p>
              </CardContent>
            </Card>

            {/* Data collection */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Données collectées
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Données collectées automatiquement
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Pages visitées et temps passé sur le site</li>
                    <li>Date et heure de visite</li>
                    <li>Référent (site d'origine)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Données fournies volontairement
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Nom et prénom (via le formulaire de contact)</li>
                    <li>Adresse email (via le formulaire de contact)</li>
                    <li>Message (via le formulaire de contact)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Use of data */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Utilisation des données
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>Nous utilisons vos données pour :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Améliorer l'expérience utilisateur du site</li>
                  <li>Répondre à vos demandes de contact</li>
                  <li>Analyser l'utilisation du site (statistiques anonymes)</li>
                  <li>Assurer la sécurité du site</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Cookies et technologies similaires
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Notre site utilise des cookies et des technologies similaires pour :
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Mémoriser vos préférences (thème clair/sombre)</li>
                  <li>Analyser le trafic du site (Google Analytics)</li>
                  <li>Afficher des publicités pertinentes (Google AdSense)</li>
                </ul>
                <p>
                  Vous pouvez désactiver les cookies dans les paramètres de votre
                  navigateur, mais cela peut affecter certaines fonctionnalités du
                  site.
                </p>
              </CardContent>
            </Card>

            {/* Third parties */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Services tiers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>Nous utilisons les services suivants :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-foreground">Google Analytics</strong> : Pour analyser l'utilisation du site
                  </li>
                  <li>
                    <strong className="text-foreground">Google AdSense</strong> : Pour afficher des publicités
                  </li>
                  <li>
                    <strong className="text-foreground">EmailJS</strong> : Pour l'envoi d'emails via le formulaire de
                    contact
                  </li>
                  <li>
                    <strong className="text-foreground">Vercel</strong> : Pour l'hébergement du site
                  </li>
                </ul>
                <p>
                  Ces services peuvent collecter des données conformément à leurs
                  propres politiques de confidentialité.
                </p>
              </CardContent>
            </Card>

            {/* Data security */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Sécurité des données
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Nous mettons en œuvre des mesures de sécurité appropriées pour
                  protéger vos données personnelles contre tout accès non autorisé,
                  modification, divulgation ou destruction.
                </p>
                <p>
                  Cependant, aucune méthode de transmission sur Internet ou de
                  stockage électronique n'est totalement sécurisée. Bien que nous
                  nous efforcions d'utiliser des moyens commercialement acceptables
                  pour protéger vos données, nous ne pouvons garantir leur sécurité
                  absolue.
                </p>
              </CardContent>
            </Card>

            {/* Your rights */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Vos droits
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>Vous avez le droit de :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Accéder à vos données personnelles</li>
                  <li>Demander la correction de vos données</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer au traitement de vos données</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
                <p>
                  Pour exercer ces droits, contactez-nous via le{' '}
                  <a
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    formulaire de contact
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Modifications de cette politique
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Nous nous réservons le droit de modifier cette politique de
                  confidentialité à tout moment. Les modifications seront publiées
                  sur cette page avec une mise à jour de la date de "Dernière mise à
                  jour".
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour
                  rester informé de la façon dont nous protégeons vos informations.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-border bg-muted/30 dark:bg-card/50 border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-xs sm:text-sm">
                <p>
                  Pour toute question concernant cette politique de confidentialité,
                  vous pouvez nous contacter via le{' '}
                  <a
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    formulaire de contact
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

