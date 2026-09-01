import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FeaturedProjectCard from '../ui/FeaturedProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { featuredProjects } from '../../utils/constants';

const FeaturedProjects = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="04"
          title="Featured Engineering Projects"
        />

        <p className="text-nb-muted text-lg leading-8 max-w-3xl mb-14">
          Selected work demonstrating the integration of engineering design,
          numerical simulation, structural analysis and technical validation.
        </p>

        <div
          className={`border-b border-nb-gray-mid transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              flip={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;