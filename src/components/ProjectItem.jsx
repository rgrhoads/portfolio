import React, { useRef } from "react";

const ProjectItem = ({ img, title, description, onOpen }) => {
  const containerRef = useRef(null);

  const handleOpen = (e) => {
    e.stopPropagation();
    const rect = containerRef.current?.getBoundingClientRect();
    onOpen && onOpen({ image: img, title, description }, rect);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleOpen}
      className="rounded-lg bg-white/80 backdrop-blur-sm shadow p-4 sm:p-5 cursor-pointer transition hover:shadow-md"
    >
      <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-50">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <h3 className="mt-1 text-lg sm:text-xl font-semibold text-[#507D96]">{title}</h3>
      {description && (
        <p className="mt-2 text-stone-700 text-sm max-h-24 overflow-hidden">{description}</p>
      )}
      <div className="mt-3 text-sm font-medium text-[#4A7090]">More Info →</div>
    </div>
  );
};

export default ProjectItem;
