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

            <ol className="space-y-4 ">
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

            <ol className="space-y-4  ">
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

            <ol className="space-y-4  ">
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

      {/* Section 4 : Etat civil */}
      <section
        id="etat-civil"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🧑‍🎓 Remplir son Dossier : État civil
            </h1>
            <p className="text-sm text-muted-foreground">
              Une fois votre compte créé et activé, l'étape suivante consiste à
              détailler votre situation personnelle (état civil) et votre parcours
              pour débloquer la suite du formulaire.
            </p>

            <ol className="space-y-4  ">
              <li>
                <h2 className="font-semibold">
                  1. Les informations d'état civil
                </h2>
                <p className="text-sm text-muted-foreground">
                  Remplissez les informations qui n'ont pas été complétées lors de la
                  création du compte, telles que :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Adresse complète (Rue, Ville, Code Postal)*</li>
                  <li>Numéro de téléphone portable*</li>
                  <li>Situation familiale (Célibataire, Marié, etc.)</li>
                </ul>
              </li>

              <li>
                <h2 className="font-semibold">
                  2. Télécharger la photo d’identité
                </h2>
                <p className="text-sm text-muted-foreground">
                  Une photo d’identité récente est obligatoire.
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Format : JPEG ou PNG</li>
                  <li>Fond : Clair (blanc ou gris)</li>
                  <li>Qualité : Photo d’identité officielle</li>
                </ul>
                <p className="mt-2 text-sm text-amber-700">
                  ⚠️ **Important :** Ne pas scanner une photo d’identité
                  papier. Il faut une photo numérique de bonne qualité.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (ex : écran de la partie État civil du site CF)
          </div>
        </div>
      </section>

      {/* Section 5 : Parcours académique */}
      <section
        id="parcours-academique"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📚 Remplir son Dossier : Parcours académique
            </h1>
            <p className="text-sm text-muted-foreground">
              Cette section est la plus importante. Vous devez y ajouter **tous vos
              diplômes obtenus** ainsi que **l'année scolaire en cours**.
            </p>

            <ol className="space-y-4  ">
              <li>
                <h2 className="font-semibold">
                  1. Ajouter chaque établissement
                </h2>
                <p className="text-sm text-muted-foreground">
                  Entrez les établissements secondaires et supérieurs, y compris :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Nom de l'établissement</li>
                  <li>Ville et pays</li>
                  <li>Diplôme obtenu ou en préparation (Bac, Licence 1, etc.)*</li>
                  <li>Dates de début et de fin*</li>
                </ul>
              </li>

              <li>
                <h2 className="font-semibold">
                  2. Attention au Baccalauréat
                </h2>
                <p className="text-sm text-muted-foreground">
                  Le **Baccalauréat** est le point de départ de votre parcours.
                  Assurez-vous que les informations (série, année, mention) sont
                  exactement conformes à votre diplôme.
                </p>
              </li>

              <li>
                <h2 className="font-semibold">
                  3. Année en cours
                </h2>
                <p className="text-sm text-muted-foreground">
                  Si vous êtes actuellement étudiant, indiquez votre niveau actuel
                  (ex: L3 ou M1) en précisant qu'il est "en cours".
                </p>
                <p className="mt-2 text-sm font-semibold text-amber-700">
                  Aide : Vous aurez besoin de vos relevés de notes pour chaque année.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (ex : capture d’écran de la section Parcours Académique)
          </div>
        </div>
      </section>

      {/* Section 6 : Documents à fournir */}
      <section
        id="documents-dossier"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📄 Remplir son Dossier : Documents à fournir
            </h1>
            <p className="text-sm text-muted-foreground">
              C'est la partie la plus critique pour la validation de votre dossier.
              Chaque document doit être scanné en couleur et de bonne qualité.
            </p>

            <ol className="space-y-4  ">
              <li>
                <h2 className="font-semibold">
                  1. Les documents obligatoires
                </h2>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Pièce d'identité / Passeport</li>
                  <li>Baccalauréat (diplôme et relevé de notes)</li>
                  <li>Relevés de notes de toutes les années post-Bac</li>
                  <li>Diplômes obtenus (Licence, Master 1, etc.)</li>
                </ul>
              </li>

              <li>
                <h2 className="font-semibold">
                  2. Autres documents importants
                </h2>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Attestation de test de langue (TCF, DELF/DALF) si disponible</li>
                  <li>CV et Lettre de motivation (pour certaines candidatures)</li>
                  <li>Attestations de stage ou de travail (si vous avez un parcours professionnel)</li>
                </ul>
              </li>

              <li>
                <h2 className="font-semibold">
                  3. Règle d'or : La conformité
                </h2>
                <p className="text-sm text-muted-foreground">
                  Chaque document doit être :
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Lisible (haute résolution)</li>
                  <li>Complet (toutes les pages)</li>
                  <li>Nommé correctement (ex: `Releve_Notes_L1_Nom_Prenom.pdf`)</li>
                </ul>
                <p className="mt-2 text-sm text-amber-700">
                  ⚠️ **Ne jamais uploader une photo prise avec le téléphone.** Utilisez un scanner.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (ex : grille des documents à uploader)
          </div>
        </div>
      </section>
      {/* Section 7 : Structure du CV */}
      <section
        id="cv-structure"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📝 Faire son CV Campus France : La structure
            </h1>
            <p className="text-sm text-muted-foreground">
              Le CV Campus France est la première impression que les universités
              auront de vous. Il doit être clair, synthétique et respecter une
              structure classique. **Un seul objectif : 1 page maximum !**
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Les 5 rubriques indispensables
            </h2>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Informations Personnelles</h3>
                <p className="text-sm text-muted-foreground">
                  Nom, prénom, date de naissance, nationalité, adresse email
                  (celle de votre compte CF), numéro de téléphone.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Formation et Diplômes</h3>
                <p className="text-sm text-muted-foreground">
                  Du plus récent au plus ancien. Indiquez la mention obtenue (si
                  pertinent). Incluez l'année en cours.
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  ⚠️ C'est le miroir de votre "Parcours académique" sur la
                  plateforme. Les informations doivent être identiques.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Expériences Professionnelles (ou Stages)</h3>
                <p className="text-sm text-muted-foreground">
                  Toute expérience pertinente (emploi, stage, bénévolat). Précisez
                  les dates, le nom de l'entreprise et les missions principales.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">4. Compétences Linguistiques et Informatiques</h3>
                <p className="text-sm text-muted-foreground">
                  Niveau de langue (A1 à C2) et logiciels maîtrisés (Word, Excel,
                  langages de programmation, etc.).
                </p>
              </li>

              <li>
                <h3 className="font-semibold">5. Centres d'Intérêt et Divers</h3>
                <p className="text-sm text-muted-foreground">
                  Brève section pour montrer votre personnalité (sports, clubs,
                  voyages).
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Exemple de mise en page de CV simple)
          </div>
        </div>
      </section>

      {/* Section 8 : Compétences */}
      <section
        id="cv-competences"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🎯 CV : Comment détailler les Compétences
            </h1>
            <p className="text-sm text-muted-foreground">
              Les universités cherchent à évaluer vos capacités au-delà des
              diplômes. La section "Compétences" doit être précise.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              1. Les Compétences Linguistiques
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Français :** Indiquez votre niveau **réel** (B2, C1, C2). Si
                vous avez un TCF/DELF/DALF, mettez le score/niveau.
              </li>
              <li>
                **Anglais / Autres :** Même chose. Si vous avez un TOEFL/IELTS,
                mentionnez le score.
              </li>
              <li>
                **Niveaux Européens (CECR) :** Aidez l'examinateur à comprendre
                votre niveau. *Ex : B2 - Utilisateur indépendant.*
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              2. Les Compétences Informatiques
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Bureautique :** Suite Microsoft Office (Word, Excel,
                PowerPoint), Google Workspace. Précisez si vous maîtrisez
                particulièrement un outil (ex: TCD sur Excel).
              </li>
              <li>
                **Spécialisées :** Si vous postulez en informatique/ingénierie,
                listez les langages (Python, Java, etc.) ou logiciels métier
                (AutoCAD, Photoshop, Figma...).
              </li>
            </ul>

            <p className="mt-4 text-sm text-amber-700">
              💡 **Conseil :** Ne vous contentez pas de dire "Bon niveau en
              français". Dites "C1 (TCF : 520 points)".
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Tableau de conversion des niveaux de langue ou logos de logiciels)
          </div>
        </div>
      </section>

      {/* Section 9 : Expériences */}
      <section
        id="cv-experiences"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              💼 CV : Valoriser vos Expériences
            </h1>
            <p className="text-sm text-muted-foreground">
              Que ce soit un stage, un job d'été ou du bénévolat, chaque
              expérience compte si elle est bien présentée.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              1. Format de présentation
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>**Dates :** Mois et Année de début et de fin.</li>
              <li>**Intitulé du poste :** Clair et précis.</li>
              <li>**Organisme / Entreprise :** Nom et Ville.</li>
              <li>**Description :** Listez 2 à 3 missions principales.</li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              2. Mots clés et Réalisations
            </h2>
            <p className="text-sm text-muted-foreground">
              Utilisez des verbes d'action et mettez l'accent sur ce que vous
              avez accompli, pas seulement ce que vous avez fait.
            </p>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                ❌ *Évitez :* J'ai aidé à organiser des événements.
              </li>
              <li>
                ✅ *Préférez :* **Géré** la logistique de 5 événements majeurs,
                augmentant la participation de 15%.
              </li>
            </ul>
            
            <h2 className="font-semibold text-lg mt-4">
              3. Pas d'Expérience Professionnelle ?
            </h2>
            <p className="text-sm text-muted-foreground">
              Si vous n'avez pas de stage ou d'emploi, valorisez :
            </p>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Projets Universitaires :** Travaux de groupe, mémoires,
                mini-projets.
              </li>
              <li>
                **Activités Associatives :** Rôle de trésorier, responsable
                communication, etc.
              </li>
            </ul>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Exemples de phrases d'action percutantes pour le CV)
          </div>
        </div>
      </section>
      {/* Section 10 : Questions fréquentes */}
      <section
        id="entretien-questions"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🗣️ Préparer l'entretien : Questions fréquentes
            </h1>
            <p className="text-sm text-muted-foreground">
              L'entretien est l'occasion de justifier votre parcours et vos choix
              de formation. Il s'articule souvent autour de trois grands thèmes.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              1. Votre Parcours et Personnalité
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                **Présentez-vous.** (Soyez bref, allez à l'essentiel : nom,
                dernier diplôme, objectif).
              </li>
              <li>Pourquoi la France ? Et pourquoi maintenant ?</li>
              <li>Quels sont vos points forts et vos points faibles ?</li>
              <li>Quelles sont vos activités extra-scolaires ?</li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              2. Votre Projet d'Études (le plus important)
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                **Décrivez votre projet d'études.** (De la Licence au Master,
                quelle cohérence ?).
              </li>
              <li>Pourquoi avoir choisi ces formations/universités en particulier ?</li>
              <li>Que savez-vous sur cette formation/ville ?</li>
              <li>Quels sont les débouchés après ce diplôme ?</li>
              <li>Si vous n'êtes pas accepté en France, quel est votre plan B ?</li>
            </ul>
            
            <h2 className="font-semibold text-lg mt-4">
              3. Vos Moyens Financiers et Logistique
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Qui finance vos études et votre séjour ?</li>
              <li>Où allez-vous vivre en France ? (Logement, ville, etc.)</li>
              <li>Quel est le montant de vos ressources financières ?</li>
            </ul>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Illustration de l'entretien ou de la préparation)
          </div>
        </div>
      </section>

      {/* Section 11 : Pièges à éviter */}
      <section
        id="entretien-pieges"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🚨 Préparer l'entretien : Pièges à éviter
            </h1>
            <p className="text-sm text-muted-foreground">
              De petites erreurs peuvent compromettre la perception de votre
              sérieux. Évitez absolument ces écueils.
            </p>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Ne pas connaître son dossier</h3>
                <p className="text-sm text-muted-foreground">
                  L'examinateur vérifiera que vous avez lu et compris votre propre
                  CV et vos notes. Si vous hésitez sur une date ou une matière,
                  cela manque de crédibilité.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Choisir "la France" sans raison</h3>
                <p className="text-sm text-muted-foreground">
                  **Le piège :** Dire que la France est le seul pays.
                  **L'attendu :** Parler de la qualité du diplôme, de la
                  spécialisation de l'université, ou du lien culturel et
                  linguistique avec votre projet.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Ne pas avoir de plan après les études</h3>
                <p className="text-sm text-muted-foreground">
                  Votre projet doit être crédible et complet. L'examinateur veut
                  savoir si vous comptez rentrer dans votre pays d'origine après
                  vos études (si c'est le cas), et ce que vous y ferez.
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  ⚠️ Évitez de donner l'impression que votre unique objectif est
                  d'obtenir un visa pour rester en Europe.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">4. Être trop vague sur les finances</h3>
                <p className="text-sm text-muted-foreground">
                  Vous devez être capable de donner une estimation réaliste du
                  coût de la vie (logement, nourriture, transport) et prouver que
                  vos fonds sont suffisants et disponibles.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Visuel d'alerte/d'erreur)
          </div>
        </div>
      </section>

      {/* Section 12 : Conseils pratiques */}
      <section
        id="entretien-conseils"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              💡 Préparer l'entretien : Conseils pratiques
            </h1>
            <p className="text-sm text-muted-foreground">
              Mettez toutes les chances de votre côté le jour J.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Avant l'entretien
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Répétez à voix haute :** Entraînez-vous à répondre aux questions
                fréquentes sans lire, en vous enregistrant si possible.
              </li>
              <li>
                **Relisez votre dossier :** Maîtrisez les dates, les notes et les
                noms de vos formations choisies.
              </li>
              <li>
                **Préparez des documents originaux :** Ayez tous les originaux (et
                leurs photocopies) à portée de main, même si on ne vous les
                demande pas.
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              Pendant l'entretien
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Soyez ponctuel et présentable :** Arrivez en avance et portez une
                tenue soignée.
              </li>
              <li>
                **Restez calme et souriant :** L'examinateur évalue votre stress.
                Parlez clairement et avec assurance.
              </li>
              <li>
                **Justifiez toujours :** Chaque affirmation (choix de ville,
                choix de formation) doit être justifiée par une raison solide.
              </li>
            </ul>
            
            <p className="mt-4 text-sm font-semibold text-amber-700">
              Le but n'est pas de mentir, mais de montrer la **cohérence** de
              votre démarche.
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Check-list/Visuel de réussite)
          </div>
        </div>
      </section>
      {/* Section 13 : Comment filtrer les formations */}
      <section
        id="formations-filtrer"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🔍 Choisir ses formations : Comment filtrer
            </h1>
            <p className="text-sm text-muted-foreground">
              La plateforme Campus France propose des milliers de formations.
              Apprendre à utiliser les filtres efficacement vous fera gagner un
              temps précieux et évitera les erreurs de ciblage.
            </p>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Filtrez par Niveau d'Études</h3>
                <p className="text-sm text-muted-foreground">
                  Sélectionnez le niveau correspondant à votre diplôme le plus
                  élevé obtenu ou en cours (ex : vous avez un Bac+3, cherchez
                  des Master 1).
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Filtrez par Domaine et Spécialité</h3>
                <p className="text-sm text-muted-foreground">
                  Soyez précis. Si vous cherchez "Informatique", ne vous arrêtez
                  pas là. Allez vers "Développement Logiciel", "Réseaux", etc.
                  La cohérence avec votre parcours est primordiale.
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  ⚠️ **Erreur courante :** Candidater dans un domaine très
                  différent de votre parcours sans justification forte.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Filtrez par Ville et Type d'Établissement</h3>
                <p className="text-sm text-muted-foreground">
                  Considérez le coût de la vie. Les grandes villes comme Paris ou
                  Lyon sont chères. Les villes moyennes (Lille, Nantes, Rennes)
                  peuvent être de meilleurs choix pour le budget.
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    **Universités :** Offrent des diplômes reconnus et sont souvent
                    moins chères.
                  </li>
                  <li>
                    **Écoles Spécialisées :** Plus sélectives et plus coûteuses.
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Capture d'écran des filtres de la plateforme CF)
          </div>
        </div>
      </section>

      {/* Section 14 : Licence / Master / BTS */}
      <section
        id="formations-types"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🎓 Choisir ses formations : Licence / Master / BTS
            </h1>
            <p className="text-sm text-muted-foreground">
              Comprendre les différents types de diplômes français est la clé pour
              postuler au bon niveau.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              1. Licence (Bac + 3)
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Qui postule ?** Bacs récents, étudiants ayant validé L1 ou L2.
              </li>
              <li>
                **Procédure :** Souvent via la procédure DAP (Demande d'Admission
                Préalable) ou via la procédure standard de CF.
              </li>
              <li>
                **L'objectif :** Obtenir les bases académiques nécessaires.
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              2. Master (Bac + 5)
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Qui postule ?** Étudiants ayant validé un Bac + 3 (Licence) ou plus.
              </li>
              <li>
                **Sélection :** Très sélective, surtout en Master 1. Le jury
                regarde la cohérence entre votre Licence et le Master visé.
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              3. BTS (Brevet de Technicien Supérieur)
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **C'est quoi ?** Une formation courte (Bac + 2) très professionnalisante.
              </li>
              <li>
                **L'avantage :** Idéal pour ceux qui veulent intégrer rapidement le
                marché du travail ou continuer en Licence Professionnelle après 2 ans.
              </li>
            </ul>

            <p className="mt-4 text-sm font-semibold text-amber-700">
              💡 **Vérifiez toujours** sur le site de l'université les prérequis
              exacts pour chaque diplôme.
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Diagramme LMD - Licence Master Doctorat)
          </div>
        </div>
      </section>

      {/* Section 15 : Sélection intelligente */}
      <section
        id="formations-selection"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🧠 Choisir ses formations : La sélection intelligente
            </h1>
            <p className="text-sm text-muted-foreground">
              Pour optimiser vos chances, il faut varier les choix de
              formations dans votre panier (maximum 7 pour la plupart des pays).
            </p>

            <h2 className="font-semibold text-lg mt-4">
              La règle des 3 tiers pour la candidature
            </h2>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Les Choix Ambitieux (20%)</h3>
                <p className="text-sm text-muted-foreground">
                  Les universités ou formations très demandées (Paris, écoles
                  prestigieuses). Elles sont difficiles à obtenir mais valent la
                  peine d'être tentées si votre dossier est excellent.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Les Choix Cohérents (60%)</h3>
                <p className="text-sm text-muted-foreground">
                  Celles qui correspondent parfaitement à votre profil académique
                  et professionnel. Elles sont souvent situées dans des villes
                  moyennes et représentent votre meilleure chance de succès.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Les Choix Sécuritaires (20%)</h3>
                <p className="text-sm text-muted-foreground">
                  Des formations similaires dans des universités moins
                  sélectives. Elles assurent que vous aurez au moins une
                  acceptation si les choix précédents échouent.
                </p>
              </li>
            </ol>

            <h2 className="font-semibold text-lg mt-4">
              Organisez votre sélection
            </h2>
            <p className="text-sm text-muted-foreground">
              Utilisez un tableau (Excel ou autre) pour lister vos choix avec
              les critères suivants :
            </p>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Intitulé exact de la formation</li>
              <li>Ville</li>
              <li>Niveau de sélectivité (Ambitieux/Cohérent/Sécuritaire)</li>
              <li>Date limite de candidature (si différente de CF)</li>
            </ul>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Tableau d'organisation des candidatures)
          </div>
        </div>
      </section>
      {/* Section 16 : Erreurs courantes */}
      <section
        id="erreurs-courantes"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🚫 Éviter les erreurs : Les erreurs courantes
            </h1>
            <p className="text-sm text-muted-foreground">
              De nombreux dossiers sont ralentis ou rejetés pour des erreurs
              simples et évitables. Soyez vigilant sur les points suivants :
            </p>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Le manque de cohérence</h3>
                <p className="text-sm text-muted-foreground">
                  **Exemple :** Avoir fait une Licence en Droit et postuler en
                  Master de Biologie sans justification valable ou rattrapage.
                  Votre projet doit être une suite logique, même en cas de
                  réorientation.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Le retard dans le dépôt</h3>
                <p className="text-sm text-muted-foreground">
                  Ne pas confondre la date limite de dépôt Campus France (pour
                  l'entretien) avec la date limite fixée par certaines
                  universités. Souvent, la première est bien antérieure à ce que
                  vous croyez.
                </p>
                <p className="mt-1 text-sm text-amber-700">
                  ⚠️ **Agissez tôt !** Plus vous postulez tôt, plus vous avez de
                  chances avant que les places ne soient pourvues.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. La mauvaise qualité de la motivation</h3>
                <p className="text-sm text-muted-foreground">
                  La lettre de motivation (dans la partie "Je suis candidat") ne
                  doit pas être générique. Elle doit être personnalisée pour
                  chaque formation si possible, ou au moins pour chaque type de
                  formation choisie.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">4. Les informations inexactes</h3>
                <p className="text-sm text-muted-foreground">
                  Fautes d'orthographe, dates de naissance erronées, nom du
                  diplôme mal retranscrit. Tout doit être vérifié et correspondre
                  aux documents officiels.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Visuel d'attention ou de loupe)
          </div>
        </div>
      </section>

      {/* Section 17 : Documents non conformes */}
      <section
        id="erreurs-documents"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📄 Éviter les erreurs : Documents non conformes
            </h1>
            <p className="text-sm text-muted-foreground">
              La non-conformité des documents est la cause n°1 des dossiers
              bloqués ou rejetés par Campus France et les universités.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Les règles d'or de la numérisation
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                **Couleur Obligatoire :** Tous les documents (diplômes, relevés,
                passeport) doivent être numérisés en **couleur** et non en noir
                et blanc.
              </li>
              <li>
                **Lisibilité Maximale :** Le document doit être à plat, sans
                reflets, sans doigts, sans coin coupé, à haute résolution. Si vous
                avez du mal à lire, l'examinateur aussi.
              </li>
              <li>
                **Traduction :** Si un document n'est pas en français, il doit
                être accompagné de sa traduction par un **traducteur assermenté**.
              </li>
              <li>
                **Un seul fichier par type :** Si votre relevé de notes a trois
                pages, scannez-les dans l'ordre et fusionnez-les en **un seul
                fichier PDF**.
              </li>
              <li>
                **Nom de fichier professionnel :** Nommez le fichier clairement.
                *Ex : Releve_Notes_L2_Dupont_Marie.pdf*.
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              Documents manquants ou invalides
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>
                **Pièce d'identité expirée :** Le document doit être valide le
                jour de la candidature.
              </li>
              <li>
                **Attestations provisoires :** Elles sont acceptées, mais doivent
                être claires et datées.
              </li>
              <li>
                **Relevés non officiels :** Seuls les relevés signés et tamponnés
                par l'établissement sont valides. Les copies d'écran des notes en
                ligne ne sont pas acceptées.
              </li>
            </ul>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Exemple de document bien scanné vs mal scanné)
          </div>
        </div>
      </section>
      {/* Section 18 : Étapes du processus */}
      <section
        id="dossier-etapes"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              ⏳ Suivre le dossier : Étapes du processus
            </h1>
            <p className="text-sm text-muted-foreground">
              Après avoir soumis votre dossier et payé les frais, votre
              candidature passe par plusieurs phases distinctes que vous pouvez
              suivre sur votre compte eCampus France.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Les 5 étapes clés du dossier
            </h2>
            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Création et soumission</h3>
                <p className="text-sm text-muted-foreground">
                  Vous remplissez toutes les rubriques (parcours, formations
                  choisies) et vous soumettez votre dossier au centre Campus France
                  local.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. Vérification par Campus France</h3>
                <p className="text-sm text-muted-foreground">
                  Le centre Campus France vérifie la conformité de vos documents
                  (lisibilité, traductions) et la cohérence de votre parcours.
                  Si des documents sont manquants, ils vous le signalent.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. Entretien de validation</h3>
                <p className="text-sm text-muted-foreground">
                  Après validation administrative du dossier, vous êtes convoqué
                  pour l'entretien (généralement en visioconférence ou en présentiel).
                </p>
              </li>

              <li>
                <h3 className="font-semibold">4. Transmission aux établissements</h3>
                <p className="text-sm text-muted-foreground">
                  Après l'entretien, votre dossier est transmis aux universités
                  que vous avez sélectionnées. Elles procèdent à leur propre
                  examen de votre candidature.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">5. Réponse et choix final</h3>
                <p className="text-sm text-muted-foreground">
                  Les universités vous donnent leur réponse (Accepté, Refusé, ou
                  Liste d'attente). Vous devez confirmer votre choix final avant
                  la date limite.
                </p>
              </li>
            </ol>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Schéma des étapes du processus CF)
          </div>
        </div>
      </section>

      {/* Section 19 : Comprendre chaque statut */}
      <section
        id="dossier-statuts"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📊 Suivre le dossier : Comprendre chaque statut
            </h1>
            <p className="text-sm text-muted-foreground">
              Le statut de votre dossier change au fil du temps. Voici les
              statuts principaux que vous rencontrerez :
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Statuts généraux du dossier
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                **"Dossier soumis, en attente de paiement" :** La soumission
                est faite, mais les frais n'ont pas encore été reçus.
              </li>
              <li>
                **"Dossier soumis à l'Espace Campus France" :** Le dossier est en
                cours de vérification par les agents. (Attente des demandes de
                correction).
              </li>
              <li>
                **"Dossier validé par l'Espace Campus France" :** Félicitations,
                tout est conforme ! Vous êtes maintenant en attente de la date
                d'entretien.
              </li>
              <li>
                **"Entretien passé" :** Votre dossier est officiellement
                transmis aux universités.
              </li>
            </ul>

            <h2 className="font-semibold text-lg mt-4">
              Statuts des formations (après transmission)
            </h2>
            <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                **"En attente de réponse de l'établissement" :** Le dossier est
                en cours d'examen par l'université.
              </li>
              <li>
                **"Accepté" :** L'établissement vous propose une place.
              </li>
              <li>
                **"Refusé" :** L'établissement ne peut pas vous proposer de place.
              </li>
              <li>
                **"Accepté sous condition" :** Vous êtes accepté, mais vous devez
                remplir une condition (ex: obtenir votre diplôme en cours, fournir
                un niveau de langue).
              </li>
            </ul>

            <p className="mt-4 text-sm font-semibold text-amber-700">
              💡 Une fois que vous avez reçu une réponse positive, vous avez une
              date limite pour cliquer sur **"J'accepte définitivement"**. Ne la
              ratez pas !
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Capture d'écran de l'interface de suivi CF)
          </div>
        </div>
      </section>
      {/* Section 20 : Documents obligatoires pour le visa */}
      <section
        id="consulat-documents"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              🛂 Préparer le Consulat : Documents obligatoires
            </h1>
            <p className="text-sm text-muted-foreground">
              Après avoir obtenu l'acceptation définitive de l'université via
              Campus France, vous devez déposer une demande de visa étudiant
              long séjour (VLS-TS) auprès du consulat de France.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Liste des documents clés à préparer
            </h2>
            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Justificatifs liés au voyage et à l'identité</h3>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Formulaire de demande de visa long séjour dûment rempli et signé.</li>
                  <li>Passeport valide (au moins 6 mois après la date de retour prévue).</li>
                  <li>Photos d'identité récentes (format passeport français).</li>
                </ul>
              </li>

              <li>
                <h3 className="font-semibold">2. Justificatifs d'études</h3>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>L'attestation d’acceptation définitive de l'établissement français (obtenue via Campus France).</li>
                  <li>Le certificat de pré-inscription ou d'inscription.</li>
                  <li>Les diplômes et relevés de notes (originaux et photocopies).</li>
                </ul>
              </li>

              <li>
                <h3 className="font-semibold">3. Justificatifs financiers et d'hébergement</h3>
                <p className="text-sm text-muted-foreground">
                  C'est la partie la plus examinée. Vous devez prouver que vous avez les moyens de vivre en France.
                </p>
                <ul className="mt-1 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Preuve de ressources financières suffisantes ($$$ par mois, pendant 12 mois)</li>
                  <li>Attestation de prise en charge (si vous êtes financé par un garant).</li>
                  <li>Justificatif de logement pour les premiers mois (résidence universitaire, attestation d'hébergement, etc.).</li>
                </ul>
              </li>
            </ol>

            <p className="mt-4 text-sm text-amber-700">
              💡 **Vérifiez toujours** sur le site officiel du consulat ou du centre VFS Global, car la liste exacte des documents peut varier selon votre pays.
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Pile de documents ou formulaire de visa)
          </div>
        </div>
      </section>

      {/* Section 21 : Jour du rendez-vous */}
      <section
        id="consulat-rdv"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📅 Préparer le Consulat : Jour du rendez-vous
            </h1>
            <p className="text-sm text-muted-foreground">
              Le jour du dépôt de visa est une étape administrative formelle. Une bonne préparation est synonyme de rapidité.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Ce qu'il faut faire avant et pendant le RDV
            </h2>

            <ol className="space-y-4  ">
              <li>
                <h3 className="font-semibold">1. Organiser votre dossier</h3>
                <p className="text-sm text-muted-foreground">
                  Classez tous les documents dans l'ordre de la liste officielle
                  (souvent dans le même ordre que sur le site France Visas ou VFS).
                  Ayez un jeu de photocopies pour tout, même si vous pensez ne pas
                  en avoir besoin.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">2. La ponctualité</h3>
                <p className="text-sm text-muted-foreground">
                  Arrivez à l'heure exacte de votre rendez-vous. En cas de retard,
                  votre RDV pourrait être annulé et vous devrez le reporter, ce
                  qui peut retarder votre départ.
                </p>
              </li>

              <li>
                <h3 className="font-semibold">3. L'attitude</h3>
                <p className="text-sm text-muted-foreground">
                  Soyez poli et coopératif. Répondez précisément aux questions
                  (qui sont souvent les mêmes que l'entretien Campus France : où
                  allez-vous, qu'allez-vous étudier, qui finance ?). Le but est de
                  vérifier la cohérence de votre projet.
                </p>
              </li>
            </ol>

            <h2 className="font-semibold text-lg mt-4">
              Après le dépôt
            </h2>
            <p className="text-sm text-muted-foreground">
              Le délai de traitement d'un visa étudiant peut varier de quelques
              jours à plusieurs semaines. Vous recevrez une notification lorsque
              votre passeport sera prêt à être récupéré.
            </p>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Visuel d'organisation de documents)
          </div>
        </div>
      </section>
      {/* Section 22 : Modèle de mail à l'université */}
      <section
        id="mail-universite"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📧 Modèles de mails : Contacter l'université
            </h1>
            <p className="text-sm text-muted-foreground">
              Utilisez ce modèle pour poser une question précise sur le contenu
              d'une formation ou pour confirmer une acceptation.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Objet : Demande d'information sur le [Nom de la Formation] - [Votre Nom]
            </h2>
            <div className="bg-background border rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
              Madame, Monsieur,
              
              Je me permets de vous contacter concernant le programme de [Nom exact de la formation : ex. Master 1 Droit des Affaires] pour l'année universitaire 202X-202Y.
              
              Je suis actuellement étudiant(e) en [Votre diplôme actuel : ex. Licence 3 Droit] à [Nom de votre université actuelle]. Mon dossier de candidature a été soumis via la plateforme Campus France sous le numéro [Votre n° CF : ex. CF24-12345].
              
              J'ai une question spécifique concernant [Votre question : ex. : les options de spécialisation proposées en deuxième semestre / la date exacte de rentrée].
              
              Je vous remercie de l'attention que vous porterez à ma requête.
              
              Dans l'attente de votre retour, veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
              
              Cordialement,
              
              [Votre Prénom Nom]
              [Votre Numéro de téléphone]
              [Votre Adresse mail]
            </div>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Icone d'enveloppe)
          </div>
        </div>
      </section>

      {/* Section 23 : Modèle de mail à Campus France */}
      <section
        id="mail-campus-france"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📧 Modèles de mails : Contacter Campus France
            </h1>
            <p className="text-sm text-muted-foreground">
              Utilisez ce modèle pour signaler un problème technique ou demander
              un avancement du dossier après un long délai.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Objet : Suivi de dossier - Problème technique / Dossier [Votre n° CF]
            </h2>
            <div className="bg-background border rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
              Madame, Monsieur de l'Espace Campus France,
              
              Je me permets de vous contacter concernant mon dossier de candidature dont le numéro est [Votre n° CF : ex. CF24-12345].
              
              J'ai soumis l'intégralité de mes documents le [Date de soumission]. Cependant, le statut de mon dossier n'a pas évolué depuis [Préciser la durée ou la date : ex. trois semaines / le 15 novembre].
              
              Je souhaiterais obtenir un éclaircissement sur [Votre problème : ex. le statut actuel de vérification de mes documents / la procédure à suivre pour la prise de rendez-vous d'entretien].
              
              Je vous remercie d'avance pour votre aide et votre diligence.
              
              Cordialement,
              
              [Votre Prénom Nom]
              [Votre n° CF]
            </div>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Logo Campus France ou icône d'alerte)
          </div>
        </div>
      </section>

      {/* Section 24 : Modèle de mail au Consulat (ou VFS) */}
      <section
        id="mail-consulat"
        className="bg-muted/50 flex-1 rounded-xl md:min-h-min p-6"
      >
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Colonne texte */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-semibold">
              📧 Modèles de mails : Contacter le Consulat / VFS
            </h1>
            <p className="text-sm text-muted-foreground">
              Utilisez ce modèle pour interroger sur le suivi de votre demande
              de visa après le dépôt.
            </p>

            <h2 className="font-semibold text-lg mt-4">
              Objet : Suivi de demande de visa étudiant - Référence [Votre Réf. VFS]
            </h2>
            <div className="bg-background border rounded-lg p-4 text-sm font-mono whitespace-pre-wrap">
              Madame, Monsieur,
              
              Je vous contacte concernant ma demande de visa étudiant long séjour (VLS-TS) déposée le [Date du dépôt] au centre [Nom du centre : ex. VFS Global de [Ville]].
              
              Ma référence de dossier est [Votre référence VFS / Consulat].
              
              Pourriez-vous, s'il vous plaît, me donner une indication sur l'état d'avancement du traitement de mon dossier ? Je suis accepté(e) à [Nom de l'université] pour une rentrée prévue le [Date de rentrée].
              
              Je vous remercie de votre collaboration.
              
              Veuillez agréer, Madame, Monsieur, l'expression de ma considération distinguée.
              
              Cordialement,
              
              [Votre Prénom Nom]
              [Votre Numéro de téléphone]
            </div>
          </div>

          {/* Colonne image (placeholder) */}
          <div className="w-full max-w-sm rounded-xl bg-background border p-4 flex items-center justify-center text-center text-sm text-muted-foreground">
            Zone image (Icone de passeport/visa)
          </div>
        </div>
      </section>
    </div>
  );
}
