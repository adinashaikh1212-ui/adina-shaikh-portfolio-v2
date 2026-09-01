import React from 'react';
import { personalInfo, socialLinks } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkedin = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <footer className="bg-nb-black text-nb-white px-6 lg:px-20">
      <div className="max-w-6xl mx-auto py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <p className="font-display font-semibold">
            Adina Shaikh
          </p>

          <p className="text-sm text-nb-white/65 mt-1">
            Marine, Offshore &amp; Mechanical Engineer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-nb-white/75 hover:text-white transition-colors"
          >
            Email
          </a>

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-nb-white/75 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          )}

         
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/15 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-nb-white/55">
        <p>
          © {currentYear} Adina Shaikh
        </p>

        <p>
          {personalInfo.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;