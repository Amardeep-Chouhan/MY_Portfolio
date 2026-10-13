import React from "react";
import Typewriter from "typewriter-effect";
import { roles } from "../../data/profile";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fixed-height wrapper (see .hero-role) prevents layout shift while typing.
function Type() {
  if (prefersReducedMotion()) {
    return <span className="Typewriter__wrapper">{roles[0]}</span>;
  }
  return (
    <Typewriter
      options={{
        strings: roles,
        autoStart: true,
        loop: true,
        delay: 55,
        deleteSpeed: 35,
      }}
    />
  );
}

export default Type;
