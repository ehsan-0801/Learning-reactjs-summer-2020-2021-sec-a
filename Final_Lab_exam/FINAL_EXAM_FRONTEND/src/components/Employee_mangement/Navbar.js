import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
            <Link to="/create">Add Employee User</Link> | 
            <Link to="/listExpenses">Employee List</Link>
        </div>
    );
}

export default Navbar;