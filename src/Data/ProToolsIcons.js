import {
  SiPostman,
  SiVercel,
  SiHeroku,
  SiNetlify,
  SiReplit,
} from "react-icons/si";
// import { TbBrandVscode } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import {
  AiFillCodeSandboxSquare,
  AiFillThunderbolt,
  AiFillGithub,
} from "react-icons/ai";

export const ProToolIcons = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <path
          fill="#29b6f6"
          d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
        ></path>
        <path
          fill="#0277bd"
          d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
        ></path>
        <path
          fill="#0288d1"
          d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
        ></path>
      </svg>
    ),
    color: "#24A8F3",
    name: "Vs Code",
  },
  { icon: <AiFillGithub />, color: "#F05030", name: "Git" },
  { icon: <BsGithub />, color: "black", name: "GitHub" },
  { icon: <SiReplit />, color: "#53646B", name: "Replit" },
  { icon: <AiFillCodeSandboxSquare />, color: "black", name: "Code Sand Box" },
  { icon: <SiNetlify />, color: "#24C1B1", name: "Netlify" },
  { icon: <SiHeroku />, color: "#440099", name: "Heroku" },
  { icon: <SiVercel />, color: "black", name: "Vercel" },
  { icon: <SiPostman />, color: "#E76A3D", name: "Post Man" },
  { icon: <AiFillThunderbolt />, color: "#8F4C92", name: "Thunder Client" },
];

export default ProToolIcons;
