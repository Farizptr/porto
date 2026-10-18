import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import ContactCTA from './ContactCTA';
import { useEffect, useState } from 'react';

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset scroll on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-background-dark">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gray-800 focus:px-4 focus:py-2 focus:text-white">Skip to content</a>

      {/* Desktop Sidebar - hidden on mobile */}
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      {/* Mobile Header */}
      <header className={`fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-4 z-30 md:hidden transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 border-b border-gray-700 backdrop-blur-md'
          : 'bg-background-dark border-b border-gray-800'
      }`}>
        <MobileMenu />
      </header>

      {/* Main Content */}
      <motion.main
        id="main-content"
        tabIndex={-1}
        className="content-area px-4 pb-8 pt-16 md:px-16 md:pt-8 text-primary-dark focus:outline-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <Outlet />
          {pathname !== '/resume' && <ContactCTA />}
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;
