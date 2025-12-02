import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <div className="bg-slate-50 font-sans dark:bg-black">
      <Header />

      <main className="flex flex-col items-center justify-center">
        <div className="flex h-screen items-center justify-center text-4xl">
          1
        </div>
        <div className="flex h-screen items-center justify-center text-4xl">
          2
        </div>
        <div className="flex h-screen items-center justify-center text-4xl">
          3
        </div>
      </main>

      <Footer />
    </div>
  );
}
