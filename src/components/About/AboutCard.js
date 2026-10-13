import React from "react";
import { ImPointRight } from "react-icons/im";

const interests = [
  "Playing games",
  "Exploring modern tech stacks",
  "Traveling and exploring new places",
];

function AboutCard() {
  return (
    <div className="about-card">
      <p>
        Hi, I'm <span className="purple">Amardeep Chouhan</span> from{" "}
        <span className="purple">Bhopal, India</span>.
      </p>
      <p>
        I'm a <span className="purple">Full-Stack Web Developer</span> with
        hands-on experience building scalable, production-ready web
        applications using{" "}
        <span className="purple">
          React, Node.js, TypeScript, PostgreSQL and MongoDB
        </span>
        .
      </p>
      <p>
        I hold a B.Tech in <span className="purple">Information Technology (IoT)</span>{" "}
        from{" "}
        <span className="purple">
          Madhav Institute of Technology &amp; Science (MITS), Gwalior
        </span>
        .
      </p>
      <p>Outside of coding, I like to stay creative and inspired by:</p>
      <ul className="about-activities">
        {interests.map((item) => (
          <li key={item}>
            <ImPointRight aria-hidden="true" /> {item}
          </li>
        ))}
      </ul>
      <p className="about-quote">"Building software that solves real-world problems."</p>
    </div>
  );
}

export default AboutCard;
