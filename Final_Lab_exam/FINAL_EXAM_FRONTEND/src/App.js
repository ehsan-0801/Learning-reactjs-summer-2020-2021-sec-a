import ProductsList from './components/products/ProductsList';
import {useState, useEffect } from 'react';
import CreateProducts from './components/products/CreateProducts';
import Navbar from './components/products/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {


//product!!!
const getProductData=()=>{
    fetch("http://localhost:8000/api/products").then((response)=>{
      response.json().then((result)=>{
        setProductsList(result);
      })
    })
  }
 const [productsList, setProductsList] = useState([]);
  const deleteuser = (id)=>{

    fetch('http://localhost:8000/api/products/'+id,
        {
            method: "DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has heen Delete")
                getProductData()
            })
        })
  }
  const addProduct=(newUser)=>{
    fetch('http://localhost:8000/api/products', {
                          method: "Post",
                          headers:{
                              'Content-Type':'application/json'
                          },
                          body: JSON.stringify(newUser)
                      }).then((result)=>{
                          result.json().then((resp)=>{
                              alert("expense has heen added")
                              getProductData()
                          })
                      })
  }
  const updateProduct=(id,editedUser)=>{
    fetch('http://localhost:8000/api/products/'+id, {
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(editedUser)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert(" has heen edited")
                getProductData()
            })
        });

        

    
  }
  
  useEffect(() => {
    fetch("http://localhost:8000/api/products").then((response)=>{
      response.json().then((result)=>{
        setProductsList(result);
      })
    })
  },[]);

//employee
const getEmployeeData=()=>{
  fetch("http://localhost:8000/api/Employee").then((response)=>{
    response.json().then((result)=>{
      setEmployeeList(result);
    })
  })
}
const [employeeList, setEmployeeList] = useState([]);
const deleteEmployee = (id)=>{

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




  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome to Product page!</h1>
          </Route>
          <Route path='/product/list'>
            <div>
                <ProductsList list={productsList} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/product/create'>
              <CreateProducts status='add' addProductCallback={addProduct} />
          </Route>
          <Route path='/product/edit/:id' children={<CreateProducts status='edit' updateProductCallback={updateProduct} />} ></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
