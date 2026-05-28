import Paragraph from "./Paragraph";
import Title from "./Title";
import EmailIcon from "./icons/email";
import GitIcon from "./icons/github";
import LinkedInIcon from "./icons/linkedin";
import PhoneIcon from "./icons/phone";
import ProfilePic from "../assets/images/profilepic.png";

type FooterProps = {
  displayTitle: string;
  subtitle: string;
};

const platforms = [
  { icon: <EmailIcon />, label: "Email: example@example.com" },
  { icon: <PhoneIcon />, label: "Phone: 123-456-7890" },
  { icon: <GitIcon height={18} width={18} color="var(--color-gray-blue)" />, label: "GitHub: https://github.com" },
  { icon: <LinkedInIcon />, label: "LinkedIn: https://linkedin.com" },
];

export default function Footer({ displayTitle, subtitle }: FooterProps) {
  return (
    <footer className="bg-yellow px-10 pt-20 pb-74 md:px-30 lg:px-80 flex flex-col gap-4 rounded-t-4xl relative">
      <h1 className="text-gray-blue font-primary font-bold text-5xl md:text-7xl lg:text-8xl">
        {displayTitle}
      </h1>
      <Title variant="h4" title={subtitle} />
      <div className="flex flex-col gap-4">
      {platforms.map((platform) => (
        <div className="flex items-center gap-2">
        {platform.icon} 
        <Paragraph className="text-xs md:text-base" variant="code" key={platform.label}>
          {platform.label}
        </Paragraph>
        </div>
      ))}
      </div>
      <img src={ProfilePic} alt="Profile Picture" className="absolute bottom-0 right-0 w-[60%] max-w-70 md:max-w-90 opacity-90" />
    </footer>
  );
}
