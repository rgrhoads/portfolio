import React, { useRef } from "react";

const ProjectItem = ({img, title, description, onOpen}) => {
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
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#507D96] cursor-pointer"
        >
            <img 
                src={img} 
                alt={title}
                className="rounded-xl group-hover:opacity-10 object-fill h-64 w-full"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">More Info</p>
            </div>
        </div>
    )
}

export default ProjectItem