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

type ToolsProps = {
  displayTitle: string;
};

const tools = [
  {
    tool: "React",
    color: "var(--color-red)",
    icon: <ReactIcon />,
    textColor: "var(--color-creme)",
  },
  {
    tool: "HTML 5",
    color: "var(--color-green)",
    icon: <HTMLIcon />,
    textColor: "var(--color-creme)",
  },
  {
    tool: "Git Version Control",
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
    icon: <TypeScriptIcon />,
  },
  {
    tool: "Tailwind CSS",
    color: "var(--color-light-blue)",
    icon: <TailwindIcon />,
    textColor: "var(--color-dark-blue)",
  },
  {
    tool: "CSS 3",
    color: "var(--color-light-red)",
    icon: <CSSicon />,
    textColor: "var(--color-dark-blue)",
  },

  {
    tool: "PostgreSQL",
    color: "var(--color-green)",
    icon: <PostgresIcon />,
    textColor: "var(--color-creme)",
  },
  { tool: "NestJS", color: "var(--color-light-red)", icon: <NestJSIcon />, textColor: "var(--color-dark-blue)" },
  { tool: "Next.js", color: "var(--color-yellow)", icon: <NextJSIcon />, textColor: "var(--color-dark-blue)" },
  { tool: "MongoDB", color: "var(--color-light-blue)", icon: <MongoDBIcon />, textColor: "var(--color-dark-blue)" },
  { tool: "Figma", color: "var(--color-yellow)", icon: <FigmaIcon />, textColor: "var(--color-dark-blue)" },
    { tool: "Express.js", color: "var(--color-green)", icon: <ExpressJSIcon />, textColor: "var(--color-creme)" },
    { tool: "Deno", color: "var(--color-red)", icon: <DenoIcon />, textColor: "var(--color-creme)" },
];

const row1 = tools.slice(0, 2);
const row2 = tools.slice(2, 5);
const row3 = tools.slice(5, 7);
const row4 = tools.slice(7, 11);
const row5 = tools.slice(11, 14);

export default function Tools({ displayTitle }: ToolsProps) {
  return (
    <section className="flex flex-col gap-8 p-60">
      <h1 className="text-gray-blue font-primary font-bold text-8xl">
        {displayTitle}
      </h1>
      <Title variant="h2" title="Technologies and Platforms I've Mastered" />

      <div className="flex items-center flex-col gap-4">
        <div className="flex gap-6">
          {row1.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {row2.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {row3.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {row4.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
            />
          ))}
        </div>
        <div className="flex gap-6">
          {row5.map((t) => (
            <ToolLabel
              key={t.tool}
              tool={t.tool}
              color={t.color}
              icon={t.icon}
              textColor={t.textColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
