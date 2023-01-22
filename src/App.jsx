import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Social from "./components/Socials/Social";
import css from "./styles/app.module.scss"
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Skills />
    <Experience />
    <Project />
    <Social />
    <Footer />
  </div>

};

export default App;
