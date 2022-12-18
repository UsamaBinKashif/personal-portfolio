import profile from "./profile.jpg";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
     
      className="h-screen max-w-7xl relative py-5 md:py-5 justify-evenly mx-auto  flex items-center flex-col"
    >
      <h1 className="text-2xl uppercase tracking-[1rem] text-gray-500 absolute top-24 ">
        ABOUT
      </h1>
      <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center justify-center mt-10">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0 ">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
              scale: 1,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="object-cover mx-auto rounded-full w-32 h-32 md:w-64 md:h-96 xl:w-[300px] xl:h-[350px]"
            alt="hero"
            src={profile.src}
          />
        </div>
        <div className=" md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center ">
          <h1 className=" text-xl md:text-3xl mb-2 md:mb-0 font-medium ">
            Here{"'"}s a{" "}
            <span className=" underline  decoration-purple-600 ">little</span>{" "}
            background.
          </h1>
          <p className="">
            {" "}
            My name is Usama Ahmed Sheikh and I am a Multi Stack Developer,
            currently living in Hyderabad, Sindh. I have BS in Software
            Engineering. My primary focus and inspiration for my studies is Full
            Stack Developer. I am both driven and self-motivated, and I am
            constantly experimenting with new technologies and techniques. I am
            very passionate about Full Stack development community as well. I
            have been studying Full Stack Development since 2019 and I am lucky
            enough that I can call my work, my hobby.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
