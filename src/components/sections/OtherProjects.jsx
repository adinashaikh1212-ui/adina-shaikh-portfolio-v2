import React, { useState } from 'react';
import OtherProjectCard from '../ui/OtherProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { otherProjects } from '../../utils/constants';

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, , hasIntersected] = useIntersectionObserver();

  const displayedProjects = showMore
    ? otherProjects
    : otherProjects.slice(0, 6);

  return (
    <section
      ref={ref}
      className="py-24 md:py-28 px-6 lg:px-20 bg-nb-gray"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-3">
            Additional Work
          </p>

          <h2 className="font-display font-bold text-nb-black text-3xl md:text-4xl tracking-[-0.025em]">
            Additional Engineering Projects
          </h2>

          <p className="text-nb-muted text-lg leading-8 max-w-3xl mt-5">
            Academic, research and team-based work across ship design,
            hydrodynamics, structural analysis, vehicle engineering and
            sustainable energy systems.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {displayedProjects.map(project => (
            <OtherProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {otherProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center justify-center rounded-md border border-nb-gray-mid bg-white text-nb-black px-6 py-3 text-sm font-semibold hover:border-marine-600 hover:text-marine-700 transition-colors"
            >
              {showMore
                ? 'Show Fewer Projects'
                : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherProjects;