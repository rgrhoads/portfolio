import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem"

const data = [
    {
        image: "/vite.svg",
        title: "SynthGen",
        description: "Synthetic data generation toolkit to create privacy-preserving datasets for AI/ML development."
    },
    {
        image: "/vite.svg",
        title: "CypressDB",
        description: "SBIR Phase I effort; OCR optimization, AI integration, and rapid demo delivery to stakeholders."
    },
    {
        image: "/vite.svg",
        title: "RumbleData",
        description: "IoT predictive maintenance platform with real-time ingestion and dashboards on AWS."
    },
    {
        image: "/vite.svg",
        title: "GreenGenes",
        description: "Serverless ETL pipeline (S3 → OCR → LLM transforms → JSON → APIs/PostgreSQL)."
    },
    {
        image: "https://raw.githubusercontent.com/hr-rfp55-venusaur/CulturePunk/main/demos/Homepage.gif",
        title: "Culture Punk",
        description: "Music discovery and curation app; collaborative playlists and real-time interactions."
    },
    {
        image: "/TTT.png",
        title: "Tic-Tac-Toe",
        description: "Classic game implementation used for practicing component-driven UI patterns."
    },
    // {
    //     image: "",
    //     title: "Third App",
    //     link: "#projects"
    // },
    // {
    //     image: "",
    //     title: "Fourth App",
    //     link: "#projects"
    // },
]

const Projects = () => {
    const [active, setActive] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [originRect, setOriginRect] = useState(null);
    const [animStyle, setAnimStyle] = useState(null);
    const [targetBox, setTargetBox] = useState(null);

    const computeTargetBox = () => {
        const padding = 32; // viewport padding
        const maxW = Math.min(960, window.innerWidth - padding * 2);
        const maxH = Math.min(Math.round(window.innerHeight * 0.7), window.innerHeight - padding * 2);
        const targetX = Math.round((window.innerWidth - maxW) / 2);
        const targetY = Math.round((window.innerHeight - maxH) / 2);
        return { w: maxW, h: maxH, x: targetX, y: targetY };
    };

    const handleOpen = (item, rect) => {
        setActive(item);
        setOriginRect(rect);

        const target = computeTargetBox();
        setTargetBox(target);

        // Initial transform: card rect -> modal box
        const scaleX = rect.width / target.w;
        const scaleY = rect.height / target.h;
        const startTransform = `translate(${rect.left}px, ${rect.top}px) scale(${scaleX}, ${scaleY})`;
        const endTransform = `translate(${target.x}px, ${target.y}px) scale(1, 1)`;

        setAnimStyle({ transform: startTransform, transition: 'none' });
        setModalOpen(true);

        // Next frame, animate to end transform
        requestAnimationFrame(() => {
            setAnimStyle({ transform: endTransform, transition: 'transform 320ms ease' });
        });
    };
    const handleClose = () => {
        if (originRect && targetBox) {
            // Animate back to card
            const startTransform = `translate(${originRect.left}px, ${originRect.top}px) scale(${originRect.width / targetBox.w}, ${originRect.height / targetBox.h})`;
            setAnimStyle((prev) => ({ ...prev, transform: startTransform, transition: 'transform 260ms ease' }));
            // After animation ends, cleanup
            setTimeout(() => {
                setModalOpen(false);
                setActive(null);
                setOriginRect(null);
                setAnimStyle(null);
                setTargetBox(null);
            }, 260);
        } else {
            setModalOpen(false);
            setActive(null);
            setOriginRect(null);
            setAnimStyle(null);
            setTargetBox(null);
        }
    };

    // Recompute target box and animate to new size on resize
    useEffect(() => {
        if (!modalOpen || !originRect) return;
        const onResize = () => {
            const target = computeTargetBox();
            setTargetBox(target);
            setAnimStyle((prev) => prev ? { ...prev, transform: `translate(${target.x}px, ${target.y}px) scale(1, 1)`, transition: 'transform 180ms ease' } : prev);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [modalOpen, originRect]);

    return (
        <div id="projects" className="container mx-auto px-4 py-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow p-6 min-w-[320px] max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#4A7090] pb-2">Projects</h1>
                <p className="text-center text-stone-700 py-8">Take a look at some of the projects I've worked on! Click to get more info!</p>
                <div className="grid sm:grid-cols-2 gap-12">
                    {data.map((item, idx) => (
                        <ProjectItem key={idx} img={item.image} title={item.title} description={item.description} onOpen={handleOpen} />
                    ))}
                </div>
            </div>

            {modalOpen && active && (
                <div className="fixed inset-0 z-50 p-4">
                    <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

                    {/* Animated shell using FLIP-like transform */}
                    {targetBox && (
                        <div
                            className="fixed top-0 left-0 z-10 will-change-transform"
                            style={animStyle ? { ...animStyle, transformOrigin: 'top left' } : undefined}
                        >
                            <div
                                className="bg-white rounded-xl shadow-2xl overflow-hidden p-3 md:p-4"
                                style={{ width: targetBox.w, height: targetBox.h }}
                            >
                                <div className="grid grid-rows-[auto,1fr] h-full gap-3">
                                    <div className="p-6 overflow-auto">
                                        <h3 className="text-3xl font-bold text-[#2b4c64]">{active.title}</h3>
                                        <p className="mt-3 text-stone-700 text-base leading-relaxed">
                                            {active.description || 'More details coming soon.'}
                                        </p>
                                    </div>
                                    <div className="relative bg-gray-50 flex items-center justify-center overflow-hidden rounded-lg">
                                        <img src={active.image} alt={active.title} className="max-w-full max-h-full object-contain" />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 p-4 border-t">
                                    <button onClick={handleClose} className="px-4 py-2 rounded-md bg-[#4A7090] text-white">Close</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Projects