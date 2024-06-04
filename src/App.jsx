import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewsContainer from "./components/NewsArticlesContainer"

function App() {
  

  return (
    <div 
      className="px-4 pt-7 lg:w-full lg:py-20 lg:px-0 lg:max-w-[1024px] lg:mx-auto 
                xl:px-6 xl:max-w-[1280px] xl:mx-auto 2xl:w-[1440px] 2xl:mx-auto 
                ">
      < Header />
      <div className="lg:flex lg:gap-2 xl:gap-8">
        < MainArticle/>
        < NewsContainer/>
      </div>
    </div>
  )
}

export default App;
