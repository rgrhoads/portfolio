import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: "2024 - Present",
        company: "LoneCypress AI",
        title: 'Senior Full Stack Software Engineer',
        duration: "1 Year",
        details: 'Designed and deployed GreenGenes, a serverless ETL pipeline (S3 ingest → OCR on EC2 → LLM transforms → structured JSON → APIs/PostgreSQL). Led development of RumbleData, an IoT predictive maintenance platform with real-time ingestion on AWS using Docker & PostgreSQL. Managed frontend for RapidVision, a real-time camera control UI (React + WebSockets to C++ backend) with complex viewing modes and dynamic controls. Contributed to CypressDB (Phase I SBIR): optimized OCR pipelines, integrated AI via Ollama\'s Granite3.2-vision, and presented the final demo to DoD stakeholders. Acted as Security Manager, leading NIST and CMMC Level 1 compliance efforts.' 
    },
    {
        year: "2021 - 2023",
        company: "GrayMatters Inc. | WaveDancer",
        title: 'Full Stack Software Engineer',
        duration: "2 Years",
        details: 'Led migration from a monolithic Python codebase to Golang microservices, improving scalability and performance. Directed frontend transition from Vue.js to React, redesigning UX/UI. Built reusable Golang libraries to reduce duplication and improve maintainability. Implemented middleware APIs connecting React to Hyperledger Fabric for real-time asset tracking, contracts, chat, and UI integration.' 
    },
    {
        year: "2016-2021",
        company: "SNC, MAG Aerospace, Leidos",
        title: 'Airborne Intelligence Analyst',
        duration: "6 Years",
        details: 'As an analyst I worked overseas in support of various government and military customers. I was responsible for coordinating with multiple ground teams simultaneously to provide realtime intelligence and communication support in deployed locations. After 2 years as an analyst I became an instructor, responsible for building training programs and developing new analysts. During my 2 years as an instructor I trained over 30 analysts with a success rate over 95%. I was eventually promoted to lead analyst where I was responsible for a team of 15-20 analysts. I coordinated overseas travel and managed our on-site personnel in order to maintain 24 hour, real time support, to our various customers.' 
    },
    {
        year: "2012-2016",
        company: "Best Buy, Apple",
        title: 'Retail Sales',
        duration: "4 Years",
        details: 'I began as a computer sales associate but eventually moved into a multi-channel sales associate responsible for all products in person and online. Eventually I was promoted to a lead position where I was in charge of managing all training for over 100 employees at our locations. I was eventually hired by Apple to manage all Apple product sales at our Best Buy location. In this position I was responsible for training Best Buy employees on Apple products and maintaining the Apple brand within the store.' 
    },
    {
        year: "2006-2012",
        company: "United States Air Force",
        title: 'Airborne Korean Linguist',
        duration: "6 Years",
        details: 'While in the United States Air Force I worked in various capacities as Korean language expert. I completed over 100 air operation missions where I assisted in building mission plans and providing airborne communication and intelligence support to a wide range of both ground teams and other air assets to successfully complete deployed operations.' 
    },
]

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
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
                />    
            ))}
        </div>
    )
}

export default Work