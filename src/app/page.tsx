import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans transition-colors">
      <Header />

      <main className="w-full">

        {/* SECTION 1 — HERO */}
        <section className="w-full py-28 bg-blue-100 dark:bg-blue-950 text-center flex flex-col items-center px-4 transition-colors">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300">
            Le Guide Ultime pour Réussir Campus France
          </h1>

          <p className="mt-4 max-w-2xl text-blue-600 dark:text-blue-200 text-lg">
            Accompagnement clair, structuré et complet pour t'aider à construire
            un dossier Campus France solide, sans stress et sans confusion.
          </p>

          <Link href="/documents">
            <Button className="mt-8 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-6 py-3 rounded-xl text-lg transition-colors cursor-pointer">
              Démarrer le parcours
            </Button>
          </Link>
        </section>

        {/* SECTION 2 — POURQUOI CE GUIDE */}
        <section className="py-20 px-6 md:px-20 bg-white dark:bg-slate-900 transition-colors">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-300 text-center mb-8">
            Pourquoi ce projet existe ?
          </h2>

          <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg space-y-4">
            <p>
              Beaucoup d'étudiants se retrouvent perdus dans les étapes Campus France : 
              documents obligatoires, calendrier, erreurs fréquentes, étapes mal expliquées…
            </p>

            <p>
              Cette plateforme simplifie tout en te guidant étape par étape avec des explications simples,
              des checklists, des conseils, des exemples et un suivi personnalisé.
            </p>
          </div>
        </section>

        {/* SECTION 3 — FONCTIONNALITÉS */}
        <section className="py-20 bg-blue-50 dark:bg-slate-800 px-6 md:px-20 transition-colors">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-300 text-center mb-12">
            Ce que tu trouveras dans le guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow dark:shadow-slate-700/50 text-center transition-colors">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                ✔️ Étapes expliquées
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Chaque étape du parcours Campus France expliquée
                simplement pour éviter les erreurs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow dark:shadow-slate-700/50 text-center transition-colors">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                ✔️ Modèles & Ressources
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                CV, lettre de motivation, projet d'étude, exemples de dossier… tout ce qu'il te faut.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow dark:shadow-slate-700/50 text-center transition-colors">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
                ✔️ Suivi de progression
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Avance étape par étape et vois ton évolution clairement dans ton tableau de bord.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 4 — APPEL À L'ACTION */}
        <section className="py-24 text-center px-6 bg-white dark:bg-slate-900 transition-colors">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-4">
            Prêt à commencer ton parcours Campus France ?
          </h2>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            La réussite de ton dossier commence avec une bonne organisation.
            Laisse-nous t'accompagner du début jusqu'à la validation finale.
          </p>
          <Link href="/documents">
            <Button className="mt-8 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 px-8 py-4 rounded-xl text-lg transition-colors cursor-pointer">
              Accéder au guide complet
            </Button>
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}
