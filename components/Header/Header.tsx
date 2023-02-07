import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";

type Props = {};
const Header = ({}: Props) => {
  const saveFile = () => {
    saveAs(
      "https://github.com/UsamaBinKashif/peachy-assets/raw/main/Usama's%20Resume.pdf",
      "Resume.pdf"
    );
  };
  return (
    <header className="flex justify-around items-center sticky top-0 p-2 max-w-7xl mx-auto z-20 xl-items-center">
      <motion.div
        className="header_icons flex items-center gap-2 "
        initial={{
          x: -1000,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        viewport={{ once: true }}
      >
        <SocialIcon
          url="https://www.frontendmentor.io/profile/UsamaBinKashif"
          target="_blank"
          fgColor="lightgreen"
          bgColor="transparent"
          style={{
            width: "2rem",
          }}
        />
        <SocialIcon
          url="https://github.com/UsamaBinKashif"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          style={{
            width: "2rem",
          }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/usamabinkashif/"
          target="_blank"
          bgColor="transparent"
          fgColor="blue"
          style={{
            width: "2rem",
          }}
        />
        <SocialIcon
          url="https://www.upwork.com/freelancers/~014212caaff6cf8afa"
          target="_blank"
          network="upwork"
          style={{
            width: "1.2rem",
          }}
        />
      </motion.div>

      <motion.div
        className="header_icons-social flex items-center gap-2  "
        initial={{
          x: 1000,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer  "
          network="email"
          target="_blank"
          fgColor="gray"
          bgColor="transparent"
          style={{
            width: "2rem",
          }}
        />
        <p
          onClick={saveFile}
          className="uppercase hidden md:inline-flex text-purple-600 tracking-widest text-[0.625rem] font-extrabold  cursor-pointer"
        >
          Get Resume
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
