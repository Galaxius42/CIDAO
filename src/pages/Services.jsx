import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Printer, Layers, Cpu, PenTool, Wrench } from 'lucide-react';

/* =========================================================================
   Palette bois + carbone
   ========================================================================= */
// Bois légèrement plus foncé qu’avant
const wood   = 'bg-[#cfa97e] dark:bg-neutral-900';
// Accent marron clair / or caramel
const accent = 'text-[#7b4a21] dark:text-amber-300';
// Texture carbone (place /assets/carbon-fiber.png dans public ou src/assets)
const carbonTexture = "url('/assets/carbon-fiber.png')";

const SERVICES = [
  { slug: 'impression-3d', title: 'Impression 3D',         icon: Printer, color: 'from-orange-600 to-rose-500', desc: 'PLA, PETG, ASA ; petites séries fonctionnelles.' },
  { slug: 'laser',         title: 'Gravure laser',         icon: Layers,  color: 'from-amber-700 to-yellow-500', desc: 'Bois, PMMA, cuir, carton ; gravure HD.' },
  { slug: 'cnc',           title: 'Usinage CNC',           icon: Cpu,     color: 'from-lime-700 to-emerald-500', desc: 'Alu, laiton, composites, bois massif.' },
  { slug: 'design',        title: 'Conception 3D',         icon: PenTool, color: 'from-sky-700 to-cyan-500',     desc: 'CAO paramétrique, rendu réaliste.' },
  { slug: 'repair',        title: 'Réparation / Upcycling',icon: Wrench,  color: 'from-stone-700 to-stone-500',  desc: 'Prolongez la vie de vos objets.' },
];

const fade = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Services() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="section-bois">
        {/* texture bois */}
        <div className="absolute inset-0 -z-10 bg-[url('/assets/wood-texture.jpg')] bg-cover bg-center" />
        {/* grille isométrique en surimpression */}
        <div className="absolute inset-0 -z-10 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        {/* voile sombre */}
        <div className="absolute inset-0 -z-10 bg-black/40" />

        <div className="flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Nos expertises bois & 3D
          </h1>
        </div>
      </section>

      {/* ===== GRILLE ===== */}
      <section className="section-carbon">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SERVICES.map(({ slug, title, icon: Icon, color, desc }) => (
              <motion.article
                key={slug}
                variants={fade}
                className="group relative rounded-3xl p-px shadow-xl transition hover:-translate-y-1"
              >
                {/* contour dégradé */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} blur-sm opacity-40 group-hover:opacity-70 transition`} />

                <div className="relative z-10 flex flex-col h-full bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-3xl p-6">
                  <Icon className={`h-12 w-12 mb-4 ${accent}`} />
                  <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{title}</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{desc}</p>
                  <Link to="/contact" className="self-start rounded-full bg-blue-600 px-5 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition">
                    Demander un devis
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${accent}`}>Un projet en tête ?</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
            Parlons de votre idée et voyons comment la concrétiser en respectant la planète.
          </p>
          <Link to="/contact" className="inline-block rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 transition">
            Contacter l’atelier
          </Link>
        </div>
      </section>
    </>
  );
}