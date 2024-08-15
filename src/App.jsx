import Products from "./components/product.component";
import { useContext } from "react";
import { ProductParams } from "./context/product.context";

function App() {
  const {product,addProduct}= useContext(ProductParams);

  return(
    <div>
     
     <Products/>
      <h2>this is inside App component</h2>
      <button onClick={()=>{
       addProduct("new product")
      }}>
        add new product
      </button>


    </div>
  );
};


export default App;