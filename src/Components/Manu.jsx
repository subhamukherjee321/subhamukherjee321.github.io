import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import ResumeDownload from "./ResumeDownload";

export default function Manu() {
  let [active, setActive] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("left");

  window.addEventListener("scroll", () => {
    if (window.scrollY <= 40) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <Button colorScheme="transprant" onClick={onOpen}>
        <HamburgerIcon color={active ? "white" : "black"} fontSize={"30px"} />
      </Button>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        zIndex={200}
        background={"white"}
        size={{ sm: "full", md: "md" }}
      >
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color={"white"} />
          <DrawerHeader
            borderBottomWidth="1px"
            color="#E9204F"
            textAlign={"center"}
            mb={"2.5rem"}
            fontSize={"1.8rem"}
            fontWeight={600}
            p={"0.6rem 0"}
            fontFamily={"Dancing Script"}
          >
            Subha Mukherjee
          </DrawerHeader>
          <DrawerBody
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"flex-start"}
          >
            <Stack direction="column" spacing={4} width={"100%"}>
              <Link
                to="home"
                smooth
                duration={600}
                style={{ width: "100%" }}
                onClick={() => onClose()}
              >
                {" "}
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                >
                  Home
                </Button>
              </Link>
              <Link to="about" smooth duration={600} onClick={() => onClose()}>
                {" "}
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                >
                  About
                </Button>
              </Link>

              <Link to="skills" smooth duration={600} onClick={() => onClose()}>
                {" "}
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                >
                  Skills
                </Button>
              </Link>
              <Link
                to="project"
                smooth
                duration={600}
                onClick={() => onClose()}
              >
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                >
                  Project
                </Button>
              </Link>
              <Link
                to="contact"
                smooth
                duration={600}
                onClick={() => onClose()}
              >
                {" "}
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                >
                  Contact
                </Button>
              </Link>

              <a
                href="/Subha-Mukherjee-Resume.pdf"
                download={true}
                onClick={() => onClose()}
              >
                <Button
                  borderRadius={"20px"}
                  colorScheme="cyan"
                  width={"100%"}
                  variant="outline"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1baYrCjULFiPkf-yMTybqBpWBTNkWmwms/view?usp=share_link"
                    );
                  }}
                >
                  Resume
                </Button>
              </a>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
