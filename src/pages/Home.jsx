import { Link } from 'react-router-dom';
import { Printer, Layers, Cpu, PenTool, Wrench } from 'lucide-react';
import '../styles/style.css';

/* =================================================================
   Palette bois + carbone
   ================================================================= */
const wood   = 'bg-[#cfa97e] dark:bg-neutral-900';
const accent = 'text-[#7b4a21] dark:text-amber-300';
const carbonTexture = "url('/assets/carbon-fiber.png')";

const services = [
  { icon: Printer, title: 'Impression 3D',         desc: 'PLA, PETG, ASA, …' },
  { icon: Layers,  title: 'Découpe / gravure laser', desc: 'Bois, acrylique, métal anodisé' },
  { icon: Cpu,     title: 'Usinage CNC',            desc: 'Alu, laiton, composites, bois massif' },
  { icon: PenTool, title: 'Conception 3D',          desc: 'CAO, modélisation, rendu réaliste' },
  { icon: Wrench,  title: 'Réparation / Upcycling', desc: 'Seconde vie pour vos objets' },
];

export default function Home() {
  return (
    <>
      {/* HERO bois + dégradé */}
      <section className="relative isolate h-[35vh] md:h-[40vh] overflow-hidden">

        <img src="/assets/wood-texture.jpg" alt="Atelier" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto max-w-6xl px-4 py-32 text-center text-white flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Prototypage durable <br className="hidden md:inline" /> pour vos idées
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Impression 3D, CNC, laser & design produit — de l’esquisse à la pièce finale.
          </p>
          <Link to="/contact" className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold shadow hover:bg-blue-700 transition">
            Demander un appel
          </Link>
        </div>
      </section>

      {/* SERVICES STYLE CARBONE */} 
      <section className="section-carbon">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Nos 5 pôles de services</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-gray-900/80 backdrop-blur rounded-2xl shadow hover:-translate-y-1 transition">
                <Icon className={`h-12 w-12 mb-4 ${accent}`} />
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALEURS DURABLES */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className={`text-3xl font-bold mb-8 ${accent}`}>Durabilité & économie circulaire</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Nous prolongeons la vie des objets, réduisons les déchets et sélectionnons des matériaux recyclables. Chaque projet intègre une réflexion <span className="font-semibold text-gray-900 dark:text-white">anti‑obsolescence</span>.
          </p>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className={`py-20 ${wood}`} style={{ backgroundImage: carbonTexture }}>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Ils nous font confiance</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <blockquote key={i} className="bg-white/90 dark:bg-gray-900/80 backdrop-blur p-6 rounded-2xl shadow">
                <p className="italic leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
                  “Super accompagnement ! De l’idée au prototype, l’équipe a livré en avance.”
                </p>
                <footer className="text-sm font-semibold text-gray-600 dark:text-gray-400">Client satisfait #{i}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Un projet ? Parlons‑en !</h2>
          <Link to="/contact" className="inline-block rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 transition">
            Prendre rendez‑vous
          </Link>
        </div>
      </section>
    </>
  );
}
