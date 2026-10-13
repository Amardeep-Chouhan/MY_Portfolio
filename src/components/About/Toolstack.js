import React from "react";
import claude from "../../Assets/TechIcons/Claude.svg";
import openai from "../../Assets/TechIcons/openai-icon.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import cursor from "../../Assets/TechIcons/cursor-ai-code-icon.svg";

const tools = [
  { name: "Claude Code", icon: claude },
  { name: "ChatGPT", icon: openai },
  { name: "VS Code", icon: vsCode },
  { name: "IntelliJ IDEA", icon: intelliJ },
  { name: "Cursor", icon: cursor },
];

function Toolstack() {
  return (
    <ul className="skill-grid">
      {tools.map(({ name, icon }) => (
        <li key={name} className="skill">
          <img src={icon} alt="" className="skill-icon" width="24" height="24" loading="lazy" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Toolstack;
