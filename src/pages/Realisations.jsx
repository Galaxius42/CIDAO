import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';

/* ==============================================================
   Palette bois + carbone + bleu clair pour actions
   ============================================================== */
const wood = 'bg-[#cfa97e] dark:bg-neutral-900';
const accent = 'text-[#7b4a21] dark:text-amber-300';
const carbonTexture = "url('/assets/carbon-fiber.png')";
const action = 'bg-blue-600 hover:bg-blue-700 text-white';

/* ==============================================================
   Dummy data
   ============================================================== */
const PROJECTS = [
  { id: 'p01', title: 'Boîtier électronique', service: 'Impression 3D', material: 'PETG', sector: 'IoT', img: '/assets/realisations/boitier.jpg', popularity: 86, date: '2024-11-05' },
  { id: 'p02', title: 'Signalétique bois', service: 'Découpe laser', material: 'Bois', sector: 'Retail', img: '/assets/realisations/signe-bois.jpg', popularity: 73, date: '2025-01-14' },
  { id: 'p03', title: 'Fixation aluminium', service: 'Usinage CNC', material: 'Aluminium', sector: 'Industrie', img: '/assets/realisations/fixation.jpg', popularity: 92, date: '2025-04-02' },
];

const SERVICES = [...new Set(PROJECTS.map(p => p.service))];
const MATERIAUX = [...new Set(PROJECTS.map(p => p.material))];
const SECTEURS = [...new Set(PROJECTS.map(p => p.sector))];
const SORT_OPTIONS = [ { value: 'popular', label: 'Popularité' }, { value: 'new', label: 'Nouveauté' } ];

/* ==============================================================
   Utility components
   ============================================================== */
function MultiSelect({ label, options, selected, setSelected }) {
  const toggle = o => setSelected(prev => prev.includes(o) ? prev.filter(v => v!==o) : [...prev, o]);
  const active = selected.length > 0;
  return (
    <details className="group relative">
      <summary className={`flex items-center gap-2 cursor-pointer select-none rounded-full px-4 py-2 border ${active ? 'border-blue-600 text-blue-600 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-400 text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/70'} backdrop-blur hover:bg-blue-50 dark:hover:bg-gray-800 transition`}>
        {label}
        {active && <span className="text-xs font-semibold bg-blue-600 text-white rounded-full px-2">{selected.length}</span>}
        <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute z-10 mt-2 w-52 rounded-xl border bg-white dark:bg-gray-900 shadow-xl p-2 space-y-1">
        {options.map(opt => (
          <button key={opt} onClick={() => toggle(opt)} className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-left text-sm ${selected.includes(opt) ? 'bg-blue-600/10 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
            {selected.includes(opt) && <Check size={14} className="text-blue-600" />} {opt}
          </button>
        ))}
      </div>
    </details>
  );
}

function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={e=>onChange(e.target.value)} className="rounded-full border px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

/* ==============================================================
   Main page
   ============================================================== */
export default function Realisations() {
  const [fService,setFService]=useState([]);
  const [fMaterial,setFMaterial]=useState([]);
  const [fSector,setFSector]=useState([]);
  const [sortBy,setSortBy]=useState('popular');

  const filtered = useMemo(()=>{
    let res = PROJECTS.filter(p=>(!fService.length||fService.includes(p.service)) && (!fMaterial.length||fMaterial.includes(p.material)) && (!fSector.length||fSector.includes(p.sector)));
    res = sortBy==='new' ? res.sort((a,b)=>new Date(b.date)-new Date(a.date)) : res.sort((a,b)=>b.popularity-a.popularity);
    return res;
  },[fService,fMaterial,fSector,sortBy]);

  const containerV={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:0.06}}};
  const itemV={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};

  return (
    <>
      {/* HERO */}
      <section className="section-bois">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/wood-texture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Réalisations</h1>
        </div>
      </section>

      {/* FILTRES */}
      <section className="section-carbon">
        <div className="mx-auto max-w-6xl px-4 flex flex-wrap gap-4 items-center">
          <MultiSelect label="Service"  options={SERVICES}  selected={fService}  setSelected={setFService} />
          <MultiSelect label="Matériau" options={MATERIAUX} selected={fMaterial} setSelected={setFMaterial} />
          <MultiSelect label="Secteur"  options={SECTEURS}  selected={fSector}   setSelected={setFSector} />
          <div className="ml-auto flex items-center gap-2 text-gray-800 dark:text-gray-300">
            <span className="text-sm">Trier par</span>
            <Select value={sortBy} onChange={setSortBy} options={SORT_OPTIONS} />
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4">
          {filtered.length ? (
            <motion.div variants={containerV} initial="hidden" animate="show" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filtered.map(p=> (
                  <motion.article key={p.id} variants={itemV} exit={{opacity:0,scale:0.9}} className="overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-800 hover:-translate-y-1 transition">
                    <Link to={`/realisations/${p.id}`}> <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{p.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{p.service} • {p.material} • {p.sector}</p>
                        <span className="inline-block mt-4 text-blue-600 hover:underline">Voir la fiche →</span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">Aucun projet ne correspond aux filtres.</p>
          )}
        </div>
      </section>
    </>
  );
}
