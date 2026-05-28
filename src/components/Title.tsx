// export default function Title({ children }: { children: React.ReactNode }) {
//     return (
//         <h1 className="text-dark-blue font-primary font-bold text-4xl">
//             {children}
//         </h1>
//     );
// }
type TitleProps = {
  title: string;
  variant: "h1" | "h2" | "h3" | "h4";
};

export default function Title({ title, variant }: TitleProps) {
  const Tag = variant;
  const variantClasses: Record<TitleProps["variant"], string> = {
    h1: "text-dark-blue font-primary font-bold text-2xl md:text-3xl lg:text-4xl",
    h2: "text-dark-blue font-primary font-bold text-3xl",
    h3: "text-gray-blue font-code text-lg md:text-xl lg:text-2xl",
    h4: "text-dark-blue font-primary font-bold text-lg md:text-xl lg:text-2xl",
  };
  return <Tag className={`${variantClasses[variant]}`}>{title}</Tag>;
}
