import React from "react";

const WorkItem = ({year, company, title, duration, details, bullets}) => {
    const hasBullets = Array.isArray(bullets) && bullets.length > 0;
    return (
        <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 font-semibold text-white bg-[#507D96] rounded-md">{year}</span>
                    <span className="text-lg font-semibold text-[#507D96]">{title}</span>
                    <span className="text-lg font-semibold text-stone-500">{"@ " + company}</span>
                    <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
                </p>
                {!hasBullets && (
                    <p className="my-2 text-base font-normal text-stone-700">{details}</p>
                )}
                {hasBullets && (
                    <ul className="my-3 list-disc pl-6 space-y-2 text-stone-700">
                        {bullets.map((item, idx) => (
                            <li key={idx} className="text-base leading-relaxed">{item}</li>
                        ))}
                    </ul>
                )}
            </li>
        </ol>
    )
}

export default WorkItem