import React from 'react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

/* ===============================================================
   Palette bois + carbone cohérente avec le site
   =============================================================== */
const wood   = 'bg-[#cfa97e] dark:bg-neutral-900';
const accent = 'text-[#7b4a21] text-creme';
const carbonTexture = "url('/assets/carbon-fiber.png')";

export default function Contact() {
  const infos = {
    company: 'CIDAO – Atelier Durable',
    address: '12 rue des Makers, 75011 Paris, France',
    telRaw: '+33102030405',
    telDisplay: '+33 1 02 03 04 05',
    email: 'contact@cidao.fr',
    mapsEmbed: 'https://maps.app.goo.gl/x8WSvvQHabNc9TzW8',
    hours: [
      { day: 'Lundi',    time: '09 h – 18 h' },
      { day: 'Mardi',    time: '09 h – 18 h' },
      { day: 'Mercredi', time: '09 h – 18 h' },
      { day: 'Jeudi',    time: '09 h – 18 h' },
      { day: 'Vendredi', time: '09 h – 17 h' },
      { day: 'Samedi',   time: 'Sur rendez‑vous' },
      { day: 'Dimanche', time: 'Fermé' },
    ],
    calendly: 'https://calendly.com/cidao/appel-découverte',
  };

  return (
    <>
      {/* HERO bois */}
      <section className="section-bois">
        <div className="absolute inset-0 -z-10 bg-[url('/assets/wood-texture.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-black/40" />
        <div className="flex h-full items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Contact</h1>
        </div>
      </section>

      {/* COORDONNÉES */}
      <section className="section-carbon">
        <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">
          {/* Colonne gauche */}
          <div className="space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className={`text-3xl font-bold mb-4 ${accent}`}>{infos.company}</h2>
              <ul className="space-y-3 text-lg text-creme">
                <li className="flex items-start gap-3">
                  <Phone className={`mt-1 ${accent}`} />
                  <a href={`tel:${infos.telRaw}`} className="hover:underline">{infos.telDisplay}</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className={`mt-1 ${accent}`} />
                  <a href={`mailto:${infos.email}`} className="hover:underline">{infos.email}</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className={`mt-1 ${accent}`} />
                  <address className="not-italic">{infos.address}</address>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-2xl font-semibold mb-4 text-creme">Horaires d’ouverture</h3>
              <table className="w-full text-left border-separate border-spacing-x-4 text-creme">
                <tbody>
                  {infos.hours.map(({ day, time }) => (
                    <tr key={day}>
                      <td className="py-1">{day}</td>
                      <td className="py-1 font-medium">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-4">
              <a href={`tel:${infos.telRaw}`} className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition">
                <Phone size={18} /> Appeler
              </a>
              <a href={infos.calendly} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-full border border-blue-600 px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                <Calendar size={18} /> Rendez‑vous
              </a>
            </motion.div>
          </div>

          {/* Carte */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="w-full h-80 lg:h-full rounded-2xl overflow-hidden shadow">
            <iframe title="Localisation CIDAO" src={infos.mapsEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </motion.div>
        </div>
      </section>

      {/* FORMULAIRE placeholder */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className={`text-3xl font-bold mb-8 ${accent}`}>Écris‑nous directement</h2>
          <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Le formulaire arrive bientôt ! En attendant, contacte‑nous par téléphone, e‑mail ou Calendly.</p>
        </div>
      </section>
    </>
  );
}
