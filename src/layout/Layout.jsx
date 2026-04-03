import Navbar from "../componentes/Navbar/Navbar"
import CoverParticles from "../componentes/CoverParticles"


const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
        
        <CoverParticles />
        <Navbar/>
        
        <main className="pt-20">
        {children}
        </main>

        <footer className="text-center p-6 text-gray-400">
          Ricardo Sánchez
        </footer>
        
    </div>
  );
};

export default Layout;