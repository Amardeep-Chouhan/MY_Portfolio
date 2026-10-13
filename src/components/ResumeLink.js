import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resumePdf from "../Assets/Amardeep_Chouhan_Full_Stack_Developer.pdf";
import { profile } from "../data/profile";

export const resumeUrl = resumePdf;

// A real download link (not window.open): saves the file with a clean name.
function ResumeLink({ className = "btn btn-primary", children = "Download resume" }) {
  return (
    <a className={className} href={resumePdf} download={profile.resumeFileName}>
      <AiOutlineDownload aria-hidden="true" /> {children}
    </a>
  );
}

export default ResumeLink;
