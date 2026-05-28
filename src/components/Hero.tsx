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
    <section className="px-10 py-30 flex flex-col gap-4 md:gap-6 lg:gap-8 md:p-30 lg:p-80">
        <div>
      <Title variant="h3" title={subtitle} />
      <h1 className="text-gray-blue font-primary font-bold text-5xl md:text-7xl lg:text-8xl">
        {displayTitle}
      </h1>
      </div>
      <Title variant="h1" title={title} />
      <Paragraph>{paragraph}</Paragraph>
    </section>
  );
}
