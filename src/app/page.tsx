import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <Section
          variant="primary"
          padding="xl"
          className="flex min-h-screen items-center justify-center"
        >
          <Container size="lg" className="text-center">
            <h1 className="text-primary mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Guide E-Campus France Djibouti
            </h1>

            <p className="text-primary/80 mx-auto mb-10 max-w-2xl text-base sm:text-lg md:text-xl lg:mb-12">
              Accompagnement clair, structuré et complet pour t&apos;aider à
              construire un dossier Campus France solide, sans stress et sans
              confusion.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="w-full px-8 py-6 text-base sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
                >
                  Démarrer le parcours
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full px-8 py-6 text-base sm:w-auto sm:px-10 sm:py-6 sm:text-lg"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* SECTION 2 — POURQUOI CE GUIDE */}
        <Section variant="default" padding="lg">
          <Container size="md">
            <h2 className="text-primary mb-6 text-center text-2xl font-semibold sm:text-3xl md:mb-8 md:text-4xl">
              Pourquoi ce projet existe ?
            </h2>

            <div className="text-muted-foreground space-y-4 text-base sm:text-lg md:space-y-6">
              <p>
                Beaucoup d&apos;étudiants se retrouvent perdus dans les  s
                Campus France : documents obligatoires, calendrier, erreurs
                fréquentes,  s mal expliquées…
              </p>

              <p>
                Cette plateforme simplifie tout en te guidant   par  
                avec des explications simples, des checklists, des conseils, des
                exemples et un suivi personnalisé.
              </p>
            </div>
          </Container>
        </Section>

        {/* SECTION 3 — FONCTIONNALITÉS */}
        <Section variant="muted" padding="lg">
          <Container size="lg">
            <h2 className="text-primary mb-8 text-center text-2xl font-semibold sm:text-3xl md:mb-12 md:text-4xl">
              Ce que tu trouveras dans le guide
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="bg-card rounded-2xl p-6 text-center shadow-lg transition-colors sm:p-8">
                <h3 className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                  ✔️  s expliquées
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Chaque   du parcours Campus France expliquée simplement
                  pour éviter les erreurs.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-lg transition-colors sm:p-8">
                <h3 className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                  ✔️ Modèles & Ressources
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  CV, lettre de motivation, projet d&apos;étude, exemples de
                  dossier… tout ce qu&apos;il te faut.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center shadow-lg transition-colors sm:p-8 md:col-span-2 lg:col-span-1">
                <h3 className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                  ✔️ Suivi de progression
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Avance   par   et vois ton évolution clairement dans
                  ton tableau de bord.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* SECTION 4 — APPEL À L'ACTION */}
        <Section variant="default" padding="lg">
          <Container size="md" className="text-center">
            <h2 className="text-primary mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
              Prêt à commencer ton parcours Campus France ?
            </h2>

            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-lg md:mb-10">
              La réussite de ton dossier commence avec une bonne organisation.
              Laisse-nous t&apos;accompagner du début jusqu&apos;à la validation
              finale.
            </p>
            <Link href="/docs">
              <Button size="lg" className="w-full sm:w-auto">
                Accéder au guide complet
              </Button>
            </Link>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
