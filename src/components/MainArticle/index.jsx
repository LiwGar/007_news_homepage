import imgWebMobile from "../../assets/images/image-web-3-mobile.jpg";
import imgWebDesktop from "../../assets/images/image-web-3-desktop.jpg";

const MainArticle = () => {

  return (
    <main>
      <section>

        <picture >
            <source media="(max-width: 720px)" srcSet={imgWebMobile}/>
            <source media="(min-width: 721px)" srcSet={imgWebDesktop}/>
            <img 
              src={imgWebMobile} 
              alt="img_Web_Mobile" 
              className="mb-[1.875rem] xl:w-[52.8rem]"/>
        </picture>

        <div className="lg:flex">
          <div className="flex-1">
            <h1 className="mb-[1.625rem] text-neutral-veryDarkBlue text-5xl font-bold
              lg:w-[19rem] lg:text-6xl xl:w-[26rem] xl:text-[4.6rem]">
              The Bright Future of Web 3.0?
            </h1>
          </div>

          <div className="flex-1 lg:ml-4">
            <p className="mb-[1.875rem] text-neutral-darkGrayIsHBlue text-[1.02rem] 
              leading-6 lg:w-[22rem] lg:mb-[2.375rem] xl:mb-[2.8rem] xl:text-[1.14rem] 
              xl:leading-8 xl:w-[25rem]">
              We dive into the next evolution of the web that claims to put the power 
              of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?
            </p>

            <button className="w-[11.925rem] h-[3.125rem] mb-[3.875rem] bg-primary-softRed
             text-neutral-offWhite text-[.9rem] font-semibold uppercase tracking-[.3rem]
              hover:bg-neutral-veryDarkBlue lg:mb-0 lg:p-0 xl:w-[14rem] xl:h-[3.4rem] 
              xl:text-[1rem]">
              Read more
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}

export default MainArticle;

