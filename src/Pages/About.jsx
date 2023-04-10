import React from "react";
import AboutCircle from "../Components/AboutCircle";
import Heading from "../Components/Heading";
import Style from "../Pages-CSS/About.module.css";
import "../Components-CSS/Button.css";
import ResumeDownload from "../Components/ResumeDownload";

export default function About() {
  return (
    <div className={Style.container} name="about">
      <Heading heading="About Me" />

      <div className={Style.innerAboutSection}>
        <div className={Style.aboutContant}>
          <div className={Style.aboutSubHeading}>
            <h2>Hi, I'm Subha Mukherjee</h2>
          </div>

          <div className={Style.aboutPara}>
            <p>
              An aspiring Full-Stack Web Developer with a strong interest in
              projects requiring conceptual and analytical thinking.
              Self-motivated and hardworking fresher seeking for an opportunity
              to work a challenging environment to prove my skills and utilize
              my knowledge & intelligence in the growth of the organization.
            </p>
          </div>

          <div className={Style.aboutResume}>
            <a href="/Subha-Mukherjee-Resume.pdf" download={true}>
              <ResumeDownload />
            </a>
          </div>
        </div>

        <AboutCircle />
      </div>
    </div>
  );
}
