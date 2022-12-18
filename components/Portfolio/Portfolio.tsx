import { useRef, useState } from "react";
import projects from "../api/projects.json";
import { motion } from "framer-motion";
import Projects from "./Projects/Projects";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const Portfolio = () => {
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
      className="flex items-center flex-col md:flex-row justify-center  max-w-full h-screen relative mx-auto z-0"
    >
      <h3 className="text-2xl uppercase tracking-[1rem] text-gray-500 absolute top-24">
       Portfolio
      </h3>

      <div className=" relative w-full flex z-10 ">
        <Swiper slidesPerView={1} pagination={true} modules={[Pagination]}>
          {projects.map((project: any) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <Projects key={project.id} project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] 2xl:top-[35%]  bg-purple-600/50 left-0 h-[320px] -skew-y-6  " />
    </motion.div>
  );
};

export default Portfolio;
