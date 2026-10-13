import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { profile } from "../../data/profile";

const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Django Softwares Pvt. Ltd.",
    period: "Jan 2026 – Jun 2026",
  },
  {
    role: "Web Developer Intern",
    org: "Crystaltech Services Pvt. Ltd.",
    period: "May 2025 – Jul 2025",
  },
];

const certifications = [
  "AWS Cloud Practitioner — Amazon (2025)",
  "SQL Intermediate — HackerRank (2026)",
  "Software Engineer Intern — HackerRank (2026)",
];

function About() {
  return (
    <Container className="page">
      <Row className="align-items-center g-4">
        <Col md={7}>
          <h1 className="page-title">
            <span className="starlight-text">Know Who I'm</span>
          </h1>
          <AboutCard />
        </Col>
        <Col md={5} className="about-img">
          <img src={laptopImg} alt="" className="img-fluid" width="500" height="345" />
        </Col>
      </Row>

      <section className="about-block" aria-labelledby="experience-title">
        <h2 id="experience-title" className="section-title">
          <span className="purple">Experience</span> &amp; education
        </h2>
        <Row className="g-4">
          {experience.map((item) => (
            <Col key={item.org} md={6}>
              <article className="info-card experience-card">
                <h3>{item.role}</h3>
                <p className="info-org">{item.org}</p>
                <p className="muted">{item.period}</p>
              </article>
            </Col>
          ))}
          <Col md={6}>
            <article className="info-card experience-card">
              <h3>B.Tech, Information Technology (IoT)</h3>
              <p className="info-org">Madhav Institute of Technology &amp; Science, Gwalior</p>
              <p className="muted">2022 – 2026</p>
            </article>
          </Col>
          <Col md={6}>
            <article className="info-card experience-card">
              <h3>Certifications</h3>
              <ul className="info-list">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          </Col>
        </Row>
      </section>

      <section className="about-block" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section-title">
          Professional <span className="purple">skillset</span>
        </h2>
        <Techstack />
      </section>

      <section className="about-block" aria-labelledby="tools-title">
        <h2 id="tools-title" className="section-title">
          <span className="purple">Tools</span> I use
        </h2>
        <Toolstack />
      </section>

      <section className="about-block" aria-labelledby="github-title">
        <h2 id="github-title" className="section-title">
          Days I <span className="purple">code</span>
        </h2>
        <Github />
        <p className="muted calendar-note">
          Public contributions from{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/Amardeep-Chouhan
          </a>
          .
        </p>
      </section>
    </Container>
  );
}

export default About;
