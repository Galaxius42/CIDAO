import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';

/* === Pages (placeholders) === */
import Home            from './pages/Home';
import Services        from './pages/Services';
import Realisations    from './pages/Realisations';
import Approach        from './pages/Approach';
import About           from './pages/About';
import Contact         from './pages/Contact';
import Legal           from './pages/Legal';
import Privacy         from './pages/Privacy';
import Sitemap         from './pages/Sitemap';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
           {/* Route générique : toutes les URL affichent simplement MainLayout */}
          <Route path="services"            element={<Services />} />
          <Route path="realisations"        element={<Realisations />} />
          <Route path="notre-demarche"      element={<Approach />} />
          <Route path="a-propos"            element={<About />} />
          <Route path="contact"             element={<Contact />} />
          <Route path="mentions-legales"    element={<Legal />} />
          <Route path="politique-confidentialite" element={<Privacy />} />
          <Route path="plan-du-site"        element={<Sitemap />} />
        </Route>
      </Routes>
    </Router>
  );
}
