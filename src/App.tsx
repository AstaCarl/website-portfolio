import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <Hero
          subtitle="Hello my name is"
          displayTitle="Asta Carl."
          title="I am a webdeveloper."
          paragraph="With a user-centered approach to building digital solutions. I combine my multimedia design background with modern development skills to create interfaces that are both intuitive and technically reliable. Whether optimizing internal workflows or developing client-facing applications, I strive to write clean, maintainable code that meets user needs."
        />
        <div className="px-10 md:px-30 py-4 lg:px-80">
        <Title variant="h1" title="Some of the things I've made." />
</div>
        <Tools displayTitle="Tools i’ve worked with." />
      </main>
      <Footer
        displayTitle="Connect with me."
        subtitle="Get in touch, or checkout my socials"
      />
    </>
  );
}

export default App;
