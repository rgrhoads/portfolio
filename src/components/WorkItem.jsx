import React from "react";

const WorkItem = ({ year, company, title, duration, details, bullets, projects = [] }) => {
  const hasBullets = Array.isArray(bullets) && bullets.length > 0;
  return (
    <ol className="flex flex-col relative">
      <li className="mb-10 ml-4">
        <div className="rounded-lg bg-white/80 backdrop-blur-sm shadow p-4 sm:p-5">
          <div className="flex flex-col gap-1.5 text-sm">
            <span className="inline-block w-fit px-2 py-1 font-semibold text-white bg-[#507D96] rounded-md">
              {year}
            </span>
            <span className="text-lg sm:text-xl font-semibold text-[#507D96]">{title}</span>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-semibold text-stone-500">
                {"@ " + company}
              </span>
              {duration && (
                <span className="text-sm font-normal leading-none text-stone-400">
                  • {duration}
                </span>
              )}
            </div>
          </div>
          {details && !hasBullets && (
            <p className="mt-3 text-base font-normal text-stone-700">{details}</p>
          )}
          {Array.isArray(projects) && projects.length > 0 && (
            <div className="mt-4">
              <h4 className="text-[#3A6080] font-semibold">Projects at {company}</h4>
              <div className="mt-2 grid gap-3">
                {projects.map((p, i) => (
                  <div key={i} className="rounded-md bg-white/70 shadow p-3">
                    <div className="text-sm font-medium text-[#2b4c64]">{p.name}</div>
                    {p.description && (
                      <p className="text-sm text-stone-700 mt-1">{p.description}</p>
                    )}
                    {Array.isArray(p.roles) && p.roles.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.roles.map((role, ri) => (
                          <span
                            key={ri}
                            className="px-2 py-0.5 rounded-full bg-[#507D96]/10 text-[#507D96] text-xs font-medium border border-[#507D96]/30"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    )}
                    {Array.isArray(p.contributions) && p.contributions.length > 0 && (
                      <ul className="mt-2 list-disc pl-5 space-y-1 text-stone-700 text-sm">
                        {p.contributions.map((r, ri) => (
                          <li key={ri}>{r}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </li>
    </ol>
  );
};

export default WorkItem;
