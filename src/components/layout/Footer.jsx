export default function Footer() {
  return (
    <footer className="flex-none bg-gray-100 dark:bg-gray-800 py-6 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} CIDAO — Tous droits réservés
    </footer>
  );
}
