import Image from "next/image";

type Props = {
  project: any;
};

const Projects = (props: Props) => {
  return (
    <div className="bg-[#272727] w-96 mt-16 bg-opacity-90 rounded h-[430px] mx-auto p-2  flex-shrink-0  flex flex-col space-y-5 items-center justify-center cursor-pointer ">
      <Image
        src={props.project.image}
        height={300}
        width={600}
        alt={props.project.name}
        className="flex flex-col rounded cursor-pointer"
      />
      <div className=" ">
        <h3 className="text-sm underline decoration-purple-600 underline-offset-4 mb-1">
          {props.project.name}
        </h3>
        <p className="text-sm mb-1">{props.project.description}</p>
        <div className="flex flex-wrap">
          {props.project.tags.map((tag) => (
            <span
              key={tag}
              className="m-[2px] p-[2px] rounded text-xs  bg-gradient-to-r from-[#5F0A87] to-[#A4508B] "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-5 ">
        {props.project.source_code && (
          <a
            href={props.project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-purple-600 text-xs  underline-offset-4  hover:text-gray-300"
          >
            Source Code
          </a>
        )}
        <a
          href={props.project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-purple-600 text-xs  underline-offset-4  hover:text-gray-300"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Projects;
