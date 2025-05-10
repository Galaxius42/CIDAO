import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MobileLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:hidden">
      {/* Le Header se charge déjà de la navigation mobile (burger) */}
      <Header />
      <main className="flex-1 overflow-auto"> <Outlet /> </main>
      <Footer />
    </div>
  );
}
