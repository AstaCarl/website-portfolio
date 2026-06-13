import DisplayTitle from "./DisplayTitle";
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
    <section className="px-10 py-30 flex flex-col gap-4 md:gap-6 lg:gap-8 md:p-30 lg:p-60">
        <div>
      <Title variant="h3" title={subtitle} />
      <DisplayTitle title={displayTitle} center={false} />
      </div>
      <Title variant="h1" title={title} />
      <Paragraph>{paragraph}</Paragraph>
    </section>
  );
}
