import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"

import './index.css'

import JsonData from "./components/Constants/Product.json"


function App() {

  return (
    <>
    <div className="w-full h-auto">
        <Navbar data={JsonData.Header}/>
        <div className="">
          <Product data={JsonData.Features}/>
          <About />
          <Contact />
        </div>
    </div>
    
    </>
  )
}

export default App
