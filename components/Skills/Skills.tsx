import { motion } from "framer-motion";
import Skill from "./Skill/Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col text-center md:text-left xl:flex-row max-w-[2000px]
    h-screen relative xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center
    "
    >
      <h3 className="text-2xl uppercase tracking-[1rem] text-gray-500 absolute top-24 ">
        Skills
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-5">
        <Skill skillText="HTML" skillURL="https://img.icons8.com/color/344/html-5--v1.png" />
        <Skill skillText="CSS" skillURL="https://img.icons8.com/fluency/344/css3.png" />
        <Skill skillText="SASS" skillURL="https://img.icons8.com/color/344/sass.png" />
        <Skill skillText="Bootstrap" skillURL="https://img.icons8.com/color/344/bootstrap.png"/>
        {/* ===== */}
        <Skill skillText="Tailwind" skillURL="https://img.icons8.com/color/344/tailwind_css.png"/>
        <Skill skillText="MUI" skillURL="https://img.icons8.com/color/344/material-ui.png"/>
        <Skill skillText="JavaScript" skillURL="https://img.icons8.com/color/344/javascript--v1.png"/>
        <Skill skillText="TypeScript" skillURL="https://img.icons8.com/color/344/typescript.png"/>
        {/* ===== */}
        <Skill skillText="React JS" skillURL="https://img.icons8.com/plasticine/344/react.png"/>
        <Skill skillText="Redux" skillURL="https://img.icons8.com/color/344/redux.png"/>
        <Skill skillText="Next JS" skillURL="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"/>
        <Skill skillText="Firebase" skillURL="https://img.icons8.com/color/344/firebase.png"/>
        {/* ===== */}
        <Skill skillText="NPM" skillURL="https://img.icons8.com/color/344/npm.png"/>
        <Skill skillText="GIT" skillURL="https://img.icons8.com/color/344/git.png"/>
      </div>
    </motion.div>
  );
};

export default Skills;
