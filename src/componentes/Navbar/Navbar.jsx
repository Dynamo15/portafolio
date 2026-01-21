import "./Navbar.css";
import navigation from "../../data/navigation.json";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="Navbar__logo">Ricardo Sánchez</div>


      <ul className="navbar__links">
        {navigation.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


