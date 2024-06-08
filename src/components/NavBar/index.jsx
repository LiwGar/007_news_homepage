import iconMenuClose from "../../assets/images/icon-menu-close.svg";

const NavBar = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`text-neutral-darkGrayIsHBlue text-[1.07rem] lg:flex 
        lg:gap-12 xl:text-[1.2rem] 
        
        ${
          isOpen
            ? "fixed w-[68%] h-full top-0 right-0 bg-neutral-offWhite"
            : "hidden"
        } 
        lg:block`}
    >
      <div className="flex justify-between px-6 py-8 mb-12 cursor-pointer lg:hidden">
        <span></span>
        <img
          src={iconMenuClose}
          alt="icon_MenuClose"
          className="w-[2rem]"
          onClick={() => setIsOpen(false)}
        />
      </div>

      <ul
        className={`flex flex-col gap-4 lg:flex-row lg:gap-12 
          ${isOpen ? "mt-4 px-6 font-semibold" : ""}`}
      >
        <li className="hover:text-primary-softOrange">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-primary-softOrange">
          <a href="#new">New</a>
        </li>
        <li className="hover:text-primary-softOrange">
          <a href="#popular">Popular</a>
        </li>
        <li className="hover:text-primary-softOrange">
          <a href="#trending">Trending</a>
        </li>
        <li className="hover:text-primary-softOrange">
          <a href="#categories">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
