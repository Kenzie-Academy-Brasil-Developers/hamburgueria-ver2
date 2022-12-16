import { createContext, useEffect} from "react";
import { api } from "../services/api";
import { useState } from "react";

export const CartContext = createContext();
export function CartProvider({ children }) {

  const [ products, setProducts ]  = useState(null);
  const [ cartItems, setCartItems ] = useState([])

  const addToCart = (prod) => {
    const verify = cartItems.findIndex((item) => item.name === prod.name);
    if (verify !== -1) {
      cartItems[verify].quantity += 1;
      setCartItems([...cartItems]);
    } else {
      prod.quantity = 1;
      setCartItems([...cartItems, prod]);
    }
  };
  
  useEffect(() => {
    const productsRequest = async () => {
      try {
        const {data} = await api.get("products")
        
        setProducts(data)
      } catch (err) { }
    };
    productsRequest()
  }, []);
 
  return(
    <CartContext.Provider value={{ products, cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
