import { } from "react";
import Layout from "./layout/Layout";
import About from "./secciones/About";
import Projects from "./secciones/Projects";
import Skills from "./secciones/Skills";
import Hero from "./secciones/Hero";
import CoverParticles from "./componentes/CoverParticles";


function App() {
  return (

    <>
    <CoverParticles />
    <Layout>
      <Hero />
      <Projects />
    </Layout>
    </>
    
  );
}

export default App;
