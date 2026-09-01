import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { skills } from '../../utils/constants';

const About = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="01" title="About" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 lg:gap-20 items-start">
          {/* Biography and focus areas */}
          <div
            className={`transition-all duration-700 ${
              hasIntersected
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="space-y-6 text-nb-muted text-lg leading-8 max-w-3xl">
              <p>
                I am a mechanical engineer and Erasmus Mundus EMSHIP+ scholar
                specializing in the advanced design of sustainable ships and
                offshore structures. My work connects ship design, structural
                mechanics, hydrodynamics and sustainable engineering.
              </p>

              <p>
                Through academic, research and industrial experience across
                Europe, Canada, Türkiye, Taiwan and Pakistan, I have contributed
                to projects involving computational fluid dynamics, finite
                element analysis, CAD, parametric modelling, experimental
                testing and engineering design optimization.
              </p>

              <p>
                I am particularly interested in engineering problems that require
                design, simulation and validation to work together; from ship
                hydrodynamics and offshore structures to lightweight components,
                advanced manufacturing and sustainable transportation systems.
              </p>
            </div>

            {/* Core engineering areas */}
            <div
              className={`mt-12 transition-all duration-700 delay-150 ${
                hasIntersected
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
            >
              <h3 className="font-display font-semibold text-nb-black text-lg mb-6">
                Core Engineering Areas
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
                {skills.map(skill => (
                  <li
                    key={skill}
                    className="flex items-start gap-3 text-sm text-nb-muted"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-marine-600 mt-2 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile image */}
          <figure
            className={`transition-all duration-700 delay-200 ${
              hasIntersected
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative">
              <div
                className="absolute -inset-3 bg-marine-100 rounded-xl translate-x-3 translate-y-3"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-xl bg-nb-gray shadow-brutal-lg">
                <img
                  src="/adina.png"
                  alt="Adina Shaikh wearing her graduation medals"
                  className="w-full aspect-[4/5] object-cover object-center"
                />
              </div>
            </div>

            <figcaption className="mt-5 pl-1">
              <p className="font-display font-semibold text-nb-black">
                Adina Shaikh
              </p>
              <p className="text-sm text-nb-muted mt-1">
                EMSHIP+ Scholar · Mechanical Engineer
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;