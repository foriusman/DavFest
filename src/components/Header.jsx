import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg';
import RegisterBtn from "./RegisterBtn";

const Header = () => (
  <header className="px-[4%] py-6 bg-white-10">
    <nav>
      <ul className="flex justify-between items-center">
        <li>
          <Link to='/' className="block">
            <img src={logo} alt="Logo" />
          </Link>
        </li>

        <li className="hidden lg:block">
          <Link to='/' className="block">
            <img src={logo} alt="Logo" />
          </Link>
        </li>

        <li>
          <RegisterBtn />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
