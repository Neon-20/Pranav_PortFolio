import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ProdigyAI from "@/public/ProdigyAI.png";
import Magnet from "@/public/Magnet.png";
import VideoRTC from "@/public/VideoRTC.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Dev & Product Engineer (TrustAuthX)",
    location: "Remote",
    description:
    `Built the System Design and Core architecture of the application.
    Shipped the product with the team to 70% of customers and made platform 5X faster.
    Wrote the Code in NextJs 13 to implement server side rendering using app router.`,
    icon: React.createElement(FaReact),
    date: "Present",
    hrefLink:"https://app.trustauthx.com"

  },
  {
    title: "Co-Founder & Product Engineer (FlitchCoin)",
    location: "Remote",
    description:
      `Acquired members of more than 10k+ on social media and received non-equity assisstance from AWS,Salesforce
      etc.
      Worked as the Founding member and Product Specialist here and shipped the application to consumers with agile strategies and faultless techniques. 
      Written production grade code and implemented SOLID principles.
      Platform got selected in YC of South Korea in Top-30.
      `,
    icon: React.createElement(CgWorkAlt),
    date: "2022-23",
    hrefLink:"https://www.flitchcoin.com"
  },
  {
    title: "Co-Founder (Logicalloops UK)",
    location: "London/Remote",
    description:
    `Registered a Parent Holding Company in UK for FlitchCoin and operated as a firm during
    3rd year of my Undergrad Degree while undergoing my Bachelors in CSE.` ,
    icon: React.createElement(CgWorkAlt),
    date: "2022",
    hrefLink:"https://www.logicalloops.co.uk"
  },
] as const;

export const projectsData = [
  {
    title: "Prodigy AI",
    description:
      "Making users worldwide accessible to generate their solutions on prompts with one click using our Application.",
    tags: ["Typescript","React", "Next.js", "Prisma", "Tailwind", "PlanetScale","OpenAI","Stripe"],
    imageUrl: ProdigyAI,
    hrefLink:"https://prodigy-ai-nine.vercel.app/"
  },
  {
    title: "FileMagnet FileConverter",
    description:
      "FileMagnet is your one-stop solution for converting various file formats, including images, audio, and videos.",
    tags: ["NextJS", "TypeScript", ,"FFMPEG-WebAssembly","Tailwind"],
    imageUrl: Magnet,
    hrefLink:'https://filemagnet.pranavrajveer.com/'
  },
  {
    title: "P2P video conferencing",
    description:
      "A P2P video conferencing app to connect the 2 people at one go.",
    tags: ["Typescript","React", "WebRTC", "MongoDB", "Tailwind", "Agora-RTM","SIGNALLING"],
    imageUrl: VideoRTC,
    hrefLink:"https://main.d1sn8aeu8r1we0.amplifyapp.com/lobby.html"
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Docker",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "React-Query",
  "Recoil",
  "FastAPI",
  "Express",
  "PlanetScale",
  "Jira",
  "Framer Motion",
] as const;
