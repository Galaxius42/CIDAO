import { Link } from 'react-router-dom';

/* ============================================================================
   DÉCLARATION DES LIENS PRINCIPAUX
   Ajoute / retire une entrée pour mettre ton plan du site à jour
   ============================================================================ */
const PAGES = [
  { path: '/',               label: 'Accueil' },
  { path: '/services',       label: 'Services' },
  { path: '/realisations',   label: 'Réalisations' },
  { path: '/notre-demarche', label: 'Notre démarche' },
  { path: '/a-propos',       label: 'À propos' },
  { path: '/contact',        label: 'Contact' },
  { path: '/mentions-legales',         label: 'Mentions légales' },
  { path: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { path: '/plan-du-site',   label: 'Plan du site' },        // page actuelle
];

export default function Sitemap() {
  return (
    <>
      {/* ===== HERO COURT ===== */}
      <section
        className="relative h-56 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/sitemap-hero.jpg)' }}  /* remplace l’image */
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Plan du site
          </h1>
        </div>
      </section>

      {/* ===== CONTENU ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <p className="mb-10">
            Retrouvez ci‑dessous la liste complète des pages disponibles sur notre
            site. Cliquez sur un lien pour y accéder directement.
          </p>

          <nav aria-label="Plan du site">
            <ul className="space-y-4">
              {PAGES.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-blue-600 hover:underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
