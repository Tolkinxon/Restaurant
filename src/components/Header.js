import { Link } from 'react-router-dom'
import '../App.css'
export default function Footer() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
