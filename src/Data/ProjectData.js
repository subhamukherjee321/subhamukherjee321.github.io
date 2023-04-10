import {
  SiHtml5,
  SiCss3,
  SiRedux,
  SiJavascript,
  SiReact,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";

const ProjectData = [
  {
    id: 1,
    image:
      "https://user-images.githubusercontent.com/107460451/208408783-727567a5-b1e5-464c-b0a2-10878e24f8a0.jpg",
    title: "WEFIT",
    description:
      "WEFIT is a body fitness website where users can choose from hundreds of professionally built workout plans and, track and log their workouts . It also provides a free fitness program database to help users to stay fit.",
    github: "https://github.com/vaibhav-mougha/WEFIT",
    live: "https://we-fit.netlify.app/",
    techStack: [
      { icon: <SiReact />, color: "#5ED3F3" },
      { icon: <SiCss3 />, color: "#146EB1" },
      { icon: <SiRedux />, color: "#7248B6" },
      { icon: <SiChakraui />, color: "#52BEBF" },
    ],
  },
  {
    id: 2,
    image:
      "https://user-images.githubusercontent.com/107465630/214306318-0d37191d-645e-4ea9-a9a2-04211f06ec46.png",
    title: "TechWorld",
    description:
      "The TechWorld is an details oriented website that allows people to make decision before buying electronic goods and services. Through our website, user can process orders, accept payments and logistics, and provide customer services.",
    github: "https://github.com/Raj-1313/TechWorld",
    live: "https://techworld-tau.vercel.app/",
    techStack: [
      { icon: <SiReact />, color: "#5ED3F3" },
      { icon: <SiRedux />, color: "#7046B2" },
      { icon: <SiCss3 />, color: "#146EB1" },
      { icon: <SiChakraui />, color: "#52BEBF" },
      { icon: <GrNode />, color: "#6B9F5D" },
      { icon: <SiExpress />, color: "whitesmoke" },
      { icon: <SiMongodb />, color: "#0FA14C" },
    ],
  },
  {
    id: 3,
    title: "FASTAIM",
    image:
      "https://github.com/subhamukherjee321/FASTAIM/raw/main/frontend/src/Asset/Images/GamePage.png",
    description:
      "Fast Aim is a gaming Website that allows playing both Single Player and Multi-Player. This is a collaborative project; we completed this website in 3 days.",
    github: "https://github.com/subhamukherjee321/FASTAIM",
    live: "https://fast-aim-game.vercel.app/",
    techStack: [
      { icon: <SiReact />, color: "#5ED3F3" },
      { icon: <SiTypescript />, color: "#0074C2" },
      { icon: <SiSocketdotio />, color: "blue" },
      { icon: <SiChakraui />, color: "#52BEBF" },
      { icon: <SiCss3 />, color: "#146EB1" },
    ],
  },
  {
    id: 4,
    image:
      "https://camo.githubusercontent.com/bb22dc8c530acecb98845a4ae17d3780d3570613c4657a8e0496d61d3ffbcabd/68747470733a2f2f6661697a616e373031322e6769746875622e696f2f7374617469632f6d656469612f737061726b416d65726963612e34373461613536666465393030346433356331392e706e67",
    title: "SparkAmerica ",
    description:
      "About SparkAmerica is a movement launching from a platform. It is Fitness & Health, Leadership Development, and Community Engagement by helping one person, one organization, and one city at a time.",
    github: "https://github.com/subhamukherjee321/SparkAmerica",
    live: "https://transcendent-zabaione-8dbd80.netlify.app/",
    techStack: [
      { icon: <SiHtml5 />, color: "#D84924" },
      { icon: <SiCss3 />, color: "#146EB1" },
      { icon: <SiJavascript />, color: "#CFB02B" },
    ],
  },
];

export default ProjectData;
