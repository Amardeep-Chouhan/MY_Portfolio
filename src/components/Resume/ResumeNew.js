import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import ResumeLink, { resumeUrl } from "../ResumeLink";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MAX_PAGE_WIDTH = 860;

function ResumeNew() {
  const frameRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(0);

  // Size the PDF page to its container so it never overflows on phones.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return undefined;
    const measure = () => setPageWidth(Math.min(el.clientWidth, MAX_PAGE_WIDTH));
    measure();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fallback = (message, withDownload = true) => (
    <div className="resume-state" role="status">
      <p>{message}</p>
      {withDownload && <ResumeLink>Download resume (PDF)</ResumeLink>}
    </div>
  );

  return (
    <Container className="page">
      <header className="page-header">
        <h1 className="page-title">
          My <span className="purple">Resume</span>
        </h1>
        <div className="hero-actions justify-content-center">
          <ResumeLink>Download resume (PDF)</ResumeLink>
        </div>
      </header>

      <div className="resume-frame" ref={frameRef}>
        {pageWidth > 0 && (
          <Document
            file={resumeUrl}
            className="resume-doc"
            loading={fallback("Loading resume…", false)}
            error={fallback("The resume preview couldn't be loaded.")}
            noData={fallback("The resume file is unavailable.")}
          >
            <Page pageNumber={1} width={pageWidth} renderTextLayer={false} />
          </Document>
        )}
      </div>
    </Container>
  );
}

export default ResumeNew;
