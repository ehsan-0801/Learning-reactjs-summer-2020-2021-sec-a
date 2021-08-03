import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
            <Link to="/product/create">Create Product</Link> | 
            <Link to="/product/list">Product List</Link>
        </div>
    );
}

export default Navbar;