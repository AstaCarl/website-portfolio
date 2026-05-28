

export default function Paragraph({ children, variant }: { children: React.ReactNode; variant?: string }) {
  return (
    <p className={`text-gray-blue text-xs md:text-base ${variant === "code" ? "font-code" : "font-primary"}`}>
      {children}
    </p>
  );
}
