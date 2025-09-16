import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: "2024 - Present",
        company: "LoneCypress AI",
        title: 'Senior Full Stack Software Engineer',
        duration: "1 Year",
        bullets: [
            'Designed and deployed GreenGenes, a serverless ETL pipeline (S3 → OCR on EC2 → LLM transforms → JSON → APIs/PostgreSQL).',
            'Led RumbleData, an IoT predictive maintenance platform with real-time AWS ingestion (Docker, PostgreSQL).',
            'Managed frontend for RapidVision (React + WebSockets to C++ backend) with advanced viewing modes.',
            'Contributed to CypressDB (Phase I SBIR): optimized OCR, integrated AI via Ollama\'s Granite3.2-vision, demoed to DoD.',
            'Acted as Security Manager; led NIST and CMMC Level 1 compliance efforts.'
        ]
    },
    {
        year: "2021 - 2023",
        company: "GrayMatters Inc. | WaveDancer",
        title: 'Full Stack Software Engineer',
        duration: "2 Years",
        bullets: [
            'Led migration from monolithic Python to Golang microservices for scalability and performance.',
            'Directed frontend transition from Vue.js to React and redesigned UX/UI.',
            'Built reusable Golang libraries to reduce duplication and improve maintainability.',
            'Implemented middleware APIs connecting React to Hyperledger Fabric (assets, contracts, chat, UI integration).'
        ]
    },
    {
        year: "2016-2021",
        company: "SNC, MAG Aerospace, Leidos",
        title: 'Field Service Engineer',
        duration: "6 Years",
        bullets: [
            'Led real-time intelligence and communications support across multiple ground teams in deployed operations.',
            'Built and delivered training programs; instructed 30+ analysts with >95% pass rate.',
            'Promoted to lead analyst; managed 15–20 analysts and coordinated overseas travel/24×7 coverage.'
        ]
    },
    {
        year: "2012-2016",
        company: "Best Buy, Apple",
        title: 'Retail Sales',
        bullets: [
            'Led training for 100+ employees; maintained Apple brand standards in-store.',
            'Apple vendor representative; trained staff on Apple products and sales practices.',
            'Advanced from computer sales to multi-channel sales across in-store and online.'
        ]
    },
    {
        year: "2006-2012",
        company: "United States Air Force",
        title: 'Airborne Korean Linguist',
        duration: "6 Years",
        bullets: [
            'Completed 100+ air operation missions; supported mission planning, communications, and intelligence.',
            'Served as Korean language expert across diverse roles and mission sets.'
        ]
    },
]

const Work = () => {
    return (
        <div id="work" className="container mx-auto px-4 py-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow p-6 min-w-[320px] max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-[#4A7090] pb-2">
                    Work
                </h1>
                {data.map((item, idx) => (
                    <WorkItem 
                        key={idx} 
                        year={item.year} 
                        company={item.company}
                        title={item.title} 
                        duration={item.duration} 
                        details={item.details}
                        bullets={item.bullets}
                    />    
                ))}
            </div>
        </div>
    )
}

export default Work