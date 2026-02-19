import { NavLink, Link } from "react-router-dom"
import { useState } from "react";
import "./header.css";

const Header = ({ name }) =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="header-container">
                <div className='logo'>
                    <Link to="/employees" onClick={closeMenu}>
                        <h2>{name}</h2>
                    </Link>
                </div>
                <button 
                    className="hamburger-menu" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <ul>
                        <NavLink to="/employees" onClick={closeMenu}>Employees</NavLink>
                        <NavLink to="/addEmployeeForm" onClick={closeMenu}>Add Employee</NavLink>
                        <NavLink to="/" onClick={closeMenu}>About</NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
