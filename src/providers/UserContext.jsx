import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const autologin = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (location.pathname === "/register" && !token) {
        return;
      }
      if (!token) {
        localStorage.clear();
        navigate("/");
      } else {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;
          const { data } = await api.get("/products");
          setProducts(data);
          navigate("/dashboard", { replace: true });
        } catch (err) {
          localStorage.clear();
          navigate("/", { replace: true });
        }
      }
    };
    autologin();
  }, []);

  const login = async (data) => {
    try {
      const response = await api.post("login", data);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      const prods = await api.get("/products");
      setProducts(prods.data);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async (data) => {
    try {
      const { confirmPassword, ...userData } = data;
      const response = await api.post("users", userData);
      navigate("/");
    } catch (err) {}
  };

  const logout = () => {
    window.localStorage.removeItem("@TOKEN");
    navigate("/", { replace: true})
  };

  return (
    <UserContext.Provider
      value={{ login, registerUser, setProducts, products, logout }}
    >
      {children}
    </UserContext.Provider>
  );
}
