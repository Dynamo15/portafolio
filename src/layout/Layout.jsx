import Navbar from "../componentes/Navbar/Navbar"


const Layout = ({ children }) => {
  return (
    <div className="bg-black text-white min-h-screen">
        <Navbar/>
        <main className="pt-20">
        {children}
        </main>
    </div>
  );
};

export default Layout;