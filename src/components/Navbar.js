import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import logo from "../Assets/logo.png";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Home", Icon: AiOutlineHome },
  { to: "/about", label: "About", Icon: AiOutlineUser },
  { to: "/project", label: "Projects", Icon: AiOutlineFundProjectionScreen },
  { to: "/resume", label: "Resume", Icon: CgFileDocument },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always close the mobile menu after navigating.
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  // Allow Escape to dismiss the mobile menu.
  useEffect(() => {
    if (!expanded) return undefined;
    const onKey = (e) => e.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [expanded]);

  const className = [
    "site-nav",
    scrolled ? "is-scrolled" : "",
    expanded ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
      expand="lg"
      className={className}
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="site-brand">
          <img
            src={logo}
            className="site-logo"
            alt={`${profile.name} – home`}
            width="59"
            height="44"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          aria-expanded={expanded}
          aria-label="Toggle navigation menu"
          className="nav-toggle"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            {links.map(({ to, label, Icon }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                active={pathname === to}
                aria-current={pathname === to ? "page" : undefined}
              >
                <Icon aria-hidden="true" /> {label}
              </Nav.Link>
            ))}
            <a
              className="nav-github"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub aria-hidden="true" /> GitHub
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
