import { motion } from "framer-motion";

type Props = {};

const BgCirlce = (props: Props) => {
  return (
    <motion.div
      className="bgCirlces flex justify-center items-center relative"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-purple-200 rounded-full h-[300px] w-[300px] mt-52  animate-ping opacity-20" />
      <div className="absolute border border-purple-300 rounded-full h-[350px] w-[350px] mt-52  opacity-20 " />
      <div className="absolute border border-purple-400 rounded-full h-[400px] w-[400px] mt-52  opacity-20" />
      <div className="absolute border border-purple-500 rounded-full h-[450px] w-[450px] mt-52  opacity-20" />
      <div className="absolute border border-purple-600 rounded-full h-[500px] w-[500px] mt-52 animate-pulse opacity-20" />
    </motion.div>
  );
};

export default BgCirlce;
