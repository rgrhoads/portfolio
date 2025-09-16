import React from "react";
import ProjectItem from "./ProjectItem"

const data = [
    {
        image: "https://raw.githubusercontent.com/hr-rfp55-venusaur/CulturePunk/main/demos/Homepage.gif",
        title: "Culture Punk",
        link: "https://github.com/hr-rfp55-venusaur/CulturePunk/tree/main"
    },
    {
        image: "/TTT.png",
        title: "Tic-Tac-Toe",
        link: "https://github.com/rgrhoads/Modren"
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
    return (
        <div id="projects" className="container mx-auto px-4 py-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow p-6 min-w-[320px] max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#4A7090] pb-2">Projects</h1>
                <p className="text-center text-stone-700 py-8">Take a look at some of the projects I've worked on! Click to get more info!</p>
                <div className="grid sm:grid-cols-2 gap-12">
                    {data.map((item, idx) => (
                        <ProjectItem key={idx} img={item.image} title={item.title} link={item.link}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects