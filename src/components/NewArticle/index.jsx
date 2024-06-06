const NewArticle = ({title, text}) => {

  return(
    <article className="border-b-[0.06rem] border-neutral-grayIsHBlue pt-6 pb-7
              last:border-none lg:pt-4 lg:pb-4 xl:pt-7 xl:pb-8">
      <section>
        <h2 
          className="my-2 text-neutral-offWhite text-[1.26rem] leading-5 
            font-bold tracking-[.03rem] cursor-pointer hover:text-primary-softOrange 
            lg:text-[1.2rem] xl:mb-4 xl:text-[1.4rem]
              ">
          {title}
        </h2>
        <p 
          className="text-[1.1rem] leading-7 lg:text-[1rem] xl:text-[1.14rem]">
          {text}
        </p>
      </section>
    </article>

  );
};

export default NewArticle; 

