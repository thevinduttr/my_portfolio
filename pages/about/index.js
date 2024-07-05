import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiBootstrap,
  SiAdobephotoshop,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiAndroidstudio,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiGithub,
  SiRstudio,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiBootstrap key="bootstrap" />,
          <SiTailwindcss key="tailwindcss" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "Programming Languages",
        icons: [
          <FaJava key="java" />,
          <FaPython key="python" />,
          <SiC key="c" />,
          <SiCplusplus key="cplusplus" />,
        ],
      },
      {
        title: "Mobile App Development",
        icons: [<SiKotlin key="kotlin" />, <SiAndroidstudio key="androidstudio" />],
      },
      {
        title: "SQL & Database Management",
        icons: [
          <SiMysql key="mysql" />,
          <SiMongodb key="mongodb" />,
          <SiSqlite key="sqlite" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
      {
        title: "Others",
        icons: [<SiGithub key="github" />, <SiRstudio key="rstudio" />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "BSc (Hons) in Information Technology Specialising in Software Engineering",
        stage: "2021 - Present",
      },
      {
        title: "Diploma in English Language & Literature",
        stage: "2021 – 2022",
      },
      {
        title: "Rahula College Matara",
        stage: "2007 – 2021",
      },
    ],
  },
  {
    title: "Academic Credentials",
    info: [
      {
        title: "Cumulative Grade Point Average",
        stage: "3.26",
      },
      {
        title: "G.C.E A/Level",
        stage: "Physics – C, Chemistry – C, Combined Maths – S",
      },
      {
        title: "G.C.E O/Level",
        stage: "7A’s and 2B’s",
      },
    ],
  },
  {
    title: "Strengths",
    info: [
      {
        title: "Design Process",
        stage: "95%",
      },
      {
        title: "Communication",
        stage: "100%",
      },
      {
        title: "Creativity",
        stage: "97%",
      },
      {
        title: "Problem Handling",
        stage: "93%",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="xl:h-full xl:pt-2 pt-40 bg-primary py-0 text-center xl:text-left ">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="hidden xl:flex absolute -bottom-1/4 -left-[235px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-5">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="h2"
          >
            Crafting <span className="text-accent">stories</span> through code and innovation.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0"
          >
            I&apos;m Thevindu Thulnith Rathnaweera, a 3rd-year student at SLIIT. Passionate about coding and software development, I excel in leadership and quality assurance. At 21+, I&apos;m eager to innovate and collaborate. Let&apos;s build something great together!
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Cumulative GPA</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300" : ""
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 pb-24 xl:pb-0 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"> :- </div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
