import React from 'react';

/* ============================================================================
   DONNÉES À PERSONNALISER
   ============================================================================ */
const site = {
  name:       'RAZ_NOM_SITE – CIDAO',
  url:        'https://www.cidao.fr',
  company:    'CIDAO – Atelier Durable',
  dpoMail:    'dpo@cidao.fr',
  dpoTel:     '+33 (0)1 02 03 04 05',
};

/* ============================================================================
   SECTIONS DE LA POLITIQUE
   ============================================================================ */
const sections = [
  {
    title: '1. Introduction',
    content: `
      Cette politique de confidentialité explique comment ${site.company}
      (« nous ») collecte, utilise et protège vos données personnelles lorsque
      vous utilisez le site ${site.url} (« le Site »). Nous respectons le
      Règlement (UE) 2016/679 (RGPD) et la loi Informatique & Libertés modifiée.
    `,
  },
  {
    title: '2. Données collectées',
    content: `
      • Données d’identification : nom, prénom, e‑mail, numéro de téléphone.  
      • Données de navigation : adresse IP, logs, pages visitées, device,
      navigateur.  
      • Données commerciales : historique de projets, devis, factures.  
      Nous ne collectons aucune donnée sensible (origine raciale, opinions
      politiques, santé, etc.).
    `,
  },
  {
    title: '3. Finalités et bases légales',
    content: `
      • Fournir nos services et répondre aux demandes : exécution du contrat.  
      • Prospection et infolettre : consentement ou intérêt légitime.  
      • Statistiques anonymes de fréquentation : intérêt légitime.  
      • Respect des obligations légales (comptabilité, fiscalité).
    `,
  },
  {
    title: '4. Durées de conservation',
    content: `
      • Comptes clients : 3 ans après la dernière interaction.  
      • Devis / factures : 10 ans (obligation légale).  
      • Cookies analytiques : 13 mois maximum.  
      Au‑delà, les données sont anonymisées ou supprimées en sécurité.
    `,
  },
  {
    title: '5. Destinataires & sous‑traitants',
    content: `
      Les données sont accessibles uniquement :  
      • À nos équipes internes (production, commercial, comptabilité).  
      • À nos sous‑traitants (hébergeur, outil CRM, plateforme d’e‑mailing)
        dans le strict cadre de leur mission et sous clauses contractuelles
        conformes au RGPD.  
      Aucun transfert hors UE sans garanties suffisantes.
    `,
  },
  {
    title: '6. Vos droits',
    content: `
      Conformément aux articles 15 à 22 du RGPD, vous disposez des droits
      suivants : accès, rectification, effacement, limitation, opposition,
      portabilité et directives post‑mortem.  
      Pour les exercer, contactez‑nous :  
      • E‑mail : ${site.dpoMail}  
      • Téléphone : ${site.dpoTel}  
      Réponse sous 1 mois (2 max en cas de complexité).
    `,
  },
  {
    title: '7. Cookies',
    content: `
      Le Site utilise :  
      • Cookies strictement nécessaires (session, préférences).  
      • Cookies analytiques anonymisés (Matomo / Google Analytics).  
      Vous pouvez gérer vos consentements via le bandeau ou les paramètres
      du navigateur. Voir notre politique complète sur les cookies.
    `,
  },
  {
    title: '8. Sécurité',
    content: `
      Nous mettons en œuvre des mesures techniques et organisationnelles :
      chiffrement TLS, pare‑feu, sauvegardes chiffrées, contrôle d’accès
      restreint, audits réguliers. En cas de violation, nous notifierons la
      CNIL et les personnes concernées dans les 72 h.
    `,
  },
  {
    title: '9. Mise à jour de la politique',
    content: `
      Cette politique pourra être modifiée pour refléter les évolutions
      légales ou techniques. La date de dernière mise à jour figure ci‑dessous.
      Nous vous invitons à la consulter régulièrement.
    `,
  },
];

/* ============================================================================
   COMPOSANT PRINCIPAL
   ============================================================================ */
export default function Privacy() {
  return (
    <>
      {/* ===== HERO COURT ===== */}
      <section
        className="relative h-56 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/privacy-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      {/* ===== CONTENU ===== */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 space-y-12">
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="leading-relaxed whitespace-pre-line">{content.trim()}</p>
            </div>
          ))}

          <p className="text-sm text-gray-500 mt-8">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>
    </>
  );
}
