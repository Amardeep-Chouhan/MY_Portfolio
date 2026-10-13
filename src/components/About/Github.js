import React, { useEffect, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import { profile } from "../../data/profile";

const username = profile.github.split("/").pop();

// The calendar is wider than a phone screen, so it scrolls inside its own
// container instead of overflowing the page.
function Github() {
  const wrapRef = useRef(null);

  // Once the calendar has loaded, show the most recent weeks first.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof MutationObserver === "undefined") return undefined;
    const observer = new MutationObserver(() => {
      if (el.querySelector("svg")) {
        el.scrollLeft = el.scrollWidth;
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="calendar-wrap" tabIndex="0" role="group" aria-label="GitHub contribution calendar">
      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={4}
        fontSize={13}
        color="#c084f5"
      />
    </div>
  );
}

export default Github;
