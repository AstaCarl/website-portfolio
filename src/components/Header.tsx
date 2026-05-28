import Title from "./Title";

export default function Header() {
    return (
        <header className="bg-light-blue w-full h-20 rounded-b-4xl flex justify-between px-60 lg:px-80 items-center">
            <Title variant="h3" title="Asta Carl." />
            {/* <nav className="flex gap-4">
                <a href="">Projects</a>
                <a href="">Tools</a>
                <a href="">Connect</a>
            </nav> */}
        </header>
    );
}