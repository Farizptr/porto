import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
              onClick={closeMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                opacity: { duration: 0.2 }
              }}
              className="fixed left-0 top-0 z-40 h-screen w-80 bg-gray-900 border-r border-gray-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-xl font-semibold text-primary-dark">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex flex-col p-6 space-y-2">
                {[
                  { to: "/", label: "Home" },
                  { to: "/projects", label: "Projects" },
                  { to: "/about", label: "About" },
                  { to: "/resume", label: "Resume" }
                ].map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                          isActive
                            ? 'text-primary-dark bg-gray-800 border-l-4 border-primary-dark'
                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Social Links */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm text-gray-400 mb-4">Connect with me</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Farizptr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/farizptr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
