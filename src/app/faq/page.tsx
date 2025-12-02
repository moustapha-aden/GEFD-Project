"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Qu'est-ce que E-Campus France ?",
    answer: "E-Campus France est la plateforme officielle de candidature pour les études supérieures en France. Elle permet aux étudiants internationaux de postuler à des formations dans les établissements français d'enseignement supérieur.",
  },
  {
    question: "Combien d'étapes dois-je compléter ?",
    answer: "Le processus comprend 6 étapes principales : la création du compte, la recherche de formations, la préparation des documents académiques et administratifs, la rédaction du projet motivé, et la soumission finale du dossier.",
  },
  {
    question: "Puis-je modifier mon dossier après l'avoir soumis ?",
    answer: "Une fois soumis, certains éléments du dossier ne peuvent plus être modifiés. Il est donc crucial de vérifier attentivement tous les documents et informations avant de finaliser votre candidature. Nous vous recommandons de compléter chaque étape avec soin.",
  },
  {
    question: "Combien de formations puis-je choisir ?",
    answer: "Sur la plateforme E-Campus France, vous pouvez sélectionner jusqu'à 15 vœux de formations. Il est important de bien réfléchir à vos choix et de vérifier les prérequis de chaque formation.",
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer: "Vous aurez besoin de documents académiques (relevés de notes, diplômes), documents administratifs (passeport, acte de naissance), photos d'identité, et justificatifs de ressources financières. Tous les documents doivent être traduits en français s'ils sont dans une autre langue.",
  },
  {
    question: "Comment puis-je suivre ma progression ?",
    answer: "Utilisez notre tableau de bord pour suivre votre progression en temps réel. Vous verrez quelles étapes sont terminées, en cours, ou à faire. Les checklists vous aideront également à ne rien oublier.",
  },
  {
    question: "Que faire si j'ai des questions ?",
    answer: "Consultez notre section FAQ pour les questions fréquentes. Pour des questions spécifiques, vous pouvez utiliser notre formulaire de contact ou vous référer aux ressources officielles de Campus France.",
  },
  {
    question: "La plateforme est-elle gratuite ?",
    answer: "Oui, notre guide est entièrement gratuit. Nous sommes là pour vous accompagner bénévolement dans votre parcours vers les études en France.",
  },
  {
    question: "Puis-je utiliser cette plateforme sur mobile ?",
    answer: "Oui, notre plateforme est entièrement responsive et fonctionne parfaitement sur tous les appareils : ordinateur, tablette et smartphone. Vous pouvez suivre votre progression où que vous soyez.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Toutes vos données de progression sont stockées localement dans votre navigateur. Nous ne collectons aucune information personnelle. Votre vie privée est notre priorité.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
      <Header />
      
      <main className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Questions fréquentes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Trouvez les réponses aux questions les plus courantes sur le processus E-Campus France
            </p>
          </div>

          {/* FAQ Accordion */}
          <Card className="border-2 dark:border-slate-700 bg-card dark:bg-slate-800 transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">FAQ</CardTitle>
              <CardDescription className="text-muted-foreground">
                Cliquez sur une question pour voir la réponse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-700">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground dark:text-gray-300 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <Card className="border-2 dark:border-slate-700 mt-8 bg-gradient-to-br from-primary/5 to-background dark:from-primary/10 dark:to-slate-800 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Besoin d&apos;aide supplémentaire ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground dark:text-gray-300 leading-relaxed mb-4">
                Si vous ne trouvez pas la réponse à votre question dans cette FAQ, n&apos;hésitez pas 
                à nous contacter via notre formulaire de contact. Nous ferons de notre mieux pour 
                vous aider.
              </p>
              <p className="text-sm text-muted-foreground dark:text-gray-400">
                Pour les questions administratives spécifiques, vous pouvez également consulter le 
                site officiel de <a href="https://www.campusfrance.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Campus France</a>.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

