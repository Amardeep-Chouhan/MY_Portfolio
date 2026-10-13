import React from "react";
import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

const skills = [
  { name: "C++", icon: C },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "Node.js", icon: Node },
  { name: "React.js", icon: ReactIcon },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Redux", icon: Redux },
  { name: "MongoDB", icon: Mongo },
  { name: "PostgreSQL", icon: SQL },
  { name: "Redis", icon: Redis },
  { name: "Python", icon: Python },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Material UI", icon: MUI },
  { name: "Git", icon: Git },
  { name: "Postman", icon: Postman },
];

function Techstack() {
  return (
    <ul className="skill-grid">
      {skills.map(({ name, icon, Icon }) => (
        <li key={name} className="skill">
          {Icon ? (
            <Icon className="skill-icon" aria-hidden="true" />
          ) : (
            <img src={icon} alt="" className="skill-icon" width="24" height="24" loading="lazy" />
          )}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Techstack;
