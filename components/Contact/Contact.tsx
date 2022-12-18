import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
};
const Contact = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    window.location.href = `mailto:usamabinkashif.98@gmail.com?subject="From your portfolio website"&body=Hi, My name is ${data.name}. ${data.message}
    (${data.email})`;
    e?.target.reset();
  };

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
      className="relative grid place-items-center h-screen "
    >
      <h3 className="text-2xl uppercase tracking-[1rem] text-center text-gray-500 absolute top-20 md:top-24">
        Contact
      </h3>
      <motion.div
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
        className="flex items-center justify-between mt-32 md:mt-20 flex-col md:flex-row gap-4"
      >
        <form
          className=" bg-purple-800  rounded-lg  flex flex-col py-4 px-10    shadow-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-sm mb-2 font-semibold  ">
            I have just got what You need,{" "}
            <span className="underline decoration-wavy decoration-purple-600">
              Lets Talk.
            </span>
          </p>
          <div className="relative mb-2">
            <label htmlFor="name" className="leading-7 text-sm ">
              Your Name
            </label>
            <input
              type="text"
              {...register("name")}
              name="name"
              required
              className="w-full bg-purple-100 text-black rounded  outline-none py-2 px-3  "
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="email" className="leading-7 text-sm ">
              Your Email
            </label>
            <input
              type="email"
              {...register("email")}
              name="email"
              required
              className="w-full bg-purple-100 text-black rounded  outline-none py-2 px-3  "
            />
          </div>
          <div className="relative mb-2">
            <label htmlFor="message" className="leading-7 text-sm ">
              Message
            </label>
            <textarea
              {...register("message")}
              name="message"
              required
              className="w-full  bg-purple-100 text-black rounded  h-20  outline-none  py-2 px-3 resize-none  "
            ></textarea>
          </div>
          <button className="text-white bg-[#242424] border-0 py-2 px-6 focus:outline-none hover:bg-[#292929] transition-all rounded text-lg">
            Send
          </button>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115346.94071780318!2d68.35021849999995!3d25.384990499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1666006011457!5m2!1sen!2s"
          referrerPolicy="no-referrer-when-downgrade"
          width="390"
          className="rounded-lg opacity-80 invert h-72 md:h-96 "
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
