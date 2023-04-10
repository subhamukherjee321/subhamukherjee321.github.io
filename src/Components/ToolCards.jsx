import React, {useState} from 'react'
import  "../Components-CSS/ToolCards.css"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiChakraui, SiExpress, SiMongodb } from "react-icons/si";

export default function ToolCards({icon, color, name}) {
  return (
    <>
      <a href=""> <div className="container" >
          <div className="logo" >
            <div className="icon" style={{color : color}}>{icon}</div>
          </div>
         <div className="name" >
            <h3>{name}</h3>
          </div>
       </div>
       </a>
    </>
  )
}
