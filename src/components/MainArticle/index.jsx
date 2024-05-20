import imgWebMobile from "../../assets/images/image-web-3-mobile.jpg";
import imgWebDesktop from "../../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {

  return (
    <main>
      <section>

        <picture >
            <source media="(max-width: 1023px)" srcSet={imgWebMobile}/>
            <source media="(min-width: 1024px)" srcSet={imgWebDesktop}/>
            <img 
              src={imgWebMobile} 
              alt="img_Web_Mobile" 
              className="mb-[1.875rem]"/>
        </picture>

       <div className="lg:flex">
        <h1 className="mb-[1.625rem] text-neutral-veryDarkBlue text-5xl font-bold
            lg:text-6xl">
            The Bright Future of Web 3.0?
          </h1>

          <div>
            <p className="mb-[1.875rem] text-neutral-darkGrayIsHBlue text-[1.02rem] leading-7">
            We dive into the next evolution of the web that claims to put the power 
            of the platforms back into the hands of the people. 
            But is it really fulfilling its promise?
            </p>

            <button className="w-[11.625rem] h-[3.125rem] mb-[4rem] bg-primary-softRed text-neutral-offWhite 
              font-semibold uppercase tracking-[.25rem]">
              Read more
            </button>
          </div>
       </div>

      </section>
    </main>
  );
}

export default MainArticle