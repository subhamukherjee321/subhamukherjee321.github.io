import React from "react";
import GithubCalendar from "react-github-calendar";
import "../Pages-CSS/Github.css";
import Heading from "../Components/Heading";

function Github() {
  return (
    <div className="github">
      <Heading heading="My GitHub" />
      <div className="gitcal">
        <GithubCalendar
          className={"git__cal"}
          username="subhamukherjee321"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          blockRadius={2}
          style={{padding: "2rem", backgroundColor: "#050F2C", color: "white"}}
        />
      </div>
      <div className="gitflex">
        <a
          href="https://github.com/subhamukherjee321"
          rel="noreferrer"
          target="_blank"
          className="image"
        >
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=subhamukherjee321&show_icons=true&count_private=true&theme=algolia"
            // height="192px"
            // width="100%"
          />
        </a>
        <a
          href="https://github.com/subhamukherjee321"
          rel="noreferrer"
          target="_blank"
          className="image"
        >
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=subhamukherjee321&theme=algolia&border_radius=5"
            // width="100%"
          />
        </a>
      </div>
    </div>
  );
}

export default Github;
