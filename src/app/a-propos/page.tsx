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
import { Info } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez qui nous sommes et notre mission pour aider les étudiants djiboutiens dans leur parcours Campus France.',
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <Info className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                À propos de nous
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Découvrez notre mission et notre engagement pour faciliter votre
                parcours vers les études en France.
              </p>
            </div>

            {/* Mission */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Notre mission
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Simplifier votre parcours Campus France
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  Le <strong className="text-foreground">Guide E-Campus France Djibouti (GEFD)</strong> est une initiative
                  dédiée à accompagner les étudiants djiboutiens dans leur parcours
                  de candidature pour les études supérieures en France via la
                  plateforme E-Campus France.
                </p>
                <p>
                  Notre objectif est de <strong className="text-foreground">démocratiser l'accès à l'information</strong> et
                  de fournir un guide complet, clair et structuré pour faciliter
                  chaque étape de votre candidature.
                </p>
              </CardContent>
            </Card>

            {/* What we offer */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Ce que nous offrons
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-sm sm:text-base">
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-foreground">Guide complet</strong> : Des explications détaillées pour chaque
                    étape du processus
                  </li>
                  <li>
                    <strong className="text-foreground">Conseils pratiques</strong> : Des astuces basées sur
                    l'expérience réelle
                  </li>
                  <li>
                    <strong className="text-foreground">Checklists</strong> : Pour ne rien oublier dans votre parcours
                  </li>
                  <li>
                    <strong className="text-foreground">Exemples concrets</strong> : Des modèles de documents et de
                    rédactions
                  </li>
                  <li>
                    <strong className="text-foreground">Solutions aux erreurs</strong> : Les problèmes fréquents et
                    comment les résoudre
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border-border bg-card mb-6 border-2 transition-colors sm:mb-8">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Nos valeurs
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">Accessibilité</h3>
                  <p>
                    Nous croyons que l'information doit être accessible à tous, sans
                    barrières.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">Clarté</h3>
                  <p>
                    Nous nous efforçons de rendre les informations complexes simples
                    et compréhensibles.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">Fiabilité</h3>
                  <p>
                    Nous mettons à jour régulièrement nos contenus pour refléter les
                    dernières informations officielles.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-border bg-muted/30 dark:bg-card/50 border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Avertissement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-xs sm:text-sm">
                <p>
                  Ce guide est un <strong className="text-foreground">outil d'aide et d'information</strong>. Il ne
                  remplace pas les informations officielles de Campus France ou des
                  établissements d'enseignement supérieur français.
                </p>
                <p>
                  Pour les questions administratives officielles, veuillez consulter
                  le{' '}
                  <a
                    href="https://www.campusfrance.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    site officiel de Campus France
                  </a>{' '}
                  ou contacter directement l'Espace Campus France de Djibouti.
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

