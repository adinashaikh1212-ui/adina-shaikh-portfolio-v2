import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import {
  softwareCategories,
  languages
} from '../../utils/constants';

const SoftwareLogo = ({ tool }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="w-14 h-14 rounded-lg bg-white border border-nb-gray-mid flex items-center justify-center shrink-0 overflow-hidden">
      {!imageFailed ? (
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="w-10 h-10 object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span className="font-display font-bold text-sm text-marine-700">
          {tool.initials}
        </span>
      )}
    </div>
  );
};

const Software = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-nb-gray"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="05" title="Technical Skills & Languages" />

        <div
          className={`transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="mb-14">
  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-3">
    Engineering Software
  </p>

  <h3 className="font-display font-bold text-nb-black text-2xl md:text-3xl">
    Software &amp; Engineering Tools
  </h3>
        </div>
          <p className="text-nb-muted text-lg leading-8 max-w-3xl mb-12">
            Software applied across academic, research, industrial and
            team-based engineering projects. Tools are grouped according to
            their primary use in my work.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
            {softwareCategories.map(category => (
              <section key={category.category}>
                <h3 className="font-display font-semibold text-nb-black text-lg mb-5 pb-3 border-b border-nb-gray-mid">
                  {category.category}
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.tools.map(tool => (
                    <li
                      key={tool.name}
                      className="flex items-center gap-4 rounded-lg bg-white border border-nb-gray-mid p-4 hover:border-marine-300 hover:shadow-brutal-sm transition-all duration-200"
                    >
                      <SoftwareLogo tool={tool} />

                      <span className="text-sm font-semibold text-nb-black leading-tight">
                        {tool.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="mt-20">
  <div className="mb-8">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-3">
      Communication
    </p>

    <h3 className="font-display font-bold text-nb-black text-2xl md:text-3xl">
      Languages
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
    {languages.map(language => (
      <article
        key={language.name}
        className="rounded-xl border border-nb-gray-mid bg-white p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display font-bold text-nb-black text-lg">
            {language.name}
          </h4>

          <span className="rounded-full bg-marine-100 text-marine-800 px-3 py-1 text-xs font-semibold">
            {language.level}
          </span>
        </div>

        <p className="text-sm text-nb-muted mt-4">
          {language.detail}
        </p>
      </article>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Software;