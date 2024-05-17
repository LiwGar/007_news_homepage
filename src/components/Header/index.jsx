import NavBar from "../NavBar";
import logo from "../../assets/images/logo.svg";

const Header = () => (
  <header className="flex justify-between items-center bg-blue-500">
    <img src={logo} alt="logo" />
    <NavBar />
  </header>
);

export default Header;

