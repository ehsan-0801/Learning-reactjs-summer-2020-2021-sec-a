  
import {useState} from 'react';
//import {users} from '../usersData';
import {useParams} from 'react-router-dom';
import './User';


const CreateUser = ({status, callback})=>{

    const {id:eid}  = useParams();
    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        dept: '',
    });
   
        
    const formSubmit=(e)=>{
        e.preventDefault();
    
        if(status === 'add'){
            callback(newUser);
            setNewUser({
                id: '',
                name: '',
                dept: '',
            })
    
        }
    }
    return(
        <>
        <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
        <form onSubmit={formSubmit}>
            <table>
            <tr>
                <td>Username</td>
                <td>
                    <input type="text" name="name"/> 
                </td>
            </tr>
            <tr>
                <td>Id</td>
                <td>
                    <input type="text" name="id"/> 
                </td>
            </tr>
            <tr>
                <td>Dept</td>
                <td>
                    <input type="text" name="dept"/> 
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