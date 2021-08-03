import ProductsTableRow from './ProductsTableRow';

const ProductsList = ({list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All Products List</h1>
            <div>
            {
                list.map((u)=>{
                   return  <ProductsTableRow key={u.id} {...u} callback={deleteCallback}/>
                })
            }
            </div>
        </div>
    );
}

export default ProductsList;