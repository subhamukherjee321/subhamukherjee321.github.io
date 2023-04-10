import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'
import Style from "../Components-CSS/ProjectCards.module.css"
import { FaDiceD20, FaGithub, FaNode } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiExpress, SiMongodb } from "react-icons/si";


export default function ProjectsCards() {
  return (
    <>
        <div className={Style.container}>
            <div className={Style.projectPoster}>
                <img src="./images/next-food.png" alt="" />
            </div>
            <div className={Style.projectDescription}>
                <h1>Next-Food</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil dignissimos impedit, ullam consectetur aspernatur possimus soluta, recusandae ipsam ut tempore a ipsa repellendus ipsum?</p>
                <div className={Style.boxTStack}>
                  <h3>Tech Stack</h3>
                  <p>Frontend</p>
                  <div className={Style.frontendTS}>
                  <Button  colorScheme='cyan' variant='outline' p={0} fontSize="30px"><SiHtml5/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiCss3/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiJavascript/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiReact/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiChakraui/></Button>
                  </div>
                  <p>Backend</p>
                  <div className={Style.backendTS}>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><FaNode/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiExpress/></Button>
                  <Button  colorScheme='cyan' variant='outline' fontSize="30px"><SiMongodb/></Button>
                  </div>
                </div>
                <div className={Style.buttons}>
                <Button colorScheme='teal' variant='solid' leftIcon={<FaDiceD20 />}>

                  Live
                </Button>
              <Button colorScheme='teal' variant='solid' leftIcon={<FaGithub/>}>
                GitHub
                </Button>
                </div>
            </div>
        </div>
    </>
  )
}
