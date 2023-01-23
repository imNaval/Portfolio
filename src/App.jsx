import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Skills from "./components/Skills/Skills";
import Social from "./components/Socials/Social";
import css from "./styles/app.module.scss"
const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Home />
    <Skills />
    <Project />
    <Social />
    <Footer />
  </div>

};

export default App;
