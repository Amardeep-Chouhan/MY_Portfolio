import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import ResumeLink from "../ResumeLink";
import ProjectCard from "../Projects/ProjectCards";
import Home2 from "./Home2";
import Type from "./Type";
import { profile, coreStack } from "../../data/profile";
import { featuredProjects } from "../../data/projects";

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="hero-copy">
              <p className="eyebrow">
                {profile.location} · B.Tech IT, MITS Gwalior
              </p>
              <h1 id="hero-title" className="hero-name">
                {profile.name.split(" ")[0]}{" "}
                <span className="purple">{profile.name.split(" ")[1]}</span>
              </h1>
              <div className="hero-role" aria-hidden="true">
                <Type />
              </div>
              <p className="hero-summary">
                I build full-stack web applications with React, Next.js, Node.js
                and TypeScript — from a real-time chat app to an AI-powered code
                review platform.
              </p>

              <ul className="chip-list" aria-label="Core stack">
                {coreStack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="hero-actions">
                <Link to="/project" className="btn btn-primary">
                  View projects <AiOutlineArrowRight aria-hidden="true" />
                </Link>
                <ResumeLink className="btn btn-outline-light">Download resume</ResumeLink>
              </div>

              <ul className="social-list" aria-label="Social links">
                <li>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                    <AiFillGithub aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                    <FaLinkedinIn aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={`mailto:${profile.email}`} aria-label="Email Amardeep">
                    <AiOutlineMail aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={5} className="hero-art d-none d-lg-block">
              <img src={homeLogo} alt="" className="img-fluid" width="500" height="450" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" aria-labelledby="featured-title">
        <Container>
          <div className="section-head">
            <h2 id="featured-title" className="section-title">
              Featured <span className="purple">projects</span>
            </h2>
            <Link to="/project" className="section-link">
              All projects <AiOutlineArrowRight aria-hidden="true" />
            </Link>
          </div>
          <Row className="g-4">
            {featuredProjects.map((project) => (
              <Col key={project.id} md={6} lg={4}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Home2 />

      <section className="section section-contact" aria-labelledby="contact-title">
        <Container>
          <h2 id="contact-title" className="section-title text-center">
            Let's <span className="purple">connect</span>
          </h2>
          <p className="muted text-center">
            Open to conversations about full-stack roles and projects.
          </p>
          <div className="hero-actions justify-content-center">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <AiOutlineMail aria-hidden="true" /> Email me
            </a>
          </div>
          <ul className="social-list justify-content-center" aria-label="Find me on">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
                <AiFillGithub aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)">
                <AiFillInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

export default Home;
