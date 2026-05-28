import Paragraph from "./Paragraph";

type FeatureProps = {
  features: string[];
  stack: string[];
};

export default function Features({ features, stack }: FeatureProps) {
  return (
    <div className="bg-white-overlay rounded-xl py-4 px-4 flex justify-center gap-10 w-full">
      <div className="flex flex-col gap-1">
        <Paragraph variant="code">Key Features</Paragraph>
        <ul className="list-disc list-inside">
          {features.map((feature) => (
            <li className="font-code text-gray-blue text-sm" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-1">
        <Paragraph variant="code">Technologies</Paragraph>
        <ul className="list-disc list-inside text">
          {stack.map((tech) => (
            <li className="font-code text-gray-blue text-sm" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
