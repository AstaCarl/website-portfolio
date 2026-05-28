
type ToolLabelProps = {
    tool: string;
    color: string;
    icon?: React.ReactNode;
    textColor?: string;
    size?: "small" | "medium" | "large";
}

export default function ToolLabel({ tool, color, textColor, icon, size }: ToolLabelProps) {
    return (
        <span className={` rounded-full w-fit flex justify-center items-center gap-2 ${size === "small" ? "text-sm py-1 px-2" : size === "medium" ? "text-base py-2 px-4" : "text-xl"}`} style={{ backgroundColor: color}}>
            {icon && <span>{icon}</span>}
            <span style={{ color: textColor }}>
                {tool}
            </span>
        </span>
    )
}