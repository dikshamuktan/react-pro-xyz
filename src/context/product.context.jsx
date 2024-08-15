import {any} from "prop-types";
import { useState, createContext } from "react";


//context create
export const ProductParams = createContext({
   product:[],

   addProduct: ()=>{},
});


//context provider
export const productProvider= ({children})=> {
  const [product, setProducts] = useState([
        "groceries",
        "electronic",
        "fooditems",
        "cloths"
    ]);

const addNewProduct= (productName)=>{
    setProducts((prev)=> {
        return [productName,...prev];
    });
};

return(
<ProductParams.Provider
   value={{
    product:product,
    addProduct:addNewProduct
   }}
>
    {children}
</ProductParams.Provider>
    
);

;}




productProvider.prototype= {
    children:any,
};