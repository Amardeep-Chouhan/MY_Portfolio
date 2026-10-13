import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import projects from "../../data/projects";

function Projects() {
  return (
    <Container className="page">
      <header className="page-header">
        <h1 className="page-title">
          My Recent <span className="purple">Works</span>
        </h1>
        <p className="muted">
          Full-stack apps, real-time systems and backend services I've built.
        </p>
      </header>
      <Row className="g-4">
        {projects.map((project) => (
          <Col key={project.id} md={6} lg={4}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
