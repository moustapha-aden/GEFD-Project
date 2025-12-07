'use client';

import { AppSidebar, sidebarNavData } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Page() {
  const handleItemSelect = (id: string) => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar onItemSelect={handleItemSelect} />
        <SidebarInset className="flex flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Guide E-Campus France Djibouti
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Guide E-Campus France Djibouti</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-y-auto">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            {/* Placeholders globaux pour des visuels généraux si tu veux */}
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <DashboardContent />
        </div>
      </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function DashboardContent() {
  return (
    <div className="flex flex-col gap-8">
      {/* Section 1 : Prérequis */}
      <section
        id="prerequis-compte"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              ✅ Prérequis pour créer un compte eCampus France
            </h1>
            <p className="text-sm text-muted-foreground">
              Pour ouvrir votre compte sur la plateforme eCampus France, vous
              devez remplir plusieurs informations obligatoires. Voici tout ce
              que vous devez préparer avant de commencer (avant même de remplir
              les informations personnelles) :
            </p>

            <ol className="space-y-4 list-decimal list-inside">
              <li>
                <h2 className="font-semibold">
                  1. Choisir votre Espace Campus France
                </h2>
                <p className="text-sm text-muted-foreground">
                  Lors de l’inscription, vous devez sélectionner le bureau
                  Campus France de votre pays.
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Exemple :</span> Espace Campus
                  France Djibouti
                </p>
              </li>

              <li>
                <h2 className="font-semibold">2. Adresse électronique (Email)</h2>
                <p className="text-sm text-muted-foreground">
                  Votre e-mail servira :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>d’identifiant pour vous connecter</li>
                  <li>pour recevoir les messages de Campus France</li>
                  <li>
                    pour recevoir les réponses des universités (si vous
                    l’acceptez)
                  </li>
                </ul>
                <p className="mt-2 text-sm font-semibold">Champs obligatoires :</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Adresse électronique*</li>
                  <li>Confirmation de l’adresse électronique*</li>
                </ul>
                <p className="mt-2 text-sm text-amber-700">
                  ⚠️ L’e-mail doit être valide et accessible, car vous recevrez
                  le lien d’activation dessus.
                </p>
              </li>
            </ol>

            <p className="text-xs text-muted-foreground">
              Les étapes suivantes (Identité, Pièce d’identité, Acceptation des
              conditions et Création du compte) sont détaillées dans les
              sous-sections suivantes.
            </p>
          </div>

          {/* Colonne image (placeholder pour ta future photo / illustration) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            {/* Plus tard tu pourras remplacer ça par un composant Image */}
            Zone image (tu pourras ajouter une capture d’écran ou une
            illustration ici)
          </div>
        </div>
      </section>

      {/* Section 2 : Informations personnelles */}
      <section
        id="infos-personnelles"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🧾 Informations personnelles et identité
            </h1>
            <p className="text-sm text-muted-foreground">
              Après avoir vérifié les prérequis (espace Campus France et e-mail),
              vous devez remplir toutes vos informations personnelles dans
              eCampus France.
            </p>

            <ol className="space-y-4 list-decimal list-inside">
              <li>
                <h2 className="font-semibold">3. Identité</h2>
                <p className="text-sm text-muted-foreground">
                  Les champs suivants sont obligatoires :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Nom de famille*</li>
                  <li>Autres noms (patronyme)</li>
                  <li>Prénom*</li>
                  <li>Sexe*</li>
                  <li>Date de naissance* (format : jj/mm/aaaa)</li>
                  <li>Pays et territoires de naissance*</li>
                  <li>Lieu de naissance</li>
                  <li>Pays et territoires de nationalité*</li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ces informations doivent correspondre exactement à votre pièce
                  d’identité.
                </p>
              </li>

              <li>
                <h2 className="font-semibold">4. Pièce d’identité</h2>
                <p className="text-sm text-muted-foreground">
                  Pour finaliser votre compte, vous devez entrer les données de
                  votre document officiel :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Type de pièce d’identité*</li>
                  <li>Numéro de la pièce d’identité*</li>
                  <li>Pays et territoire de délivrance*</li>
                  <li>Date de validité (jj/mm/aaaa)</li>
                </ul>
                <p className="mt-2 text-sm text-amber-700">
                  ⚠️ La pièce d’identité doit être lisible et encore valide.
                </p>
              </li>

              <li>
                <h2 className="font-semibold">5. Acceptation des conditions</h2>
                <p className="text-sm text-muted-foreground">
                  Vous devez cocher :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    J’accepte que les informations saisies soient exploitées dans
                    le cadre de la procédure Campus France
                  </li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">Optionnel :</p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Je souhaite m’inscrire au réseau France Alumni</li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dans ce cas, seront transmis : nom, prénom, email, diplômes,
                  établissement, parcours pro, et la formation pour laquelle vous
                  demandez un visa.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder pour ta future photo / illustration) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (capture d’écran de la partie Identité, par exemple)
          </div>
        </div>
      </section>

      {/* Section 3 : Activation du compte */}
      <section
        id="activation-compte"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">🚀 Activation du compte</h1>
            <p className="text-sm text-muted-foreground">
              Une fois tous les champs du formulaire remplis correctement, il ne
              reste plus qu’à créer et activer votre compte.
            </p>

            <ol className="space-y-4 list-decimal list-inside">
              <li>
                <h2 className="font-semibold">6. Création du compte</h2>
                <p className="text-sm text-muted-foreground">
                  Vérifiez une dernière fois toutes les informations saisies
                  (e-mail, identité, pièce d’identité, conditions…).
                </p>
                <p className="mt-1 text-sm">
                  Puis cliquez sur :{' '}
                  <span className="font-semibold">👉 Créer mon compte</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Vous recevrez ensuite un e-mail contenant le lien d’activation.
                  Ouvrez votre boîte mail, cliquez sur le lien et suivez les
                  instructions pour finaliser l’activation.
                </p>
                <p className="mt-2 text-sm text-amber-700">
                  ⚠️ Si vous ne voyez pas l’e-mail, pensez à vérifier vos
                  courriers indésirables (spam).
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder pour ta future photo / illustration) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (ex : capture d’écran de l’e-mail d’activation)
          </div>
        </div>
      </section>
    </div>
  );
}
