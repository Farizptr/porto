import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  images: string[];
  index: number | null;
  alt: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const Lightbox = ({ images, index, alt, onClose, onIndexChange }: LightboxProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const count = images.length;

  // While open: focus close button, lock body scroll, handle Escape and arrow keys (wrapping).
  useEffect(() => {
    if (index !== null) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        } else if (event.key === 'ArrowLeft') {
          onIndexChange((index - 1 + count) % count);
        } else if (event.key === 'ArrowRight') {
          onIndexChange((index + 1) % count);
        }
      };
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }

    return undefined;
  }, [index, count, onClose, onIndexChange]);

  return createPortal(
    <AnimatePresence>
      {index !== null && (
        <>
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-50 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Viewer */}
          <motion.div
            // biome-ignore lint/a11y/useSemanticElements: native <dialog> top layer conflicts with AnimatePresence exit animation
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} image viewer`}
            className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
          >
            <img
              src={images[index]}
              alt={`${alt} - ${index + 1} of ${count}`}
              className="pointer-events-auto max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />

            <button
              type="button"
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close image viewer"
              className="pointer-events-auto absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => onIndexChange((index - 1 + count) % count)}
                  aria-label="Previous image"
                  className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                >
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => onIndexChange((index + 1) % count)}
                  aria-label="Next image"
                  className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                >
                  <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
                <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-300">
                  {index + 1} / {count}
                </p>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Lightbox;
