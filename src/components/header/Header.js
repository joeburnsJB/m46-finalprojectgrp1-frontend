import logo from "./images/piston_logo_black.png"
import "./Header.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [linkQuery, setLinkQuery] = useState("/")
  const [searchResults, setSearchResults] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".menu")
      const hamburgerMenu = document.querySelector(".hamburger-menu")

      if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }

  const handleInputChange = async (event) => {
    setSearchQuery(event.target.value)
    let linkQueryValue = "/search/".concat(event.target.value)
    setLinkQuery(linkQueryValue)

    try {
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=${searchQuery}&limit=10&exact=0`
      )
      const data = await response.json()
      setSearchResults(data)
      if (event.target.value === "") {
        setIsDropdownOpen(false)
      }
      else {
        setIsDropdownOpen(true)
      }
    } catch (error) {
      console.log("Error fetching games:", error)
    }
  }

  const handleSearch = () => {
    setIsDropdownOpen(false)
  }

  const handleResultClick = (game) => {
    setSearchQuery(game.external)
    let linkQueryValue = "/search/".concat(game.external)
    setLinkQuery(linkQueryValue)
    setIsDropdownOpen(false)
  }

  return (
    <header className="header-container">
      <section className="logo-section">
        <Link to="/"><p className="title">Piston</p></Link>
        <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
      </section>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search here.."
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Link to={linkQuery}>
            <button className="search-button" type="submit" onClick={() => handleSearch()}>Search</button>
          </Link>

        </form>
        {isDropdownOpen && (
          <div className="search-dropdown">
            {searchResults.map((game) => (
              <div key={game.gameID} onClick={() => handleResultClick(game)}>
                {game.external}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/userlist">User List</Link></li>
          <li><Link to="/login-register">Login & Register</Link></li>
          <li><Link to="/account-details">Update Account</Link></li>
        </ul>
      </div>
    </header>
  )
}