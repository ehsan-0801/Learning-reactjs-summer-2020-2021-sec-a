import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


const CreateEmployee = ({status, addEmployeeCallback, updateEmployeeCallback})=>{
    let history = useHistory();
    const {id:eid} = useParams();
    const initialState = { name:'',contact_no: '', username: '',password:'' };
    const [employee, setEmployee] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setEmployee({ ...employee, [name]: value });
    };


    useEffect(() => {
      fetch('http://localhost:8000/api/expenses/'+eid).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            setEmployee({ 
                contact_no:result.contact_no,
                 name:result.name,
                 username:result.username,
                 password:result.password,

              })
        })
    })
    },[]);
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} employee Page: {eid}</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addEmployeeCallback(employee):updateEmployeeCallback(eid,employee);
                    history.push("/listExpenses");
                }}
            >
                Name: <input type='text' name='name' value={employee.name} onChange={handleInputChange}/> <br/>
                Contact No: <input type='text' name='contact_no' value={employee.contact_no} onChange={handleInputChange} /><br/>
                username: <input type='text' name='username' value={employee.username} onChange={handleInputChange} /><br/>
                password: <input type='text' name='password' value={employee.password} onChange={handleInputChange} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateEmployee;