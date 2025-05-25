import mstlaw from '../assets/mstlaw.png'
import apolclone from '../assets/apolclone.png'

export const items = [
  {
    id: "apple-clone",
    title: "Apple Clone Website",
    description: "A project I made during a long school break for frontend practice. Consists only of design and animations.",
    image: apolclone,
    tech: ["React", "TailwindCSS", "JavaScript"],
    github: "https://github.com/saiimonn/Apple-website-clone", 
    site: "https://apolclone.netlify.app/"
  },

  {
    title: "MST Law Offices",
    description: "A full-stack appointment system that I made for a project in my Web Development class. It consists of features such as CRUD task/appointment operations, messaging systems, and data analytics.",
    image: mstlaw,
    tech: ["PHP", "HTML", "Vanilla CSS", "TailwindCSS", "ChartJS", "MySQL"],
    github: "https://github.com/saiimonn/MST-Law",
    site: "https://mstlaw.dcism.org/"
  },
  
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };
