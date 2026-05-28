import Title from "./Title";

export default function Header() {
    return (
        <header className="bg-light-blue w-full h-15 rounded-b-4xl flex justify-between px-10 md:px-30 lg:px-80 items-center">
            <Title variant="h3" title="Asta Carl." />
        </header>
    );
}