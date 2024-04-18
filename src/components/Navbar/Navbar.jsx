import { Link } from "react-router-dom"
import "./Navbar.css"
import { FaHouseUser, FaTimes } from "react-icons/fa"
import { FaCircleInfo, FaBriefcase, FaAddressBook,FaBars } from "react-icons/fa6"
import { useState } from "react"
const Navbar = () => {
  const [toggleIcon,setToggleIcon] =useState(false)
  return (
    <nav className="navbar_items">
      <h1 className="navbar_logo">Trippy</h1>
      <div className="menu_icons" onClick={() => setToggleIcon(prev => !prev)}>
          {toggleIcon ?  <FaTimes/> : <FaBars/>}
      </div>
      <ul className={`nav_menu ${toggleIcon ? 'active' : ''}`}>

        <li><Link to="/" className="nav_links"><FaHouseUser /> Home</Link></li>
        <li><Link to="/about" className="nav_links"><FaCircleInfo /> Sobre</Link></li>
        <li><Link to="/service" className="nav_links"><FaBriefcase /> Serviços</Link></li>
        <li><Link to="/contact" className="nav_links"><FaAddressBook /> Contato</Link></li>
        <li><Link to="/sign-up" className="nav_links_mobile">Login</Link></li>
        <button>Login</button>
      </ul>
    </nav>
  )
}

export default Navbar