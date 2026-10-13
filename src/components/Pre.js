import React from "react";

function Pre({ load }) {
  return (
    <div
      id="preloader"
      className={load ? "" : "preloader-hidden"}
      aria-hidden="true"
    />
  );
}

export default Pre;