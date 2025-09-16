import React from "react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages & Frameworks",
            skills: ["Python", "Golang", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Node", "Express", "Flask", "React", "Vue", "Redux", "Django"]
        },
        {
            title: "Databases & Testing",
            skills: ["PostgreSQL", "MySQL", "MongoDB", "TDD", "Unit Testing", "Integration Testing", "Jest", "JUnit", "Selenium"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Docker", "CI/CD", "Terraform", "Ansible", "Redis", "Kafka", "Auth0", "Git", "GitHub", "GitLab"]
        },
        {
            title: "Domains",
            skills: ["Network Protocols", "Distributed Systems", "Full-Stack Development", "DevOps", "AI/ML Integration", "IoT Platforms"]
        }
    ];

    return (
        <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4A7090] pb-2">Skills</h1>
            <p className="text-center text-stone-700 py-8">Technologies and tools I work with professionally</p>
            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-[#4A7090] mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span 
                                    key={skillIdx}
                                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
