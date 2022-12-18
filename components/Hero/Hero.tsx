import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCirlce from "./Bg-Circles/BgCirlce";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'am Usama Ahmed"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <section className="hero h-screen flex flex-col space-y-8 justify-center items-center  text-center overflow-hidden">
      <BgCirlce />

      <h4 className="text-sm uppercase text-gray-400 font-bold  tracking-[1rem]">
        Full stack Developer
      </h4>
      <h1>
        <span className="font-semibold text-2xl ">{text}</span>{" "}
        <Cursor cursorColor="#7c3aed" />
      </h1>

      <article className="z-20 ">
        <Link href="#about">
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero__btn"
          >
            About
          </motion.button>
        </Link>
        <Link href="#skills">
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero__btn"
          >
            Skills
          </motion.button>
        </Link>
        <Link href="#portfolio">
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero__btn"
          >
            Portfolio
          </motion.button>
        </Link>
        <Link href="#contact">
          <motion.button
            initial={{
              scale: 1,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hero__btn"
          >
            Contact
          </motion.button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
