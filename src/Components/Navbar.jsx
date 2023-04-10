import React, { useState } from "react";
import Style from "../Components-CSS/Navbar.module.css";
import Manu from "./Manu";
import { Link } from "react-scroll";

export default function Navbar() {
  let [active, setActive] = useState(true);

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 40) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <nav
        className={Style.container}
        style={
          active
            ? { backgroundColor: "#141415", boxShadow: "none" }
            : { backgroundColor: "white" }
        }
      >
        <Link to="home" smooth duration={1500}>
          <div className={Style.logo}>
            <h1>&lt;Subha/&gt;</h1>
          </div>
        </Link>
        <div className={Style.section}>
          <ul>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <Link to="home" smooth duration={1500} style={active ? { color: "white" } : { color: "black" }}>
                Home
              </Link>
            </li>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <Link to="about" smooth duration={1500} style={active ? { color: "white" } : { color: "black" }}>
                About
              </Link>
            </li>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <Link to="skills" smooth duration={1500} style={active ? { color: "white" } : { color: "black" }}>
                Skills
              </Link>
            </li>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <Link to="project" smooth duration={1500} style={active ? { color: "white" } : { color: "black" }}>
                Project
              </Link>
            </li>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <Link to="contact" smooth duration={1500} style={active ? { color: "white" } : { color: "black" }}>
                Contact
              </Link>
            </li>
            <li className={Style.li_link} style={{ cursor: "pointer" }}>
              <a
                href="/Subha-Mukherjee-Resume.pdf"
                download={true}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1baYrCjULFiPkf-yMTybqBpWBTNkWmwms/view?usp=share_link"
                  );
                }}
                style={active ? { color: "white" } : { color: "black" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.manu}>
          <Manu />
        </div>
      </nav>
    </>
  );
}
