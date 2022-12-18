/* eslint-disable jsx-a11y/alt-text */
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  skillURL: any;
  skillText: string;
};

const Skill = ({ skillURL, skillText }: Props) => {
  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group relative flex cursor-pointer justify-center items-center  "
    >
      <Image
        width={"70"}
        height={"70"}
        src={skillURL}
        className="rounded-full border border-purple-500/40 object-cover  p-2 group-hover:opacity-10  
        "
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out rounded-full z-0 ">
        <p className="text-1xl font-bold text-white">{skillText}</p>
      </div>
    </motion.div>
  );
};

export default Skill;
