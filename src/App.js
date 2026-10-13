import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Pre from "./components/Pre";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

// The resume page pulls in pdf.js, so it is only downloaded when visited.
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let timer;
    const hide = () => {
      timer = setTimeout(() => setLoad(false), 400);
    };
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", hide);
    };
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Particle />
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <main id="main" tabIndex="-1">
          <Suspense fallback={<div className="page-loading" role="status">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/projects" element={<Navigate to="/project" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;