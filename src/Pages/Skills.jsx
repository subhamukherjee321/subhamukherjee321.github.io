import React from "react";
import Heading from "../Components/Heading";
import SkillsHeading from "../Components/SkillsHeading";
import ToolCards from "../Components/ToolCards";
import Style from "../Pages-CSS/Skills.module.css";
import { ProfessionalTechStack } from "../Data/ProfessionalTechStack";
import ProToolIcons from "../Data/ProToolsIcons";
import Coding from "../Assets/images/coding.jpg";
import Programming from "../Assets/images/Programming.gif";

export default function Skills() {
  return (
    <>
      <div className={Style.container} name="skills">
        <Heading heading="My Skills" />
        <div className={Style.skillSection}>
          <div id={Style.one} style={{ backgroundImage: `url(${Coding})` }}></div>
          <div id={Style.two}>
            <SkillsHeading heading="Professional Tech-Stack" />
            <div className={Style.toolSection}>
              {ProfessionalTechStack?.map((ele, idx) => {
                return <ToolCards key={idx} {...ele} />;
              })}
            </div>
          </div>

          <div id={Style.three}>
            <SkillsHeading heading="Professional Tools" />
            <div className={Style.toolSection}>
              {ProToolIcons?.map((ele, idx) => {
                return <ToolCards key={idx} {...ele} />;
              })}
            </div>
          </div>
          <div id={Style.four}
            style={{ backgroundImage: `url(${Programming})`}}
          ></div>
        </div>
      </div>
    </>
  );
}
