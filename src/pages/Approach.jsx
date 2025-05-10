import React from 'react';
import {
  Quote,
  PenTool,
  Clock,
  Layers,
  Leaf,
  Recycle,
  Wrench,
  MapPin,
  Eye,
  Users,
} from 'lucide-react';

/* ==============================================================
   Palette bois + carbone (cohérente avec About & Services)
   ============================================================== */
const wood   = 'bg-[#cfa97e] dark:bg-neutral-900';
const accent = 'text-[#7b4a21] dark:text-amber-300';
const carbonTexture = "url('/assets/carbon-fiber.png')";

/* ==============================================================
   Données modifiables
   ============================================================== */
const vision = `Notre mission ? Prolonger la durée de vie des objets et réduire l’empreinte écologique de chaque projet. Nous concevons avec des matériaux durables, favorisons la réparabilité et publions les pièces détachées en open‑source chaque fois que possible. L’obsolescence n’est pas une fatalité – c’est un choix de conception auquel nous tournons résolument le dos.`;

const steps = [
  { icon: PenTool, title: 'Devis & cadrage',     desc: 'Analyse du besoin, faisabilité, choix matériaux & estimation.' },
  { icon: Clock,   title: 'Prototypage rapide',  desc: 'Maquette fonctionnelle : impression 3D, découpe laser ou CNC.' },
  { icon: Layers,  title: 'Fabrication finale',  desc: 'Production, contrôle qualité, livraison & documentation.' },
];

const commitments = [
  { icon: Leaf,    label: 'Matériaux à faible impact' },
  { icon: Recycle, label: '41 % de matière recyclée en moyenne' },
  { icon: Wrench,  label: 'Design réparable & pièces dispo 5 ans' },
  { icon: MapPin,  label: 'Approvisionnement < 300 km' },
  { icon: Eye,     label: 'Traçabilité complète' },
  { icon: Users,   label: '1 % du CA pour l’open‑source' },
];

/* ==============================================================
   Composant
   ============================================================== */
export default function Approach() {
  return (
    <>
      {/* HERO texture bois */}
      <section className="section-bois">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/wood-texture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Notre démarche</h1>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Quote className="mx-auto h-10 mb-6 opacity-70 ${accent}" />
          <p className="text-xl leading-relaxed font-medium italic whitespace-pre-line text-gray-700 dark:text-gray-300">
            {vision}
          </p>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-carbon">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className={`text-3xl font-bold text-center mb-16 ${accent}`}>De l’idée à l’objet</h2>
          <div className="relative">
            

            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
              {steps.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="relative flex flex-col items-center text-center px-4">
                  <span className="hidden md:block absolute -left-4 top-2 h-3 w-3 rounded-full bg-blue-600" />
                  <Icon className={`h-14 w-14 mb-4 ${accent}`} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Nos engagements RSE</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:-translate-y-1 transition">
                <Icon className={`h-10 w-10 shrink-0 ${accent}`} />
                <p className="font-medium text-gray-700 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-20 ${wood}`} style={{ backgroundImage: carbonTexture }}>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Fabriquons autrement !</h2>
          <p className="mb-8 text-lg text-gray-800 dark:text-gray-300">Discutons de votre projet et rendons‑le durable.</p>
          <a href="/contact" className="inline-block rounded-full bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700 transition">
            Contactez‑nous
          </a>
        </div>
      </section>
    </>
  );
}
