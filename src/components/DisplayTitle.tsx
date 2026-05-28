export default function DisplayTitle({ title }: { title: string }) {
    return (
        <h1 className="text-gray-blue font-primary font-bold text-5xl md:text-7xl lg:text-8xl">
            {title}
        </h1>
    );
}