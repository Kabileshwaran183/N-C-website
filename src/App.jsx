import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Product from "./components/Product"


import './index.css'

import JsonData from "./components/Constants/Product.json"
import Footer from "./components/Footer"
import { Services } from "./components/services"


function App() {

  return (
    <>
    <div >
        <Navbar data={JsonData.Header}/>
        <div >
          <Product data={JsonData.Products}/>
          <About />
          <Services data={JsonData.Services} />
          <Contact />
          <Footer/>
        </div>
    </div>
    
    </>
  )
}

export default App
