import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

// Subtle starfield. Mounted once for the whole app (see App.js), kept light
// (few particles, capped FPS, no pointer interaction) and skipped entirely for
// visitors who prefer reduced motion.
const params = {
  fpsLimit: 40,
  particles: {
    number: { value: 70, density: { enable: true, value_area: 1500 } },
    line_linked: { enable: false },
    move: { direction: "right", speed: 0.05 },
    size: { value: 1 },
    opacity: { anim: { enable: true, speed: 1, opacity_min: 0.05 } },
  },
  interactivity: {
    events: { onclick: { enable: false }, onhover: { enable: false } },
  },
  retina_detect: false,
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReduced(e.matches);
    if (query.addEventListener) query.addEventListener("change", onChange);
    else query.addListener(onChange);
    return () => {
      if (query.removeEventListener) query.removeEventListener("change", onChange);
      else query.removeListener(onChange);
    };
  }, []);

  return reduced;
}

function Particle() {
  const reduced = usePrefersReducedMotion();
  if (reduced) return null;
  return <Particles id="tsparticles" params={params} />;
}

export default Particle;
