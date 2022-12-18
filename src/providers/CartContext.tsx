import { createContext, SetStateAction, useContext, useEffect } from "react";
import { api } from "../services/api";
import { useState } from "react";
import { UserContext } from "./UserContext";

interface ICartContextProps {
  children: React.ReactNode;
}

interface ICartContext {
  cartItems: IEntireCartItem[];
  setCartItems: React.Dispatch<SetStateAction<IEntireCartItem[]>>;
  filteredProducts: IEntireItem[];
  setFilteredProducts: React.Dispatch<SetStateAction<IEntireItem[]>>;
  modalCart: boolean;
  setModalCart: React.Dispatch<SetStateAction<boolean>>;
  addToCart: (prod: IEntireCartItem) => void;
  removeItem: (itemId: number) => void;
  addItem: (itemId: number) => void;
  removeAllItem: (itemId: number) => void;
}

export interface IEntireItem {
  category: string;
  id: number;
  img: string;
  name: string;
  price: number;
}

interface IEntireCartItem {
  name: string;
  category: string;
  img: string;
  price: number;
  id: number;
  quantity: number;
}


interface IAddItem {
  id: number;
  quantity: number;
}

interface IRemoveItem {
  id: number;
  quantity: number;
}

interface IMapItemId {
  id: number;
}


export const CartContext = createContext<ICartContext>({} as ICartContext);

export function CartProvider({ children }: ICartContextProps) {
  const { setProducts } = useContext(UserContext);
  const [filteredProducts, setFilteredProducts] = useState<IEntireItem[]>([]);
  const [cartItems, setCartItems] = useState<IEntireCartItem[]>([]);
  const [modalCart, setModalCart] = useState<boolean>(false);

  useEffect(() => {
    const productsRequest = async () => {
      try {
        const { data } = await api.get<IEntireItem[]>("products");

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) { }
    };
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      productsRequest();
    }
  }, []);


  const addToCart = (prod: IEntireCartItem) => {
    const verify = cartItems.findIndex((item: IEntireCartItem) => item.name === prod.name);
    if (verify !== -1) {
      cartItems[verify].quantity += 1;
      setCartItems([...cartItems]);
    } else {
      prod.quantity = 1;
      setCartItems([...cartItems, prod]);
    }
  };


  const removeItem = (itemId: number) => {
    cartItems.
      map((item: IRemoveItem) => {
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


  const addItem = (itemId: number) => {
    cartItems.map((item: IAddItem) => {
      if (item.id === itemId) {
        item.quantity += 1;
        setCartItems([...cartItems]);
      }
    });
  };


  const removeAllItem = (itemId: number) => {
    cartItems.map(({ id }: IMapItemId) => {
      if (id === itemId) {
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
