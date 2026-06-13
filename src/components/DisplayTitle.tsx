export default function DisplayTitle({ title, center }: { title: string; center: boolean }) {
    return (
        <h1 className={`text-gray-blue font-primary font-bold text-5xl md:text-7xl lg:text-8xl ${center ? 'text-center' : ''}`}>
            {title}
        </h1>
    );
}