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
import { FileText } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Consultez les conditions d'utilisation du Guide E-Campus France Djibouti.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <FileText className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Conditions d'utilisation
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
                  En accédant et en utilisant le site web du Guide E-Campus France
                  Djibouti (GEFD), vous acceptez d'être lié par les présentes
                  conditions d'utilisation. Si vous n'acceptez pas ces conditions,
                  veuillez ne pas utiliser ce site.
                </p>
              </CardContent>
            </Card>

            {/* Acceptance */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Acceptation des conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  En utilisant ce site, vous reconnaissez avoir lu, compris et
                  accepté d'être lié par ces conditions d'utilisation ainsi que par
                  notre{' '}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-primary hover:underline"
                  >
                    politique de confidentialité
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Use of site */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Utilisation du site
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>Vous vous engagez à :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Utiliser le site uniquement à des fins légales et conformément à
                    ces conditions
                  </li>
                  <li>
                    Ne pas utiliser le site de manière à violer les droits de
                    propriété intellectuelle
                  </li>
                  <li>
                    Ne pas tenter d'accéder de manière non autorisée à des parties
                    du site
                  </li>
                  <li>
                    Ne pas utiliser le site pour transmettre des virus ou autres
                    codes malveillants
                  </li>
                  <li>
                    Respecter les droits et la vie privée des autres utilisateurs
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Content */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Contenu du site
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Le contenu de ce site, y compris mais sans s'y limiter, les textes,
                  graphiques, logos, icônes, images et logiciels, est la propriété du
                  GEFD Project ou de ses fournisseurs de contenu et est protégé par
                  les lois sur le droit d'auteur.
                </p>
                <p>
                  Vous pouvez consulter, télécharger et imprimer le contenu pour
                  votre usage personnel et non commercial, à condition de conserver
                  tous les avis de droit d'auteur et de propriété.
                </p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Avertissement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Ce site fournit des informations à titre informatif uniquement. Le
                  contenu est fourni "tel quel" sans garantie d'aucune sorte, expresse
                  ou implicite.
                </p>
                <p>
                  Bien que nous nous efforcions de fournir des informations exactes et
                  à jour, nous ne garantissons pas l'exactitude, l'exhaustivité ou
                  l'actualité des informations contenues sur ce site.
                </p>
                <p>
                  <strong className="text-foreground">Important</strong> : Ce guide ne remplace pas les informations
                  officielles de Campus France ou des établissements d'enseignement
                  supérieur français. Pour les questions administratives officielles,
                  veuillez consulter le{' '}
                  <a
                    href="https://www.campusfrance.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    site officiel de Campus France
                  </a>
                  .
                </p>
              </CardContent>
            </Card>

            {/* Limitation of liability */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Limitation de responsabilité
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Dans la mesure permise par la loi, le GEFD Project ne sera pas
                  responsable des dommages directs, indirects, accessoires, spéciaux
                  ou consécutifs résultant de l'utilisation ou de l'impossibilité
                  d'utiliser ce site.
                </p>
                <p>
                  Cela inclut, sans s'y limiter, les pertes de profits, de données,
                  d'utilisation ou d'autres pertes intangibles.
                </p>
              </CardContent>
            </Card>

            {/* Links to third parties */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Liens vers des sites tiers
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Ce site peut contenir des liens vers des sites web de tiers. Ces
                  liens sont fournis pour votre commodité uniquement.
                </p>
                <p>
                  Nous n'avons aucun contrôle sur le contenu de ces sites et n'assumons
                  aucune responsabilité pour leur contenu ou leurs pratiques de
                  confidentialité. Nous vous encourageons à lire les conditions
                  d'utilisation et les politiques de confidentialité de tout site tiers
                  que vous visitez.
                </p>
              </CardContent>
            </Card>

            {/* Modifications */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Modifications des conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Nous nous réservons le droit de modifier ces conditions d'utilisation
                  à tout moment. Les modifications seront publiées sur cette page avec
                  une mise à jour de la date de "Dernière mise à jour".
                </p>
                <p>
                  Votre utilisation continue du site après la publication des
                  modifications constitue votre acceptation des nouvelles conditions.
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
                  Pour toute question concernant ces conditions d'utilisation, vous
                  pouvez nous contacter via le{' '}
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

