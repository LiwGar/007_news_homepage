import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewsContainer from "./components/NewsArticlesContainer"

function App() {
  

  return (
    <div className="px-4 pt-7 lg:px-40 lg:py-20">
      < Header/>
      <div className="lg:flex lg:gap-8">
        < MainArticle/>
        < NewsContainer/>
      </div>
    </div>
  )
}

export default App;
