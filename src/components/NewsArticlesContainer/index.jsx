import NewArticle from "../NewArticle";

const NewsContainer = () => {

  return (

    <aside className="px-6 py-5 bg-neutral-veryDarkBlue text-neutral-grayIsHBlue
    lg:h-[32.5rem]">

      <h1 className="text-primary-softOrange text-[2.05rem] font-bold
          lg:text-[2.45rem]">
        New
      </h1>
      < NewArticle
        title='Hydrogen VS Electric Cars'
        text='Will hydrogen-fueled cars ever catch up to EVs?'
      />
      < NewArticle
        title='The Downsides of AI Artistry'
        text='What are the possible adverse effects of on-demand AI image generation?'
      />
      < NewArticle
        title='Is VC Funding Drying Up?'
        text='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      />

    </aside>
  );
};

export default NewsContainer; 