import EmployeeTableRow from './EmployeeTableRow';

const EmployeeList = ({list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All Emplyee List</h1>
            <div>
            {
                list.map((u)=>{
                   return  <EmployeeTableRow key={u.id} {...u} callback={deleteCallback}/>
                })
            }
            </div>
        </div>
    );
}

export default EmployeeList;