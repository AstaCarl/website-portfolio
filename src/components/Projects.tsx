import Paragraph from "./Paragraph";
import Title from "./Title";
import { useEffect, useState } from "react";
import DaosImg from "../assets/images/daos.png";
import SimplyScreenshot from "../assets/images/simplyImg.png";
import ToolLabel from "./ToolLabel";
import MongoDBIcon from "./icons/mongoDB";
import NestJSIcon from "./icons/nestjs";
import ReactIcon from "./icons/react";
import DenoIcon from "./icons/deno";
import TypeScriptIcon from "./icons/typescript";
import PostgresIcon from "./icons/postgres";
import WashWorldImg from "../assets/images/washworld.png";

type Project = {
  color: string;
  labelColor: string;
  labelTextColor: string;
  title: string;
  name: string;
  screenshot: string;
  stack: { tech: string; icon: React.ReactNode }[];
  description: string;
  outcome: string;
  icon: "screen" | "phone";
};

const projects: Project[] = [
  {
    color: "bg-yellow",
    labelColor: "var(--color-mustard)",
    labelTextColor: "var(--color-dark-mustard)",
    title: "Bachelor project",
    name: "Simply - Automated scripts monitoring platform",
    screenshot: SimplyScreenshot,
    stack: [
      { tech: "React", icon: <ReactIcon color="var(--color-dark-mustard)" /> },
      { tech: "Deno", icon: <DenoIcon color="var(--color-dark-mustard)" /> },
      {
        tech: "TypeScript",
        icon: <TypeScriptIcon color="var(--color-dark-mustard)" />,
      },
      {
        tech: "PostgreSQL",
        icon: <PostgresIcon color="var(--color-dark-mustard)" />,
      },
    ],
    description:
      "A web application built in collaboration with Simply Chocolate to replace their terminal-based script monitoring system, delivering a secure dashboard with execution history, log visualisation, and cron schedule management.",
    outcome:
      "Replaced terminal-based monitoring with a dashboard accessible to the entire team removing a critical single point of dependency and making script monitoring independent of developer knowledge.",
    icon: "screen",
  },
  {
    color: "bg-light-blue",
    labelColor: "var(--color-sky-blue)",
    labelTextColor: "var(--color-sky-gray)",
    title: "2nd. Semester exam project",
    name: "Washworld  - Car wash booking app",
    screenshot: WashWorldImg,
    stack: [
      {
        tech: "React Native",
        icon: <ReactIcon color="var(--color-sky-gray)" />,
      },
      {
        tech: "NestJS",
        icon: <NestJSIcon color="var(--color-sky-gray)" />,
      },
      {
        tech: "TypeScript",
        icon: <TypeScriptIcon color="var(--color-sky-gray)" />,
      },
      {
        tech: "PostgreSQL",
        icon: <PostgresIcon color="var(--color-sky-gray)" />,
      },
    ],
    description:
      "A web application built in collaboration with Simply Chocolate to replace their terminal-based script monitoring system, delivering a secure dashboard with execution history, log visualisation, and cron schedule management.",
    outcome:
      "Replaced terminal-based monitoring with a dashboard accessible to the entire team removing a critical single point of dependency and making script monitoring independent of developer knowledge.",
    icon: "phone",
  },
  {
    color: "bg-light-red",
    labelColor: "var(--color-red)",
    labelTextColor: "var(--color-dark-red)",
    title: "1st. Semester exam project",
    name: "Daos - Musik Samspil",
    screenshot: DaosImg,
    stack: [
      { tech: "React", icon: <ReactIcon color="var(--color-dark-red)" /> },
      {
        tech: "NestJS",
        icon: <NestJSIcon color="var(--color-dark-red)" />,
      },
      {
        tech: "TypeScript",
        icon: <TypeScriptIcon color="var(--color-dark-red)" />,
      },
      {
        tech: "MongoDB",
        icon: <MongoDBIcon color="var(--color-dark-red)" />,
      },
    ],
    description:
      "A web app for managing musician profiles and ensembles. Based on a real design case from Kvalifik, a Danish digital agency, including a full design and design system to implement. Developed collaboratively using pair programming, with both developers contributing across the full stack.",
    outcome:
      "Delivered a functional platform where musicians can create profiles, form ensembles, and discover others to play with.",
    icon: "phone",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const n = projects.length;
  const next1 = (current + 1) % n;
  const next2 = (current + 2) % n;

  const getTranslate = (index: number) => {
    if (index === current) return 0;
    if (index === next1) return 105;
    if (index === next2) return 115;
    return -105;
  };

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 700); // 400ms animation + 200ms delay + buffer
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const peekButtons = (
    <div className="absolute top-0 bottom-0 right-0">
      {/* Back button — peeking behind */}
      <div
        onClick={() => setCurrent(next2)}
        className={`${projects[next2].color} absolute top-0 bottom-0 w-30 rounded-l-4xl cursor-pointer hover:w-34 transition-all duration-300 shadow-lg ${animate ? "nudge" : ""}`}
        style={{ right: "-0px", zIndex: 2, animationDelay: "0.1s" }}
      />
      {/* Front button — on top */}
      <div
        onClick={() => setCurrent(next1)}
        className={`${projects[next1].color} absolute top-0 bottom-0 w-38 rounded-l-4xl cursor-pointer hover:w-42 transition-all duration-300 shadow-lg ${animate ? "nudge" : ""}`}
        style={{ right: "48px", zIndex: 1, animationDelay: "0s" }}
      />
    </div>
  );

  return (
    <div style={{ overflowX: "clip" }}>
      <div className="relative">
        {projects.map((project, index) => (
          <section
            key={index}
            className={`${project.color} px-10 md:px-30 py-20 lg:px-60 flex flex-col gap-10 rounded-4xl`}
            style={{
              position: index === 0 ? "relative" : "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transform: `translateX(${getTranslate(index)}%)`,
              transition: "transform 700ms ease",
            }}
          >
            {project.icon === "screen" ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 w-[70%]">
                  <Title variant="h3" title={project.title} />
                  <Title variant="h2" title={project.name} />
                  <Paragraph>{project.description}</Paragraph>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap gap-4 max-w-sm">
                      {project.stack.map((technology) => (
                        <ToolLabel
                          key={
                            typeof technology === "string"
                              ? technology
                              : technology.tech
                          }
                          tool={
                            typeof technology === "string"
                              ? technology
                              : technology.tech
                          }
                          color={project.labelColor}
                          icon={
                            typeof technology === "string"
                              ? undefined
                              : technology.icon
                          }
                          size="small"
                          textColor={project.labelTextColor}
                        />
                      ))}
                    </div>
                    <div className="">
                      <Title variant="h4" title="Outcome" />
                      <Paragraph>{project.outcome}</Paragraph>
                    </div>
                  </div>
                  <img
                    className="w-[60%] h-full"
                    src={project.screenshot}
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <div className="flex w-full gap-8">
                <img
                  className="w-[35%]"
                  src={project.screenshot}
                  alt={project.title}
                />
                <div className="flex flex-col w-[60%] gap-8">
                  <div className="flex flex-col gap-2">
                    <Title variant="h3" title={project.title} />
                    <Title variant="h2" title={project.name} />
                    <Paragraph>{project.description}</Paragraph>
                  </div>

                  <div className="flex flex-wrap gap-4 max-w-sm">
                    {project.stack.map((technology) => (
                      <ToolLabel
                        key={
                          typeof technology === "string"
                            ? technology
                            : technology.tech
                        }
                        tool={
                          typeof technology === "string"
                            ? technology
                            : technology.tech
                        }
                        color={project.labelColor}
                        icon={
                          typeof technology === "string"
                            ? undefined
                            : technology.icon
                        }
                        size="small"
                        textColor={project.labelTextColor}
                      />
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Title variant="h4" title="Outcome" />
                    <Paragraph>{project.outcome}</Paragraph>
                  </div>
                </div>
              </div>
            )}
            {index === current && peekButtons}
          </section>
        ))}
      </div>
    </div>
  );
}
