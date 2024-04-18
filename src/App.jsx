import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Service from "./pages/Service/Service"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
                      <Navbar />
                      <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/service" element={<Service/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/contact" element={<Contact/>} />
                      </Routes>
        

      </BrowserRouter>

    </div>
  )
}

export default App