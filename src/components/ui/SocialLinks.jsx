import React from 'react';
import { socialLinks } from '../../utils/constants';
import { LinkedinIcon } from '../common/Icons';

const SocialLinks = ({
  orientation = 'vertical',
  className = ''
}) => {
  return (
    <div
      className={`${
        orientation === 'vertical'
          ? 'flex flex-col gap-4'
          : 'flex flex-row gap-4 items-center'
      } ${className}`}
    >
      {socialLinks.map(social => {
        if (social.icon !== 'linkedin') {
          return null;
        }

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Adina Shaikh on LinkedIn"
            title="LinkedIn"
            className="text-nb-muted hover:text-nb-black hover:-translate-y-0.5 transition-all duration-150"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;