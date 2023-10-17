import React from "react";
import WorkItem from "./WorkItem";

const data = [
    {
        year: "2021 - Present",
        company: "Gray Matters Inc",
        title: 'Fullstack Software Engineer',
        duration: "2 Years",
        details: 'I am currently part of a small team of developers building a blockchain inventory management / shipping and logistics platform. While on this team I have filled the role of front-end, back-end and dev-ops engineer. As a front-end developer I have used React to build intuitive user interfaces. As a back-end developer I have built multiple full CRUD API microservices in Golang. As a devops engineer I have built intricate CI/CD pipelines through GitLab to deploy our services to AWS hosted EC2s. I am comfortable and enjoy working in multiple roles, assisting the team accomplish complicated customer requirements.' 
    },
    {
        year: "2016-2021",
        company: "SNC, MAG Aerospace, Leidos",
        title: 'Airborne Intelligence Analyst',
        duration: "6 Years",
        details: 'As an analyst I worked overseas in support of various government and military customers. I was responsible for coordinating with multiple ground teams simultaneously to provide realtime intelligence and communication support in deployed locations. After 2 years as an analyst I became an instructor, respnsible for building training programs and developing new analysts. During my 2 years as an instructor I trained over 30 analysts with a success rate over 95%. I was eventually promoted to lead analyst where I was responsible for a team of 15-20 analysts. I coordinated overseas travel and managed our on-site personnel in order to maintain 24 hour, real time support, to our various customers.' 
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