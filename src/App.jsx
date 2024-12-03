
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar.jsx"
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <NavBar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;