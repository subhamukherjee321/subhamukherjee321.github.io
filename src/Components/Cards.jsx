import React from "react";
import "../Components-CSS/Cards.css";

export default function Cards() {
  return (
    <>
      <div className="img-card iCard-style2">
        <div className="card-content">
          <div className="card-image">
            {/* <span className="card-caption">Image Caption</span> */}
            <img src="https://www.dropbox.com/s/63v40eqeq9lgz3k/bald-eagle-2715461_640.jpg?raw=1" />
          </div>

          <span className="card-title">Card Title</span>

          <div className="card-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Image by{" "}
              <a
                href="https://pixabay.com/users/moonzigg-6341937/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461"
                style="text-decoration: none"
              >
                moonzigg
              </a>{" "}
              from{" "}
              <a
                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2715461"
                style="text-decoration: none"
              >
                Pixabay
              </a>
            </p>
          </div>
        </div>

        <div className="card-link">
          <a href="#" title="Read Full">
            <span>Read Full</span>
          </a>
        </div>
      </div>
    </>
  );
}
