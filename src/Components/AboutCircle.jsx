import React from "react";
import Style from "../Components-CSS/AboutCircle.module.css";
import TagsCanvas from "react-tags-canvas";

export default function AboutCircle() {
  return (
    <div className={Style.container}>
      <TagsCanvas
        width="450px"
        height="500px"
        textColour="#E9204F"
        maxSpeed={0.07}
        freezeActive
        shuffleTags
        shape="circle" // sphere
        zoom={1.0}
        noSelect
        textFont={null}
        pinchZoom
        tags={[
          { value: "HTML5", weight: 20 },
          { value: "CSS3", weight: 20 },
          { value: "Bootstrap", weight: 30 },
          { value: "Javascript", weight: 30 },
          { value: "React Js", weight: 30 },
          { value: "Redux", weight: 20 },
          { value: "Chakra-Ui", weight: 30 },
          { value: "Next Js", weight: 30 },
          { value: "TypeScript", weight: 30 },
          { value: "NodeJS", weight: 20 },
          { value: "Express", weight: 20 },
          { value: "MongoDB", weight: 20 },
          { value: "Mongoose", weight: 20 },
          { value: "GitHub", weight: 30 },
          { value: "Git", weight: 20 },
        ]}
      />
    </div>
  );
}
