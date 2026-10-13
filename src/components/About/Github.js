import React from "react";
import GitHubCalendar from "react-github-calendar";
import { profile } from "../../data/profile";

const username = profile.github.split("/").pop();

function Github() {
  return (
    <div className="calendar-wrap" role="group" aria-label="GitHub contribution calendar">
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
