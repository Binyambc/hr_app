import { NavLink, Link } from "react-router-dom"
import "./header.css";

const Header = ({ name }) =>{

    return (
        <header>
        <div className='logo'>
            <Link to="/">
                <h2>{name}</h2>
            </Link>
        </div>
         <nav>
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/employees">Employees</NavLink>
                <NavLink to="/addEmployeeForm">Add Employee</NavLink>
            </ul>
         </nav>
        
        </header>
    );
};

export default Header;
