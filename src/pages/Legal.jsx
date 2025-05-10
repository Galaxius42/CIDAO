import React from 'react';

/* ============================================================================
   RENSEIGNEMENTS À PERSONNALISER
   Remplace chaque RAZ_… par tes informations réelles
   ============================================================================ */
const editor = {
  company:   'RAZ_NOM_ENTREPRISE – CIDAO',
  form:      'SAS au capital de RAZ_CAPITAL €',
  rcs:       'RCS Paris RAZ_NUMERO',
  head:      'Siège social : 12 rue des Makers, 75011 Paris, France',
  phone:     '+33 (0)1 02 03 04 05',
  email:     'contact@cidao.fr',
  director:  'Directeur·rice de la publication : Claire Dupont',
};

const host = {
  name:     'RAZ_NOM_HÉBERGEUR (Ex : OVHcloud)',
  address:  '2 rue Kellermann, 59100 Roubaix, France',
  phone:    'RAZ_TEL_HÉBERGEUR',
  website:  'https://www.raz-hebergeur.com',
};

/* ============================================================================
   SECTION DE TEXTE LÉGAL  (modifiable au besoin)
   ============================================================================ */
const sections = [
  {
    title: 'Propriété intellectuelle',
    content: `
      L’ensemble du contenu du site (textes, photographies, logos, icônes,
      fichiers téléchargeables, bases de données, etc.) est protégé par le
      droit d’auteur et demeure la propriété exclusive de ${editor.company},
      sauf mention contraire. Toute reproduction, représentation, adaptation
      ou exploitation, totale ou partielle, est interdite sans autorisation
      écrite préalable.
    `,
  },
  {
    title: 'Protection des données personnelles',
    content: `
      Les informations collectées via nos formulaires sont destinées uniquement
      à traiter vos demandes. Conformément au Règlement européen 2016/679
      (RGPD) et à la loi « Informatique et Libertés » modifiée, vous disposez
      d’un droit d’accès, de rectification, de limitation et de suppression des
      données vous concernant. Vous pouvez exercer ces droits en nous
      contactant à l’adresse ${editor.email}.
    `,
  },
  {
    title: 'Cookies',
    content: `
      Le site utilise des cookies strictement nécessaires à son bon
      fonctionnement (préférences, sécurité) ainsi que des cookies de mesure
      d’audience anonymisés. Vous pouvez à tout moment désactiver les cookies
      non essentiels via le bandeau de consentement ou les paramètres de votre
      navigateur.
    `,
  },
  {
    title: 'Responsabilité',
    content: `
      ${editor.company} s’efforce d’assurer l’exactitude et la mise à jour des
      informations diffusées sur ce site. Toutefois, nous ne saurions être
      tenus responsables des omissions, inexactitudes ou carences dans la
      mise à jour, qu’elles soient de notre fait ou du fait de tiers
      partenaires. Les liens externes ne sauraient engager notre
      responsabilité.
    `,
  },
  {
    title: 'Crédits',
    content: `
      Design & développement : équipe ${editor.company}.  
      Icônes : Lucide, Heroicons.  
      Illustrations : RAZ_Crédit_Illustrations.
    `,
  },
];

/* ============================================================================
   COMPOSANT PRINCIPAL
   ============================================================================ */
export default function Legal() {
  return (
    <>
      {/* ===== HERO COURT ===== */}
      <section
        className="relative h-56 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/legal-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Mentions légales
          </h1>
        </div>
      </section>

      {/* ===== CONTENU ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-16">

          {/* Éditeur du site */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
            <p className="leading-relaxed whitespace-pre-line">
              {`${editor.company}\n${editor.form}\n${editor.rcs}\n${editor.head}\n\nTéléphone : ${editor.phone}\nE‑mail : ${editor.email}\n${editor.director}`}
            </p>
          </div>

          {/* Hébergeur */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Hébergeur</h2>
            <p className="leading-relaxed whitespace-pre-line">
              {`${host.name}\n${host.address}\nTéléphone : ${host.phone}\n${host.website}`}
            </p>
          </div>

          {/* Sections légales */}
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="leading-relaxed whitespace-pre-line">{content.trim()}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
