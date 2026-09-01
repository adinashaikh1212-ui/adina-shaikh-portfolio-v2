import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { personalInfo, socialLinks } from '../../utils/constants';

const Contact = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();
  const linkedin = socialLinks.find(link => link.icon === 'linkedin');

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-6 lg:px-20 bg-nb-gray"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading number="07" title="Contact" />

        <div
          className={`grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 transition-all duration-700 ${
            hasIntersected
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Contact introduction */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-marine-700 mb-4">
              Let&apos;s Connect
            </p>

            <h3 className="font-display font-bold text-nb-black text-3xl md:text-4xl tracking-[-0.025em] leading-tight">
              Interested in discussing an engineering opportunity or
              collaboration?
            </h3>

            <p className="text-nb-muted text-lg leading-8 mt-6 max-w-2xl">
              I welcome conversations related to marine, offshore and
              mechanical engineering, research collaboration and technical
              project work.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center rounded-md bg-nb-black text-nb-white px-6 py-3.5 font-semibold mt-9 hover:bg-marine-700 transition-colors"
            >
              Send an Email
            </a>
          </div>

          {/* Contact details */}
          <div className="border-l border-nb-gray-mid pl-0 lg:pl-10">
            <dl className="divide-y divide-nb-gray-mid border-t border-b border-nb-gray-mid">
              <div className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-nb-black font-medium hover:text-marine-700 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </dd>
              </div>

              <div className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700">
                  Location
                </dt>
                <dd className="text-nb-black font-medium mt-2">
                  {personalInfo.location}
                </dd>
              </div>

              {linkedin && (
                <div className="py-5">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-marine-700">
                    Professional Profile
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nb-black font-medium hover:text-marine-700 transition-colors"
                    >
                      LinkedIn ↗
                    </a>
                  </dd>
                </div>
              )}

             
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;