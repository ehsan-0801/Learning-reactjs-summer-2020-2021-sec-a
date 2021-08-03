import { useParams  } from "react-router";
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


const CreateProducts = ({status, addProductCallback, updateProductCallback})=>{
    let history = useHistory();
    const {id:eid} = useParams();
    const initialState = {name: '',quantity:'', price: '' };
    const [product, setProduct] = useState(initialState);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      setProduct({ ...product, [name]: value });
    };


    useEffect(() => {
      fetch('http://localhost:8000/api/products/'+eid).then((response) => {
        response.json().then((result) => {
            console.warn(result)
            setProduct({ 
                quantity:result.quantity,
                 name:result.name,
                 price:result.price,
                 

              })
        })
    })
    },[]);
    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} product Page: {eid}</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    status=='add'?addProductCallback(product):updateProductCallback(eid,product);
                    history.push("/product/list");
                }}
            >
                Name: <input type='text' name='name' value={product.name} onChange={handleInputChange}/> <br/>
                quantity: <input type='text' name='quantity' value={product.quantity} onChange={handleInputChange} /><br/>
                price: <input type='text' name='price' value={product.price} onChange={handleInputChange} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateProducts;