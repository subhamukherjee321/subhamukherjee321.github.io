import React from "react";
import Style from "../Pages-CSS/Contact.module.css";

export default function Contact() {
  return (
    <div className={Style.container}>
      <div
        className={Style.heading}
        style={{ zIndex: "10", position: "relative" }}
      >
        <h1 name="contact">Contact</h1>
      </div>
      <div className={Style.para}>
        <p>Don’t Hesitate To Contact With Me</p>
      </div>

      <form action="https://getform.io/f/a70e94d7-9983-418c-b946-8a2bf01023c7" method="POST" className={Style.form}>
        <div className={Style.div_control}>
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className={Style.input_control}
            required
          />
          <input
            type="email"
            name="email"
            className={Style.input_control}
            placeholder="Your Email*"
            required
          />
        </div>
        <div className={Style.div_control_textarea}>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            className={Style.textarea_control}
            placeholder="Message*"
            required
          ></textarea>
        </div>

        <input type="submit" value="Send Me" className={Style.sendBtn} />
      </form>
    </div>
  );
}
