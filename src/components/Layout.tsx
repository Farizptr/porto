import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';
import { useEffect, useRef, useState } from 'react';

const Layout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      console.log('Sidebar container styles:', {
        width: window.getComputedStyle(containerRef.current).width,
        display: window.getComputedStyle(containerRef.current).display,
        position: window.getComputedStyle(containerRef.current).position,
        dimensions: containerRef.current.getBoundingClientRect()
      });
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen bg-background-dark">
      {/* Desktop Sidebar - hidden on mobile */}
      <div ref={containerRef} className="hidden md:block">
        <Sidebar />
      </div>

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
        className="content-area pt-20 md:px-20 text-primary-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;
