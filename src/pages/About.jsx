import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, Scan, Cpu, Camera, Hammer, Wrench } from 'lucide-react';

/* =========================================================================
   Palette bois + carbone cohérente avec Services
   ========================================================================= */
const wood   = 'bg-[#cfa97e] dark:bg-neutral-900';
const accent = 'text-[#7b4a21] dark:text-amber-300';
const carbonTexture = "url('/assets/carbon-fiber.png')";

/* =========================================================================
   Données texte / images
   ========================================================================= */
const story = {
  title: 'Notre histoire',
  paragraphs: [
    `Fondé en 2019, CIDAO naît d’une vision simple : démocratiser la fabrication locale et durable. D’un premier atelier de 20 m², nous sommes passés à un espace collaboratif de plus de 250 m² dédié au prototypage rapide, à la réparation et à l’upcycling.`,
    `Aujourd’hui, nous accompagnons startups, associations et particuliers dans la réalisation de leurs projets, tout en portant un engagement fort contre l’obsolescence programmée : matériaux recyclables, pièces détachées disponibles et conception modulable.`,
  ],
};

const team = [
  { name: 'Claire Dupont',   role: 'Fondatrice & CEO',              photo: '@/assets/team/claire.jpg' },
  { name: 'Yanis Ben Said',  role: 'Ingénieur fabrication additive', photo: '@/assets/team/yanis.jpg' },
  { name: 'Sophie Martin',   role: 'Designer produit',               photo: '@/assets/team/sophie.jpg' },
  { name: 'Lucas Renault',   role: 'Technicien CNC',                 photo: '@/assets/team/lucas.jpg' },
];

const workshop = [
  { icon: Printer, label: '6 imprimantes 3D Prusa Mk4' },
  { icon: Scan,    label: 'Scanner 3D haute résolution' },
  { icon: Cpu,     label: 'Fraiseuse CNC 3 axes 1000×600' },
  { icon: Camera,  label: 'Laser CO₂ 80 W (600×400 mm)' },
  { icon: Hammer,  label: 'Presse à injection 100 g' },
  { icon: Wrench,  label: 'Station soudure & électronique' },
];

const partners = [
  { name: 'Fab City',      logo: '@/assets/partners/fabcity.svg',  url: 'https://fab.city/' },
  { name: 'Low Tech',      logo: '@/assets/partners/lowtech.svg',  url: 'https://lowtechlab.org/' },
  { name: "Répar'Acteurs", logo: '@/assets/partners/repar.svg',   url: 'https://reparacteurs.fr/' },
];

/* =========================================================================
   Composant
   ========================================================================= */
export default function About() {
  return (
    <>
      {/* HERO courte avec texture bois */}
      <section className="section-bois">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/wood-texture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">À&nbsp;propos</h1>
        </div>
      </section>

      {/* STORY */}
      <section className="section-carbon">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className={`text-3xl font-bold mb-8 ${accent}`}>{story.title}</h2>
          {story.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 leading-relaxed text-lg text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* TEAM cards */}
      <section className="section-blanc">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">Notre équipe</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ name, role, photo }) => (
              <article key={name} className="flex flex-col items-center bg-white/80 dark:bg-gray-900/70 backdrop-blur rounded-2xl p-6 shadow">
                <img src={photo} alt={name} className="h-32 w-32 rounded-full object-cover shadow mb-4" />
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="section-carbon">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 ${accent}`}>Atelier & équipements</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workshop.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <Icon className={`h-10 w-10 shrink-0 ${accent}`} />
                <p className="font-medium text-gray-700 dark:text-gray-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-blanc">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-gray-100">Partenaires & labels</h2>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partners.map(({ name, logo, url }) => (
              <Link key={name} to={url} target="_blank" rel="noopener" className="opacity-80 hover:opacity-100 transition">
                <img src={logo} alt={name} className="h-12" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
