import React from "react";
import Style from "../Components-CSS/Footer.module.css";
import Contact from "../Pages/Contact";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { FaGithubSquare, FaLinkedin, FaPeriscope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={Style.container}>
      <div className={Style.inner_footer}>
        <div className={Style.contact}>
          <Contact />
        </div>
        <div className={Style.footer_details}>
          <div className={Style.social}>
            <div className={Style.social_control}>
              <a href="tel:+918759290035">
                <IconButton
                  variant="outline"
                  colorScheme="cyan"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={"50%"}
                  marginRight={"20px"}
                  icon={<PhoneIcon />}
                />
                <p>+91 8759290035</p>
              </a>
            </div>

            <div className={Style.social_control}>
              <a href="mailto:subhamukherjee321@gmail.com">
                <IconButton
                  variant="outline"
                  colorScheme="cyan"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={"50%"}
                  marginRight={"20px"}
                  icon={<EmailIcon />}
                />
                <p>subhamukherjee321@gmail.com</p>
              </a>
            </div>

            <div className={Style.social_control}>
              <a
                href="https://www.linkedin.com/in/subha-mukherjee-652a551ba/"
                target={"_blank"}
                rel="noreferrer"
              >
                <IconButton
                  variant="outline"
                  colorScheme="cyan"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={"50%"}
                  marginRight={"20px"}
                  icon={<FaLinkedin />}
                />
                <p>Linkedin</p>
              </a>
            </div>

            <div className={Style.social_control}>
              <a href="https://github.com/subhamukherjee321" target={"_blank"}>
                <IconButton
                  variant="outline"
                  colorScheme="cyan"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={"50%"}
                  marginRight={"20px"}
                  icon={<FaGithubSquare />}
                />
                <p>GitHub</p>
              </a>
            </div>

            <div className={Style.social_control}>
              <a>
                <IconButton
                  variant="outline"
                  colorScheme="cyan"
                  aria-label="Call Sage"
                  fontSize="20px"
                  borderRadius={"50%"}
                  marginRight={"20px"}
                  icon={<FaPeriscope />}
                />
                <p>Raniganj, West Bengal, India</p>
              </a>
            </div>
          </div>
          <div className={Style.map}>
            <iframe
              title={"Raniganj_Map"}
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=raniganj&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
