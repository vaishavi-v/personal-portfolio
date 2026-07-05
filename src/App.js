import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { AboutStats } from "./components/AboutStats";
import { Skills } from "./components/Skills";
import { Resume } from "./components/Resume";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutStats />
      <Skills />
      <Resume />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;