import Title from "./Title";

type FeatureProps = {
  features: string[];
  stack: string[];
};

export default function Features({ features, stack }: FeatureProps) {
  return (
    <div className="bg-white-overlay w-[70%] rounded-4xl py-4 px-20 flex justify-between ">
      <div className="flex flex-col gap-2">
        <Title variant="h4" title="Key Features" />
        <ul className="list-disc list-inside">
          {features.map((feature) => (
            <li className="font-primary text-dark-blue" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <Title variant="h4" title="Tech Stack" />
        <ul className="list-disc list-inside text">
          {stack.map((tech) => (
            <li className="font-primary text-dark-blue" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
