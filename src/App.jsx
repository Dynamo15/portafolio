import { } from "react";
import Navbar from "./componentes/Navbar/Navbar"
import About from "./secciones/About";
import Projects from "./secciones/Projects";
import Skills from "./secciones/Skills";

function App() {


  

  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>Mi Portafolio</h1>

      </header>

      <main className="content">
        <p>Portafolio en construcción </p>
      </main>
    </div>
  );
}

export default App;
