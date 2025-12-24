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
              Guide Ecampus France Djibouti
            </h1>

            <p className="text-primary/80 mx-auto mb-10 max-w-2xl text-base sm:text-lg md:text-xl lg:mb-12">
              Documentation clair, structuré et complet pour t&apos;aider à
              construire un dossier Ecampus France solide, sans stress et sans
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
      </main>

      <Footer />
    </div>
  );
}
