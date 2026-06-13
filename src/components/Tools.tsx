import Title from "./Title";
import ToolLabel from "./ToolLabel";
import ReactIcon from "./icons/react";
import HTMLIcon from "./icons/html";
import GitIcon from "./icons/github";
import JavaScriptIcon from "./icons/javascript";
import TypeScriptIcon from "./icons/typescript";
import TailwindIcon from "./icons/tailwind";
import CSSicon from "./icons/css";
import PostgresIcon from "./icons/postgres";
import NestJSIcon from "./icons/nestjs";
import NextJSIcon from "./icons/nextjs";
import MongoDBIcon from "./icons/mongoDB";
import FigmaIcon from "./icons/figma";
import DenoIcon from "./icons/deno";
import ExpressJSIcon from "./icons/express";
import DisplayTitle from "./DisplayTitle";

type ToolsProps = {
  displayTitle: string;
};

const tools = [
  {
    tool: "React",
    color: "var(--color-red)",
    icon: <ReactIcon color="var(--color-creme)" />,
    textColor: "var(--color-creme)",
  },
  {
    tool: "HTML 5",
    color: "var(--color-green)",
    icon: <HTMLIcon />,
    textColor: "var(--color-creme)",
  },
  {
    tool: "Git",
    color: "var(--color-light-red)",
    icon: <GitIcon />,
  },
  {
    tool: "JavaScript",
    color: "var(--color-yellow)",
    icon: <JavaScriptIcon />,
  },
  {
    tool: "TypeScript",
    color: "var(--color-light-blue)",
    icon: <TypeScriptIcon color="var(--color-dark-blue)" />,
  },
  {
    tool: "Tailwind CSS",
    color: "var(--color-light-blue)",
    icon: <TailwindIcon />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "PostgreSQL",
    color: "var(--color-green)",
    icon: <PostgresIcon color="var(--color-creme)" />,
    textColor: "var(--color-creme)",
  },

  {
    tool: "NestJS",
    color: "var(--color-light-red)",
    icon: <NestJSIcon color="var(--color-dark-blue)" />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "Deno",
    color: "var(--color-red)",
    icon: <DenoIcon color="var(--color-creme)" />,
    textColor: "var(--color-creme)",
  },
  {
    tool: "Next.js",
    color: "var(--color-yellow)",
    icon: <NextJSIcon />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "MongoDB",
    color: "var(--color-light-blue)",
    icon: <MongoDBIcon color="var(--color-dark-blue)" />,
    textColor: "var(--color-dark-blue)",
  },

  {
    tool: "CSS 3",
    color: "var(--color-light-red)",
    icon: <CSSicon />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "Figma",
    color: "var(--color-yellow)",
    icon: <FigmaIcon />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "Express.js",
    color: "var(--color-green)",
    icon: <ExpressJSIcon />,
    textColor: "var(--color-creme)",
  },
];

const row1 = tools.slice(0, 2);
const row2 = tools.slice(2, 5);
const row3 = tools.slice(5, 7);
const row4 = tools.slice(7, 10);
const row5 = tools.slice(10, 11);
const row6 = tools.slice(11, 14);

export default function Tools({ displayTitle }: ToolsProps) {
  return (
    <section className="flex flex-col gap-8 px-10 py-30 md:px-30 lg:px-60 items-center">
      <DisplayTitle title={displayTitle} center={true} />
      <Title variant="h2" title="Technologies and Platforms I've Mastered" />

      <div className="flex items-center flex-col gap-4">
        <div className="flex gap-2 md:gap-6">
          {row1.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {row2.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {row3.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {row4.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {row5.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
        <div className="flex gap-2 md:gap-6">
          {row6.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
              size="medium"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
