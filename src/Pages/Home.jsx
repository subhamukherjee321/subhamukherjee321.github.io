import React from "react";
import Style from "../Pages-CSS/Home.module.css";
import Type from "./Type";
import Pic from "../Assets/images/Me.jpg";

export default function Home() {
  return (
    <>
      <div className={Style.container} name={"home"}>
        <div className={Style.box1}></div>
        <div className={Style.box2}></div>

        <div className={Style.home_desc}>
          <div className={Style.home_content}>
            <div className={Style.first_line}>
              <p>Hello</p> <div></div> <p>I am</p>
            </div>

            <div className={Style.home_heading}>
              <h1>
                <Type />
              </h1>
            </div>

            <div className={Style.home_para}>
              <p>
                An aspiring Full-Stack Web Developer with a strong interest in
                projects requiring conceptual & analytical thinking. Self-
                motivated and hardworking.
              </p>
            </div>
          </div>
        </div>

        <div className={Style.home_proile_pic}>
          <div
            className={Style.image_div}
            style={{backgroundImage: `url(${Pic})` }}
          ></div>{" "}
          {/*  image div */}
        </div>
      </div>
    </>
  );
}
