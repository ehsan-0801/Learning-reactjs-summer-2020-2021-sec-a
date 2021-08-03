import './list.css';
import {Link} from "react-router-dom";

const EmployeeTableRow = ({id=null,name,contact_no,username,password, callback})=>{
    return (
        <div className= 'std'>
            <h3>Name: {name}</h3>
            <p>contact_no: {contact_no}</p>
            <p>username: {username}</p>
            <p>password: {password}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default EmployeeTableRow;