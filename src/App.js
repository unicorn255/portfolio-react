import Intro from "./Components/Intro";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import "./styles/App.css";
import NavLink from "./Components/NavLink";
import { useState } from "react";
import NavLinkToggle from "./Components/NavLinkToggle"


function App() {
  const [navToggle, setNavToggle] = useState(true);
  return (
    <div className="App">
      <header className="s-header">
        <nav className="header-nav-wrap">
          <NavLink />
        </nav>

        <div onClick={() => setNavToggle(()=>!navToggle)} className={navToggle ? "header-menu-toggle" :"header-menu-toggle"}>
           {/* {navToggle ? <div  ><span >Nav-Menue</span></div> : <NavLinkToggle />}  */}
          <span >Nav-Menue</span>
        </div>
        {!navToggle && <NavLinkToggle />}
      </header>
      
      <Intro />
      <About />
      <Services />
      {/* <Certificate /> */}
      <Contact />
    </div>
  );
}

export default App;
