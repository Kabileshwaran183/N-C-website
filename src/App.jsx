import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

function App() {

  return (
    <>
    <div className="w-full h-auto px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Product />
          <About />
          <Contact />
        </div>
    </div>
    
    </>
  )
}

export default App
