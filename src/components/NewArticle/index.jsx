const NewArticle = ({title, text}) => {

  return(
    <article className="border-b-[0.06rem] border-neutral-grayIsHBlue pt-6 pb-7
              last:border-none">
      <section>
        <h2 className="mt-2 mb-2 text-neutral-offWhite text-[1.26rem] 
              leading-5 font-bold tracking-[.03rem] cursor-pointer 
              hover:text-primary-softOrange">
          {title}
        </h2>
        <p className="text-[1.1rem] leading-7 lg:w-[18rem] lg:text-[1rem]">
          {text}
        </p>
      </section>
    </article>

  );
};

export default NewArticle; 

