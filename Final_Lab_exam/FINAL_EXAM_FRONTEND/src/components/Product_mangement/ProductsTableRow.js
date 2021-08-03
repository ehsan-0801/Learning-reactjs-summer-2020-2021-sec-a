import './list.css';
import {Link} from "react-router-dom";

const ProductsTableRow = ({id=null,name,quantity,price, callback})=>{
    return (
        <div className= 'std'>
            <h3>Name: {name}</h3>
            <p>quantity: {quantity}</p>
            <p>price: {price}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/product/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default ProductsTableRow;