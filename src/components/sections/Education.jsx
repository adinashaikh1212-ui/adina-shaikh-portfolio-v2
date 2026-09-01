import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { education } from '../../utils/constants';

const Education = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="02" title="Education" />

        <div
          className={`divide-y divide-nb-gray-mid border-t border-b border-nb-gray-mid transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {education.map(item => (
            <article
              key={`${item.degree}-${item.institution}`}
              className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-5 md:gap-12 py-10 md:py-12"
            >
              {/* Dates and location */}
              <div>
                <p className="text-sm font-semibold text-marine-700">
                  {item.range}
                </p>

                <p className="text-sm text-nb-muted leading-relaxed mt-2">
                  {item.location}
                </p>
              </div>

              {/* Degree information */}
              <div>
                <h3 className="font-display font-bold text-nb-black text-xl md:text-2xl tracking-[-0.02em] leading-tight">
                  {item.degree}
                </h3>

                <p className="text-base font-semibold text-marine-700 mt-2">
                  {item.institution}
                </p>

                {item.details?.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {item.details.map(detail => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-nb-muted text-[15px] leading-7"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-marine-600 mt-[0.65rem] shrink-0"
                          aria-hidden="true"
                        />

                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;