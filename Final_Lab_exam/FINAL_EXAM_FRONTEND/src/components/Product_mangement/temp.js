const getEmployeeData=()=>{
    fetch("http://localhost:8000/api/Employee").then((response)=>{
      response.json().then((result)=>{
        setEmployeeList(result);
      })
    })
  }
 const [employeeList, setEmployeeList] = useState([]);
  const deleteuser = (id)=>{

    fetch('http://localhost:8000/api/Employee/'+id,
        {
            method: "DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has heen Delete")
                getEmployeeData()
            })
        })
  }
  const addEmployee=(newUser)=>{
    fetch('http://localhost:8000/api/Employee', {
                          method: "Post",
                          headers:{
                              'Content-Type':'application/json'
                          },
                          body: JSON.stringify(newUser)
                      }).then((result)=>{
                          result.json().then((resp)=>{
                              alert("expense has heen added")
                              getEmployeeData()
                          })
                      })
  }
  const updateEmployee=(id,editedUser)=>{
    fetch('http://localhost:8000/api/Employee/'+id, {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(editedUser)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert(" has heen edited")
                getEmployeeData()
            })
        });

        

    
  }
  
  useEffect(() => {
    fetch("http://localhost:8000/api/Employee").then((response)=>{
      response.json().then((result)=>{
        setEmployeeList(result);
      })
    })
  },[]);
