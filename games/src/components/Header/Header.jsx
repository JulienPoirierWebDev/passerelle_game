import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="block">
          <img src={logo} alt="Logo Plateforme de jeux" className="h-12" />
        </Link>
      </div>
      <nav className="flex">
        <Link
          to="/chifumi"
          className="text-lg px-3 py-2 hover:bg-gray-700 rounded transition-colors"
        >
          Chifumi
        </Link>
        <Link
          to="/simon"
          className="text-lg px-3 py-2 hover:bg-gray-700 rounded transition-colors"
        >
          Simon
        </Link>
        <Link
          to="/memory"
          className="text-lg px-3 py-2 hover:bg-gray-700 rounded transition-colors"
        >
          Memory
        </Link>
      </nav>
    </header>
  );
};

export default Header;
