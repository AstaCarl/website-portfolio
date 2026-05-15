import Paragraph from "./Paragraph";
import Title from "./Title";

type HeroProps = {
  subtitle: string;
  displayTitle: string;
  title: string;
  paragraph: string;
};

export default function Hero({ subtitle, displayTitle, title, paragraph }: HeroProps) {
  return (
    <section className="w-[80%] flex flex-col gap-8 p-60">
        <div>
      <Title variant="h3" title={subtitle} />
      <h1 className="text-gray-blue font-primary font-bold text-8xl">
        {displayTitle}
      </h1>
      </div>
      <Title variant="h1" title={title} />
      <Paragraph>{paragraph}</Paragraph>
    </section>
  );
}
