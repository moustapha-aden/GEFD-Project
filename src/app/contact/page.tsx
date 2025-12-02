"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({ type: 'error', message: "Veuillez remplir tous les champs obligatoires" });
      setTimeout(() => setNotification(null), 5000);
      return;
    }

    // Ici, vous pouvez ajouter la logique d'envoi d'email
    // Pour l'instant, on simule l'envoi
    setNotification({ type: 'success', message: "Message envoyé avec succès ! Nous vous répondrons bientôt." });
    setTimeout(() => setNotification(null), 5000);
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
      <Header />
      
      <main className="w-full py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Notification */}
          {notification && (
            <div className={`mb-6 p-4 rounded-lg border-2 ${
              notification.type === 'success' 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200' 
                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200'
            }`}>
              {notification.message}
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 mb-4">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Une question ? Un besoin d&apos;aide ? N&apos;hésitez pas à nous écrire, nous serons ravis de vous aider.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <Card className="border-2 dark:border-slate-700 text-center bg-card dark:bg-slate-800 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  support@ecampus-guide.fr
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 dark:border-slate-700 text-center bg-card dark:bg-slate-800 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Formulaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Remplissez le formulaire ci-dessous
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 dark:border-slate-700 text-center bg-card dark:bg-slate-800 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">Réponse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Nous répondons sous 24-48h
                </p>
              </CardContent>
            </Card>
          </div>

        {/* Contact Form */}
        <Card className="border-2 dark:border-slate-700 bg-card dark:bg-slate-800 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Envoyez-nous un message</CardTitle>
            <CardDescription className="text-muted-foreground">
              Tous les champs marqués d&apos;un astérisque (*) sont obligatoires
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="question">Question générale</option>
                  <option value="technical">Problème technique</option>
                  <option value="documentation">Documentation</option>
                  <option value="feedback">Commentaire/Suggestion</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  placeholder="Écrivez votre message ici..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Envoyer le message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="border-2 dark:border-slate-700 mt-8 bg-muted/30 dark:bg-slate-800/50 transition-colors">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Informations importantes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Temps de réponse :</strong> Nous nous efforçons 
              de répondre à tous les messages dans un délai de 24 à 48 heures ouvrées.
            </p>
            <p>
              <strong className="text-foreground">Questions techniques :</strong> Pour les problèmes 
              liés à la plateforme E-Campus France officielle, nous vous recommandons de contacter 
              directement le support de Campus France.
            </p>
            <p>
              <strong className="text-foreground">Confidentialité :</strong> Toutes vos informations 
              sont traitées de manière confidentielle et ne sont utilisées que pour répondre à votre 
              demande.
            </p>
          </CardContent>
        </Card>
      </div>
      </main>

      <Footer />
    </div>
  );
}

