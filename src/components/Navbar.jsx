import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/'}>TTM</Link>
        </h2>
        <ul>
            <li>
                <Link to={'/'}>Início</Link>
            </li>
            <li>
                <Link to={'/about'} className="new-btn">Sobre</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar