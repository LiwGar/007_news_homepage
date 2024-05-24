// eslint-disable-next-line react/prop-types
const NavBar = ({ isOpen }) => {

  return (

    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-neutral-darkGrayIsHBlue 
     text-[1.07rem] lg:w-[27.5rem`}>

      <ul className="flex gap-10">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#new">New</a>
        </li>
        <li>
          <a href="#popular">Popular</a>
        </li>
        <li>
          <a href="#trending">Trending</a>
        </li>
        <li>
          <a href="#categories">Categories</a>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
