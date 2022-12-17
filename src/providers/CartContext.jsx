import { createContext, useContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { setProducts } = useContext(UserContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [modalCart, setModalCart] = useState(false);

  useEffect(() => {
    const productsRequest = async () => {
      try {
        const { data } = await api.get("products");
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {}
    };
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      productsRequest();
    }
  }, []);

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

  const removeItem = (itemId) => {
    cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          setCartItems([...cartItems]);
        } else {
          setCartItems(cartItems.filter(({ id }) => id !== itemId));
        }
      }
    });
  };

  const addItem = (itemId) => {
    cartItems.map((item) => {
      if (item.id === itemId) {
        item.quantity += 1;
        setCartItems([...cartItems]);
      }
    });
  };

  const removeAllItem = (itemId) => {
    cartItems.map((item) => {
      if (item.id === itemId) {
        setCartItems(cartItems.filter(({ id }) => id !== itemId));
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        filteredProducts,
        setFilteredProducts,
        modalCart,
        setModalCart,
        removeItem,
        addItem,
        removeAllItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
