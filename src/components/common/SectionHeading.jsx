import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SectionHeading = ({
  number,
  title,
  className = ''
}) => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <header
      ref={ref}
      className={`mb-14 transition-all duration-700 ${
        hasIntersected
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {number && (
        <p className="text-xs font-semibold text-marine-700 uppercase tracking-[0.2em] mb-3">
          Section {number}
        </p>
      )}

      <div className="flex items-center gap-4 sm:gap-5 min-w-0">
        <h2 className="min-w-0 max-w-full whitespace-normal break-words font-display font-bold text-nb-black text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[-0.025em]">
          {title}
        </h2>

        <span
          className="hidden sm:block h-px min-w-8 flex-1 bg-nb-gray-mid"
          aria-hidden="true"
        />
      </div>
    </header>
  );
};

export default SectionHeading;