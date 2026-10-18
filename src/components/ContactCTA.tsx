import { SITE, SOCIAL_LINKS } from '../data/site';

const ContactCTA = () => {
  return (
    <section aria-labelledby="contact-cta-title" className="mb-12 mt-20 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/30 p-8 md:p-10">
      <h2 id="contact-cta-title" className="text-2xl font-semibold text-primary-dark md:text-3xl">Let's build something together</h2>
      <p className="mt-2 max-w-xl text-secondary-dark">Open to backend and full-stack opportunities. The fastest way to reach me is email.</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 rounded-md bg-teal-400 px-5 py-2.5 font-medium text-gray-950 transition-colors hover:bg-teal-300">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Email me
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-5 py-2.5 font-medium text-primary-dark transition-colors hover:border-teal-400/50">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-600 px-5 py-2.5 font-medium text-primary-dark transition-colors hover:border-teal-400/50">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
