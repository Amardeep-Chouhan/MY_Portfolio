import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ title, subtitle, image, description, tags = [], ghLink, demoLink }) {
  return (
    <Card as="article" className="project-card-view">
      <Card.Img
        variant="top"
        src={image}
        alt={`${title} project preview`}
        width="960"
        height="640"
        loading="lazy"
        decoding="async"
      />
      <Card.Body>
        <Card.Title as="h3">{title}</Card.Title>
        {subtitle && <p className="project-subtitle">{subtitle}</p>}
        <Card.Text>{description}</Card.Text>

        {tags.length > 0 && (
          <ul className="chip-list chip-list-sm" aria-label={`${title} tech stack`}>
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="project-actions">
          <a
            className="btn btn-primary"
            href={ghLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code on GitHub (opens in a new tab)`}
          >
            <BsGithub aria-hidden="true" /> Code
          </a>
          {demoLink && (
            <a
              className="btn btn-outline-light"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo (opens in a new tab)`}
            >
              <CgWebsite aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
