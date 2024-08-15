import {useContext} from "react";
import { ProductParams } from "../context/product.context";

const Products= ()=> {
    
const {product}= useContext(ProductParams);
console.log(product)
return(
    <div>
        <p>product List</p>
       <ul>
        {JSON.stringify(product)}
</ul>

    </div>
);
    
};

export default Products;