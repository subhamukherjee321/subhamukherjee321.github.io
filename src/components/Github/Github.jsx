import React from "react";
import { useContext } from "react";
import GithubCalendar from "react-github-calendar";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Github.css";

function Github() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="github"
    >
      <h1 style={{color: theme.primary}}>GITHUB</h1>
      <div>
        <GithubCalendar
          className="gitcal"
          username="subhamukherjee321"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          style={{ padding: "2rem", textAlign: "center", margin: "auto" }}
        />
      </div>
      <div style={{ margin: "auto" }}>
        <a
          href="https://github.com/subhamukherjee321"
          rel="noreferrer"
          target="_blank"
          className="image"
        >
          <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=subhamukherjee321&show_icons=true&count_private=true&theme=algolia"
            height="192px"
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
            height="192px"
          />
        </a>
      </div>
    </div>
  );
}

export default Github;
