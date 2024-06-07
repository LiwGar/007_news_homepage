const Footer = () => {
  return (
    <footer 
      id="attribution" 
      className="py-4 text-center">
        
      <div className="text-neutral-darkGrayIsHBlue text-sm">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-primary-softRed font-bold hover:text-neutral-veryDarkBlue"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://liwgar-portfolio.vercel.app/"
          className="text-primary-softRed font-bold  hover:text-neutral-veryDarkBlue"
        >
          LiwGar
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
