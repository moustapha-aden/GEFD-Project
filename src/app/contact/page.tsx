'use client';

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
import { ContactForm } from '@/components/ContactForm';
import { MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <MessageSquare className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Contactez-nous
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Une question ? Un besoin d&apos;aide ? N&apos;hésitez pas à nous
                écrire, nous serons ravis de vous aider.
              </p>
            </div>

            {/* Contact Form */}
            <Card className="border-border bg-card border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  Envoyez-nous un message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Tous les champs marqués d&apos;un astérisque (*) sont
                  obligatoires
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="border-border bg-muted/30 dark:bg-card/50 mt-6 border-2 transition-colors sm:mt-8">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Informations importantes
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 text-xs sm:text-sm">
                <p>
                  <strong className="text-foreground">
                    Temps de réponse :
                  </strong>{' '}
                  Nous nous efforçons de répondre à tous les messages dans un
                  délai de 24 à 48 heures ouvrées.
                </p>
                <p>
                  <strong className="text-foreground">
                    Questions techniques :
                  </strong>{' '}
                  Pour les problèmes liés à la plateforme E-Campus France
                  officielle, nous vous recommandons de contacter directement le
                  support de Campus France.
                </p>
                <p>
                  <strong className="text-foreground">Confidentialité :</strong>{' '}
                  Toutes vos informations sont traitées de manière
                  confidentielle et ne sont utilisées que pour répondre à votre
                  demande.
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
