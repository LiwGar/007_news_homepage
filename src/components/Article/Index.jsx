import retroPC from "../../assets/images/image-retro-pcs.jpg";

const Article = () => {

  return (
    <article>
      <section 
        className="flex justify-content-center gap-6 border-2 border-red-500">

        <div>
          <img 
            src={retroPC} 
            alt="retroPCs_Img" />
        </div>
        
        <div className="">
          <p 
            className="mb-2 text-neutral-grayIsHBlue text-[2.26rem] font-bold">
            01          
          </p>

          <h2
            className="mb-2 text-neutral-veryDarkBlue text-[1.26rem] font-bold">
            Reviving Retro PCs
          </h2>

          <p 
            className="text-neutral-darkGrayIsHBlue text-[1rem] lg:text-[1rem] xl:text-[1.14rem]">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>

      </section>
    </article>
  );
}

export default Article; 

