import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Container className="page page-center">
      <p className="eyebrow">404</p>
      <h1 className="page-title">
        Page <span className="purple">not found</span>
      </h1>
      <p className="muted">The page you are looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </Container>
  );
}

export default NotFound;
