import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2024 - Present",
    company: "LoneCypress AI",
    title: "Senior Full Stack Software Engineer",
    duration: "1 Year",
    bullets: [],
    projects: [
      {
        name: "SynthGen",
        description: "SBIR Phase I for synthetic data generation platform.",
        roles: ["Lead Engineer", "Lead Researcher", "Product Manager"],
        contributions: [
          "Lead the research and development of the synthetic data generation platform",
          "Collaborated with research institutions to better understand the current state of the art in synthetic data generation",
          "Developed the synthetic data generation platform using Fourier transforms, geometric projections (circular, helical, 3D), and signal manipulation",
          "Applied theoretical transformations to the generation of synthetic image variants for training machine learning models",
          "Completed initial prototype of the synthetic data generation platform",
          "Lead monthly meetings and drafted monthly progress reports explaining the progress of the project",
          "Desgiend experiments to rigorously evaluate the performance of the synthetic data generation platform",
          "Created Streamlit dashboard to visualize the capabilities of the synthetic data generation platform",
        ],
      },
      {
        name: "CypressDB",
        description:
          "SBIR Phase I for AI enabled, Retrieval-Augmented Generation (RAG) and semantic search system for ingesting technical documentation from ballistics testing.",
        roles: ["Full Stack Engineer"],
        contributions: [
          "Researched and implemented best practices for RAG and semantic search",
          "Developed ingestion pipeline for technical documentation from ballistics testing",
          "Implemented OCR + LLM normalization for ingesting and indexing technical documentation",
          "Provided demonstration of final prototype to key stakeholders within the DoD",
        ],
      },
      {
        name: "GreenGenes",
        description:
          "Automated PDF-to-JSON pipeline on AWS: S3 triggers OCR (EC2), then NLP (Lambda) normalizes text into structured JSON and posts to an API.",
        roles: ["Lead Engineer", "DevOps Engineer"],
        contributions: [
          "Interacted directly with clients to understand their needs and requirements",
          "Designed and Built ETL orchestration and Lambda handlers",
          "Defined IAM-scoped access and env-config for Lambda functions",
          "Integrated OCR + LLM normalization and API posting to cloud hosted PostgreSQL database",
        ],
      },
      {
        name: "RumbleData",
        description:
          "IoT vehicle monitoring platform with real-time ingestion to AWS and predictive maintenance analytics surfaced across web and mobile.",
        roles: ["Lead Engineer", "DevOps Engineer"],
        contributions: [
          "Managed Mobile and Backend developmers ensuring timely delivery of features and bug fixes",
          "Designed cloud architecture and infrastructure using Terraform",
          "Created data model and ingestion strategy for 3rd party API's for vehicle IoT devices",
          "Developed Django backend for managing user accounts and permissions",
          "Implemented dashboards and alerts in React for vehicle data visualization and alerts",
          "Optimized storage and data lifecycle for real-time vehicle data",
        ],
      },
    ],
  },
  {
    year: "2021 - 2023",
    company: "GrayMatters Inc. | WaveDancer",
    title: "Full Stack Software Engineer",
    duration: "2 Years",
    bullets: [],
    projects: [
      {
        name: "Maverix",
        description: "SBIR Phase II for Blockchain based asset management platform.",
        tech: [
          "Golang",
          "React",
          "AWS",
          "Docker",
          "Kubernetes",
          "PostgreSQL",
          "Hyperledger Fabric",
        ],
        roles: ["Full Stack Engineer", "DevOps Engineer"],
        contributions: [
          "Migrated monolithic Python application to Golang microservices for scalability and performance.",
          "Refactored frontend from Vue.js to React for improved performance and maintainability.",
          "Redesign SQL model for improved performance and scalability allowing for faster query times and better data organization.",
          "Developed backend APIs optimizing performance when interacting with the blockchain.",
          "Improved UI/UX for the frontend to improve user experience and engagement.",
        ],
      },
      {
        name: "Spitfire",
        description: "SBIR Phase I for Blockchain based asset management platform.",
        tech: [
          "Python",
          "Vue.js",
          "AWS",
          "Docker",
          "Kubernetes",
          "Redis",
          "PostgreSQL",
          "Hyperledger Fabric",
        ],
        roles: ["Full Stack Engineer", "DevOps Engineer"],
        contributions: [
          "Developed CI/CD pipeline for deployment to AWS via GitLab ensuring seamless deployment and > 99.9% uptime.",
          "Managed AWS infrastructure (EC2s, RDS, S3, etc.) and services with Terraform and Ansible.",
          "Implement End-to-End testing via Selenium for frontend and backend integration tests.",
        ],
      },
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className="container mx-auto px-6 py-20 mt-4">
      <h1 className="text-4xl font-bold text-center text-[#4A7090] p-4 m-4">
        Professional Experience
      </h1>
      <div className=" p-6 min-w-[320px] max-w-4xl mx-auto">
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            company={item.company}
            title={item.title}
            duration={item.duration}
            details={item.details}
            bullets={item.bullets}
            projects={item.projects}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
