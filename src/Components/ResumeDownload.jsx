import React from "react";
import Style from "../Components-CSS/ResumeDownload.module.css";

const ResumeDownload = () => {
  return (
      <button
        className={Style.button}
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1baYrCjULFiPkf-yMTybqBpWBTNkWmwms/view?usp=share_link"
          );
        }}
      >
        <span className={Style.span}></span>
        <span className={Style.span}></span>
        <span className={Style.span}></span>
        <span className={Style.span}></span> Resume
      </button>
  );
};

export default ResumeDownload;