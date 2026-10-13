import React from "react";
import { Container } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { profile } from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container className="site-footer-inner">
        <p className="site-footer-text">
          © {year} {profile.name} · Built with React
        </p>
        <ul className="social-list" aria-label="Social links">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <AiFillGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email Amardeep">
              <AiOutlineMail aria-hidden="true" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}

export default Footer;
