import { Link } from "react-router-dom";
import logo from '../assets/images/whitelogo.svg';

const Footer = () => (
  <footer className="bg-grey-100 pt-28 pb-2 px-[7%] lg:bg-[url(../images/left.svg),_url(../images/right.svg)] bg-no-repeat bg-left-right bg-contain text-white-10 flex flex-col gap-10 items-center">
    <ul className="flex justify-between w-full pb-4">
      <li>
        <Link className="underline">Join the community</Link>
      </li>
      <li>
        <img src={logo} alt="Logo" />
      </li>
    </ul>

    <p>Designed by <a href="#" className="underline">@Becky</a> developed by <a href="https://www.linkedin.com/in/kamba56/" className="underline">@Toma</a></p>

    <p><span className="opacity-30">&copy; Copyright {new Date().getFullYear()}</span> <span className="opacity-100 font-bold">GDG Maiduguri</span></p>
  </footer>
);

export default Footer;
