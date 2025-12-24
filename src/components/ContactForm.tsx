'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.email('Veuillez entrer une adresse email valide'),
  subject: z.string().optional(),
  message: z
    .string()
    .min(2, 'Le message doit contenir au moins 2 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
}

export function ContactForm({
  emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      throw new Error(
        "Configuration EmailJS manquante. Veuillez configurer les variables d'environnement."
      );
    }

    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        title: data.subject,
        message: data.message,
        time: new Date().toString(),
      };

      await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams,
        emailjsPublicKey
      );

      toast.success(
        'Message envoyé avec succès ! Nous vous répondrons bientôt.'
      );

      reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Une erreur est survenue lors de l'envoi du message", {
        description:
          'Veuillez réessayer plus tard ou nous contacter directement.',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium sm:text-base">
            Nom complet <span className="text-destructive">*</span>
          </label>
          <Input
            type="text"
            id="name"
            {...register('name')}
            className={errors.name ? 'border-destructive' : ''}
            placeholder="Votre nom"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-destructive text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium sm:text-base">
            Email <span className="text-destructive">*</span>
          </label>
          <Input
            type="email"
            id="email"
            {...register('email')}
            className={errors.email ? 'border-destructive' : ''}
            placeholder="votre.email@exemple.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-destructive text-sm">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium sm:text-base">
          Sujet
        </label>
        <select
          id="subject"
          {...register('subject')}
          className="border-input bg-background text-foreground focus:ring-ring w-full rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base"
        >
          <option value="">Sélectionnez un sujet</option>
          <option value="Question générale">Question générale</option>
          <option value="Problème technique">Problème technique</option>
          <option value="Commentaire">Commentaire</option>
          <option value="Autre">Autre (précisez dans le message)</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium sm:text-base">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className={`border-input bg-background text-foreground focus:ring-ring w-full resize-none rounded-lg border-2 px-3 py-2 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none sm:px-4 sm:py-2 sm:text-base ${
            errors.message ? 'border-destructive' : ''
          }`}
          placeholder="Écrivez votre message ici..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-destructive text-sm">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
