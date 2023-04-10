import React from "react";
import Heading from "../Components/Heading";
import ProjectCard2 from "../Components/ProjectCard2";
import Style from "../Pages-CSS/Projects.module.css";
import ProjectData from "./../Data/ProjectData";

export default function Projects() {
  return (
    <>
      <div className={Style.container} name="project">
        <Heading heading="My Projects" />
        <div className={Style.projectSection}>
          {ProjectData?.map((item) => (
            <ProjectCard2 key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
