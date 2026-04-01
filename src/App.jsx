import { } from "react";
import Layout from "./layout/Layout"
import About from "./secciones/About";
import Projects from "./secciones/Projects";
import Skills from "./secciones/Skills";
import Hero from "./secciones/Hero";
import Navbar from "./componentes/Navbar/Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <h1 className= "text-3x1 text-blue-500">App funcionando</h1>
    </>
  
  );
}

export default App;
