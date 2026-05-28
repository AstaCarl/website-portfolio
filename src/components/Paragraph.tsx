

export default function Paragraph({ children, variant, className }: { children: React.ReactNode; variant?: string; className?: string }) {
  return (
    <p className={`text-gray-blue ${variant === "code" ? "font-code" : "font-primary"} ${className || ""}`}>
      {children}
    </p>
  );
}
