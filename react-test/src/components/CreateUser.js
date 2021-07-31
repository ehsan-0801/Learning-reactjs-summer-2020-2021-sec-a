import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";
//import UserList from "./UserList";

const CreateUser = ({status, addNewUser,edituserCallback})=>{
    const {id:eid} = useParams();
    const [user, setUser] = useState({name: '', id:'', dept:''});
    const history = useHistory();

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...user, [attr]: val})
    };
    

    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(user);
        // addNewUser(user);
        // edituser(user);
        status==='add'?addNewUser(user):edituserCallback(eid,user);
        history.push('/Userlist');
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={onsubmit}>
            <table>
            <tr>
                <td>Username</td>
                <td>
                    <input type="text" name="name" value={user.name} onChange={change}/> 
                </td>
            </tr>
            <tr>
                <td>Id</td>
                <td>
                    <input type="text" name="id" value={user.id} onChange={change} /> 
                </td>
            </tr>
            <tr>
                <td>Dept</td>
                <td>
                    <input type="text" name="dept" value={user.dept} onChange={change} /> 
                </td>
            </tr>
            
            <tr>
                <td>
                    <input type="submit" name="create" value={status==='add'?'Create':'Update'}/> 
                </td>
            </tr>
            </table>
        </form>
        </>
    );
}

export default CreateUser;
 