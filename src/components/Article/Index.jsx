const Article = ({ image, number, title, text }) => {
  return (
    <article>
      <section 
        className="flex items-center mb-[1.2rem] gap-6 lg:gap-7 md:w-[24rem]">
        <div className="flex-none">
          <img src={image} alt="retroPCs_Img" className="w-[6.375rem]" />
        </div>

        <div className="">
          <p className="text-neutral-grayIsHBlue text-[2rem] leaning-none font-bold">
            {number}
          </p>

          <h3
            className="mb-2 text-neutral-veryDarkBlue text-[1.2rem] font-bold
              hover:text-primary-softRed lg:text-[1.23rem]"
          >
            {title}
          </h3>

          <p className="pb-2 text-neutral-darkGrayIsHBlue text-[1.05rem] lg:text-[1.14rem]">
            {text}
          </p>
        </div>
      </section>
    </article>
  );
};

export default Article;
