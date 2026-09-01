import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { workExperience } from '../../utils/constants';

const Experience = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-nb-gray"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="03" title="Experience" />

        <div
          className={`transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="divide-y divide-nb-gray-mid border-t border-b border-nb-gray-mid">
            {workExperience.map((job, index) => (
              <article
                key={`${job.title}-${job.company}`}
                className="grid grid-cols-1 md:grid-cols-[210px_1fr] gap-5 md:gap-12 py-10 md:py-12"
                style={{
                  transitionDelay: `${index * 80}ms`
                }}
              >
                {/* Date and location */}
                <div>
                  <p className="text-sm font-semibold text-marine-700">
                    {job.range}
                  </p>

                  {job.location && (
                    <p className="text-sm text-nb-muted leading-relaxed mt-2">
                      {job.location}
                    </p>
                  )}
                </div>

                {/* Position information */}
                <div>
                  <h3 className="font-display font-bold text-nb-black text-xl md:text-2xl tracking-[-0.02em]">
                    {job.title}
                  </h3>

                  <div className="mt-2">
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base font-semibold text-marine-700 hover:text-nb-black transition-colors"
                      >
                        {job.company}
                        <span
                          className="text-xs"
                          aria-hidden="true"
                        >
                          ↗
                        </span>
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-marine-700">
                        {job.company}
                      </p>
                    )}
                  </div>

                  {/* Research project details */}
                  {(job.project || job.supervisor) && (
                    <div className="mt-5 border-l-2 border-marine-300 pl-4">
                      {job.project && (
                        <p className="text-sm text-nb-black font-medium leading-relaxed">
                          Project: {job.project}
                        </p>
                      )}

                      {job.supervisor && (
                        <p className="text-sm text-nb-muted mt-1">
                          Supervisor: {job.supervisor}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Responsibilities and achievements */}
                  <ul className="mt-6 space-y-3">
                    {job.description.map(item => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-nb-muted text-[15px] leading-7"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-marine-600 mt-[0.65rem] shrink-0"
                          aria-hidden="true"
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;