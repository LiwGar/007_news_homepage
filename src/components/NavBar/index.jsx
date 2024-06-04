// eslint-disable-next-line react/prop-types
const NavBar = ({ isOpen }) => {

  return (

    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-neutral-darkGrayIsHBlue 
     text-[1.07rem] lg:w-[27.5rem xl:text-[1.2rem]`}>

      <ul className="flex gap-12">
        <li 
          className="hover:text-primary-softOrange">
          <a href="#home">Home</a>
        </li>
        <li
          className="hover:text-primary-softOrange">
          <a href="#new">New</a>
        </li>
        <li
          className="hover:text-primary-softOrange">
          <a href="#popular">Popular</a>
        </li>
        <li
          className="hover:text-primary-softOrange">
          <a href="#trending">Trending</a>
        </li>
        <li
          className="hover:text-primary-softOrange">
          <a href="#categories">Categories</a>
        </li>
      </ul>

    </nav>
  );
}

export default NavBar;
