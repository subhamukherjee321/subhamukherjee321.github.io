import React from 'react'
import Style from "../Components-CSS/Heading.module.css"

export default function Heading({heading}) {
  return (
    <>
     <div className={Style.container}>
            <div>
                <h1>{heading}</h1>
            </div>
     </div>
    </>
  )
}
