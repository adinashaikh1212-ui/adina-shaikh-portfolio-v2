import React, { useEffect, useState } from 'react';
import { scrollToElement } from '../../utils/helpers';
import { personalInfo } from '../../utils/constants';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-nb-white px-6 pt-28 pb-20 lg:px-20 relative overflow-hidden"
    >
      {/* Subtle marine background accent */}
      <div
        className="absolute top-20 right-0 w-[42rem] h-[42rem] rounded-full bg-marine-100/50 blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-14 lg:gap-20 items-end transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Primary introduction */}
          <div>
            <p className="text-marine-700 text-sm font-semibold uppercase tracking-[0.18em] mb-6">
              Mechanical Engineering · Erasmus Mundus EMSHIP+
            </p>

            <h1 className="font-display font-bold text-nb-black text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.04em] mb-6">
              Adina Shaikh
            </h1>

            <h2 className="font-display font-semibold text-nb-muted text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] max-w-3xl mb-6">
              Designing and analysing ships, offshore structures and sustainable
              engineering systems.
            </h2>

            <p className="font-sans text-nb-muted text-lg leading-relaxed max-w-2xl mb-10">
              Erasmus Mundus EMSHIP+ scholar and mechanical engineer working
              across ship design, hydrodynamics, computational fluid dynamics,
              structural analysis, CAD and experimental engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollToElement('projects')}
                className="inline-flex items-center justify-center rounded-md bg-nb-black text-nb-white px-6 py-3.5 font-semibold hover:bg-marine-700 transition-colors duration-200"
              >
                View Selected Projects
              </button>

             
            </div>
          </div>

          {/* Professional summary */}
          <aside className="border-l border-nb-gray-mid pl-7 lg:mb-2">
            <div className="space-y-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700 mb-2">
                  Current
                </p>
                <p className="text-nb-black font-semibold leading-relaxed">
                  International Master in Advanced Design of Sustainable Ships
                  and Offshore Structures
                </p>
                <p className="text-sm text-nb-muted mt-1">
                  Erasmus Mundus EMSHIP+
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700 mb-2">
                  Core Focus
                </p>
                <p className="text-sm text-nb-muted leading-relaxed">
                  Ship design · Offshore structures · CFD · FEA · Sustainable
                  engineering
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700 mb-2">
                  Based in
                </p>
                <p className="text-sm text-nb-muted">
                  {personalInfo.location}
                </p>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-marine-700 hover:text-nb-black transition-colors"
              >
                Contact me
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollToElement('about')}
          className="mt-12 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-nb-muted hover:text-marine-700 transition-colors"
        >
          <span className="w-10 h-px bg-current" />
          Explore portfolio
        </button>
      </div>
    </section>
  );
};

export default Hero;