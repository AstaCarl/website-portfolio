import Phone from "./phone";
import Features from "./Features";
import Paragraph from "./Paragraph";
import Title from "./Title";
import DaoScreenshot from "../assets/images/daoScreenshot.png";

const projects = [
  {
    color: "bg-yellow",
    title: "School project",
    name: "Daos - Musik Samspil",
    description:
      "A web app for managing musician profiles and ensembles. Users can create profiles, form ensembles, and join existing ones.",
    features: [
      "Create Profile",
      "Create Ensemble",
      "Register in an Ensemble",
      "Search for Musicians",
    ],
    stack: ["React", "NestJS", "MongoDB"],
    screenshot: DaoScreenshot,
    outcome:
      "A functional web app showcasing integration of React, NestJS, and MongoDB, focusing on user-friendly ensemble management.",
  },
    {
    color: "bg-light-blue",
    title: "School project",
    name: "Daos - Musik Samspil",
    description:
      "A web app for managing musician profiles and ensembles. Users can create profiles, form ensembles, and join existing ones.",
    features: [
      "Create Profile",
      "Create Ensemble",
      "Register in an Ensemble",
      "Search for Musicians",
    ],
    stack: ["React", "NestJS", "MongoDB"],
    screenshot: DaoScreenshot,
    outcome:
      "A functional web app showcasing integration of React, NestJS, and MongoDB, focusing on user-friendly ensemble management.",
  },
      {
    color: "bg-light-red",
    title: "School project",
    name: "Daos - Musik Samspil",
    description:
      "A web app for managing musician profiles and ensembles. Users can create profiles, form ensembles, and join existing ones.",
    features: [
      "Create Profile",
      "Create Ensemble",
      "Register in an Ensemble",
      "Search for Musicians",
    ],
    stack: ["React", "NestJS", "MongoDB"],
    screenshot: DaoScreenshot,
    outcome:
      "A functional web app showcasing integration of React, NestJS, and MongoDB, focusing on user-friendly ensemble management.",
  },
];

export default function Projects() {
  return (
        <div className="flex flex-col">
      {projects.map((project, index) => (
        <section
        key={index}
        style={{ zIndex: index + 1 }}
          className={`${project.color} px-60 py-30 rounded-4xl flex flex-col gap-10 sticky top-0`}
        >
          <Title variant="h1" title="Some of the things I've made." />

          <div className="flex gap-10" key={project.title}>
            <Phone screenshot={project.screenshot} />
            <div className="flex flex-col gap-4">
              <Title variant="h3" title={project.title} />
              <Title variant="h2" title={project.name} />
              <Paragraph>{project.description}</Paragraph>
              <Features features={project.features} stack={project.stack} />
              <Title variant="h4" title="outcome" />
              <Paragraph>{project.outcome}</Paragraph>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
