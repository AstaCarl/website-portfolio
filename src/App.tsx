import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Title from "./components/Title";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Header />
      <main className="w-screen">
        <Hero
          subtitle="Hello I am."
          displayTitle="Asta Carl."
          title="I am a webdeveloper."
          paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. "
        />
        <div className="px-60 py-4 lg:px-80">
        <Title variant="h1" title="Some of the things I've made." />
</div>
        <Projects />
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
