'use client';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Qu'est-ce que E-Campus France ?",
    answer:
      "E-Campus France est la plateforme officielle de candidature pour les études supérieures en France. Elle permet aux étudiants internationaux de postuler à des formations dans les établissements français d'enseignement supérieur.",
  },
  {
    question: "Combien d' s dois-je compléter ?",
    answer:
      'Le processus comprend 6  s principales : la création du compte, la recherche de formations, la préparation des documents académiques et administratifs, la rédaction du projet motivé, et la soumission finale du dossier.',
  },
  {
    question: "Puis-je modifier mon dossier après l'avoir soumis ?",
    answer:
      'Une fois soumis, certains éléments du dossier ne peuvent plus être modifiés. Il est donc crucial de vérifier attentivement tous les documents et informations avant de finaliser votre candidature. Nous vous recommandons de compléter chaque   avec soin.',
  },
  {
    question: 'Combien de formations puis-je choisir ?',
    answer:
      "Sur la plateforme E-Campus France, vous pouvez sélectionner jusqu'à 15 vœux de formations. Il est important de bien réfléchir à vos choix et de vérifier les prérequis de chaque formation.",
  },
  {
    question: 'Quels documents sont nécessaires ?',
    answer:
      "Vous aurez besoin de documents académiques (relevés de notes, diplômes), documents administratifs (passeport, acte de naissance), photos d'identité, et justificatifs de ressources financières. Tous les documents doivent être traduits en français s'ils sont dans une autre langue.",
  },
  {
    question: 'Comment puis-je suivre ma progression ?',
    answer:
      'Utilisez notre tableau de bord pour suivre votre progression en temps réel. Vous verrez quelles  s sont terminées, en cours, ou à faire. Les checklists vous aideront également à ne rien oublier.',
  },
  {
    question: "Que faire si j'ai des questions ?",
    answer:
      'Consultez notre section FAQ pour les questions fréquentes. Pour des questions spécifiques, vous pouvez utiliser notre formulaire de contact ou vous référer aux ressources officielles de Campus France.',
  },
  {
    question: 'La plateforme est-elle gratuite ?',
    answer:
      'Oui, notre guide est entièrement gratuit. Nous sommes là pour vous accompagner bénévolement dans votre parcours vers les études en France.',
  },
  {
    question: 'Puis-je utiliser cette plateforme sur mobile ?',
    answer:
      'Oui, notre plateforme est entièrement responsive et fonctionne parfaitement sur tous les appareils : ordinateur, tablette et smartphone. Vous pouvez suivre votre progression où que vous soyez.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'Toutes vos données de progression sont stockées localement dans votre navigateur. Nous ne collectons aucune information personnelle. Votre vie privée est notre priorité.',
  },
];

export default function FAQPage() {
  return (
    <div className="bg-background min-h-screen font-sans transition-colors">
      <Header />

      <main className="w-full">
        <Section variant="default" padding="lg">
          <Container size="md">
            {/* Header */}
            <div className="mb-8 text-center sm:mb-12">
              <div className="bg-primary/10 dark:bg-primary/20 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16">
                <HelpCircle className="text-primary h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h1 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                Questions fréquentes
              </h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg">
                Trouvez les réponses aux questions les plus courantes sur le
                processus E-Campus France
              </p>
            </div>

            {/* FAQ Accordion */}
            <Card className="border-border bg-card border-2 transition-colors">
              <CardHeader>
                <CardTitle className="text-foreground text-xl sm:text-2xl">
                  FAQ
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Cliquez sur une question pour voir la réponse
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border border-b"
                    >
                      <AccordionTrigger className="text-foreground text-left font-semibold hover:no-underline sm:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 text-sm leading-relaxed sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Additional Help */}
            <Card className="border-border from-primary/5 to-background dark:from-primary/10 dark:to-card mt-6 border-2 bg-gradient-to-br transition-colors sm:mt-8">
              <CardHeader>
                <CardTitle className="text-foreground text-lg sm:text-xl">
                  Besoin d&apos;aide supplémentaire ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed sm:text-base">
                  Si vous ne trouvez pas la réponse à votre question dans cette
                  FAQ, n&apos;hésitez pas à nous contacter via notre formulaire
                  de contact. Nous ferons de notre mieux pour vous aider.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Pour les questions administratives spécifiques, vous pouvez
                  également consulter le site officiel de{' '}
                  <a
                    href="https://www.campusfrance.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline"
                  >
                    Campus France
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
