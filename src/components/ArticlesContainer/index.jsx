import Article from "../Article/Index";
import retroPC from "../../assets/images/image-retro-pcs.jpg";
import topLaptops from "../../assets/images/image-top-laptops.jpg";
import gaming from "../../assets/images/image-gaming-growth.jpg";

const ArticleContainer = () => {
  return (
    <article>
      <section 
        className=" md:grid md:grid-cols-2 md:gap-10 lg:gap-8 xl:flex">
        <Article
          image={retroPC}
          number="01"
          title="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
        <Article
          image={topLaptops}
          number="02"
          title="Top 10 Laptops of 2022"
          text="Our best picks for various needs and budgets."
        />
        <Article
          image={gaming}
          number="03"
          title="The Growth of Gaming"
          text="How the pandemic has sparked fresh opportunities."
        />
    </section>
    </article>
  );
};

export default ArticleContainer;
