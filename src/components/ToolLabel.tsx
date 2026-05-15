
type ToolLabelProps = {
    tool: string;
    color: string;
    icon?: React.ReactNode;
    textColor?: string;
}

export default function ToolLabel({ tool, color, textColor, icon }: ToolLabelProps) {
    return (
        <span className="px-4 py-2 rounded-full w-fit flex justify-center items-center gap-2" style={{ backgroundColor: color}}>
            {icon && <span>{icon}</span>}
            <span style={{ color: textColor }} className="text-xl">
                {tool}
            </span>
        </span>
    )
}