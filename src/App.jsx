import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Api from "./components/Api"
import Cards from "./components/Cards"
import Prefooter from "./components/Prefooter"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App bg-slate-50">
     <Navbar />
     <Hero />
     <Api />
     <Cards />
     <Prefooter />
     <Footer />
    </div>
  )
}

export default App
