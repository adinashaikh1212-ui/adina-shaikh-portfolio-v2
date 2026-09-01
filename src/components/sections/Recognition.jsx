import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { scholarships, awards } from '../../utils/constants';

const EvidenceLinks = ({ item }) => {
  if (!item.evidenceUrl && !item.certificate) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 mt-5">
      {item.evidenceUrl && (
        <a
          href={item.evidenceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-marine-700 hover:text-nb-black transition-colors"
        >
          View supporting source ↗
        </a>
      )}

      {item.certificate && (
        <a
          href={item.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-marine-700 hover:text-nb-black transition-colors"
        >
          View certificate ↗
        </a>
      )}
    </div>
  );
};

const Recognition = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="recognition"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="06"
          title="Scholarships & Recognition"
        />

        <div
          className={`transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Scholarships */}
          <div>
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-2">
                Academic Funding
              </p>

              <h3 className="font-display font-bold text-nb-black text-2xl md:text-3xl">
                Scholarships
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {scholarships.map(item => (
                <article
                  key={item.title}
                  className="rounded-xl border border-nb-gray-mid bg-nb-gray/50 p-6"
                >
                  <p className="text-sm font-semibold text-marine-700">
                    {item.year}
                  </p>

                  <h4 className="font-display font-bold text-nb-black text-lg leading-snug mt-3">
                    {item.title}
                  </h4>

                  <p className="text-sm font-medium text-nb-muted mt-2">
                    {item.organization}
                  </p>

                  <p className="text-sm text-nb-muted leading-6 mt-5">
                    {item.description}
                  </p>

                  <EvidenceLinks item={item} />
                </article>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mt-20">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-2">
                Awards and Leadership
              </p>

              <h3 className="font-display font-bold text-nb-black text-2xl md:text-3xl">
                Honours &amp; Distinctions
              </h3>
            </div>

            <div className="divide-y divide-nb-gray-mid border-t border-b border-nb-gray-mid">
              {awards.map(item => (
                <article
                  key={`${item.title}-${item.year}`}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-10 py-8"
                >
                  <p className="text-sm font-semibold text-marine-700">
                    {item.year}
                  </p>

                  <div>
                    <h4 className="font-display font-bold text-nb-black text-lg md:text-xl">
                      {item.title}
                    </h4>

                    <p className="text-sm font-medium text-nb-muted mt-1">
                      {item.organization}
                    </p>

                    <p className="text-sm text-nb-muted leading-7 mt-4 max-w-3xl">
                      {item.description}
                    </p>

                    <EvidenceLinks item={item} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;