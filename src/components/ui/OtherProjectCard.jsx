import { ExternalLinkIcon } from '../common/Icons';

const OtherProjectCard = ({ project }) => {
  return (
    <article className="h-full flex flex-col rounded-xl border border-nb-gray-mid bg-white p-6 hover:border-marine-300 hover:shadow-brutal transition-all duration-200">
      {/* Project type */}
      <div className="flex items-start justify-between gap-4 mb-5">
        {project.projectType && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-marine-700">
            {project.projectType}
          </p>
        )}

        {project.external && (
          <a
            href={project.external}
            target="_blank"
            rel="noopener noreferrer"
            className="text-nb-muted hover:text-marine-700 transition-colors shrink-0"
            aria-label={`View supporting information for ${project.title}`}
            title={project.linkLabel || 'View project details'}
          >
            <ExternalLinkIcon className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Project summary */}
      <h3 className="font-display font-bold text-nb-black text-xl leading-snug tracking-[-0.015em]">
        {project.title}
      </h3>

      <p className="text-nb-muted text-sm leading-7 mt-4 flex-1">
        {project.description}
      </p>

      {/* Methods and tools */}
      <ul className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-nb-gray-mid">
        {project.technologies.map(technology => (
          <li
            key={technology}
            className="rounded-full bg-marine-50 text-marine-800 px-3 py-1 text-xs font-medium"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default OtherProjectCard;