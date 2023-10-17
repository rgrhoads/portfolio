import React from "react";
import ProjectItem from "./ProjectItem"

const data = [
    {
        image: "",
        title: "First App",
    },
    {
        image: "",
        title: "Second App",
    },
    {
        image: "",
        title: "Third App",
    },
    {
        image: "",
        title: "Fourth App",
    },
]

const Projects = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4A7090] pb-2">Projects</h1>
            <p className="text-center text-stone-700 py-8">These are my hobby projects! Click on them for more details!</p>
            <div className="grid sm:grid-cols-2 gap-12">
                {data.map((item, idx) => (
                    <ProjectItem img={item.image} title={item.title}/>
                ))}
            </div>
        </div>
    )
}

export default Projects