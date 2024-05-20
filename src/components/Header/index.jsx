import { useState } from "react";
import NavBar from "../NavBar";
import logo from "../../assets/images/logo.svg";
import iconMenu from "../../assets/images/icon-menu.svg";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

 return (
  <header 
    className="flex justify-between items-center mb-[1.875rem] 
    lg:place-content-between bg-blue-600">

      <img 
        src={logo} 
        alt="logo" 
        className="w-[3rem] lg:w-[4.25rem]"
      />
      <div 
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <img 
          src={iconMenu} 
          alt="icon_Menu" 
          className="w-[2.625rem]"
        />
      </div>
    <NavBar />
  </header>
 );
};

export default Header;

