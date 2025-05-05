import { Link } from "react-router-dom"

const Header = (props) =>{

    return (
        <div className='header'>
            <h1>{props.logo}</h1>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/add">Add Employee</Link>
         </nav>
        </div>
    );
};

export default Header;
