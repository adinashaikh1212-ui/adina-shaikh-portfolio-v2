import { ExternalLinkIcon } from '../common/Icons';

const FeaturedProjectCard = ({
  project,
  flip = false
}) => {
  return (
    <article className="border-t border-nb-gray-mid py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Technical image */}
        <div className={flip ? 'lg:order-2' : ''}>
          <div className="rounded-xl overflow-hidden bg-nb-gray border border-nb-gray-mid">
            <img
              src={project.image}
              alt={`${project.title} engineering project`}
              className="w-full aspect-[16/10] object-contain"
            />
          </div>
        </div>

        {/* Case-study summary */}
        <div className={flip ? 'lg:order-1' : ''}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700">
              Selected Project
            </p>

            {project.projectType && (
  <>
    <span
      className="hidden sm:block w-1 h-1 rounded-full bg-nb-gray-mid"
      aria-hidden="true"
    />

    <p className="text-xs font-medium text-nb-muted">
      {project.projectType}
    </p>
  </>
)}
{project.period && (
  <>
    <span
      className="hidden sm:block w-1 h-1 rounded-full bg-nb-gray-mid"
      aria-hidden="true"
    />

    <p className="text-xs font-medium text-nb-muted">
      {project.period}
    </p>
  </>
)}
          </div>

          <h3 className="font-display font-bold text-nb-black text-2xl md:text-3xl tracking-[-0.025em] leading-tight">
            {project.title}
          </h3>

          <p className="text-nb-muted text-[15px] leading-7 mt-6">
            {project.description}
          </p>
          {project.contributions?.length > 0 && (
  <div className="mt-7">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700 mb-4">
      My Contribution
    </p>

    <ul className="space-y-3">
      {project.contributions.map(contribution => (
        <li
          key={contribution}
          className="flex items-start gap-3 text-sm text-nb-muted leading-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-nb-black mt-2 shrink-0"
            aria-hidden="true"
          />

          <span>{contribution}</span>
        </li>
      ))}
    </ul>
  </div>
)}
          {project.highlights?.length > 0 && (
  <div className="mt-7">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700 mb-4">
      Technical Highlights
    </p>

    <ul className="space-y-3">
      {project.highlights.map(highlight => (
        <li
          key={highlight}
          className="flex items-start gap-3 text-sm text-nb-muted leading-6"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-marine-600 mt-2 shrink-0"
            aria-hidden="true"
          />

          <span>{highlight}</span>
        </li>
      ))}
    </ul>
  </div>
)}

          {/* Methods and software */}
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-7">
            {project.technologies.map(technology => (
              <li
                key={technology}
                className="text-sm font-medium text-nb-black flex items-center gap-2"
              >
                <span
                  className="w-1 h-1 rounded-full bg-marine-600"
                  aria-hidden="true"
                />
                {technology}
              </li>
            ))}
          </ul>

          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-marine-700 hover:text-nb-black transition-colors"
              aria-label={`View supporting information for ${project.title}`}
            >
              <ExternalLinkIcon className="w-4 h-4" />
              <span>{project.linkLabel || 'View project details'}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;