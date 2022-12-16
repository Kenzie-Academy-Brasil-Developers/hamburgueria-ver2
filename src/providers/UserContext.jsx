import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext();
export function UserProvider({ children }) {
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
          const response = await api.get("/products");

          navigate("/dashboard");
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
      navigate("/dashboard", { replace: true });
    } catch {}
  };

  const registerUser = async (data) => {
    try {
      const { confirmPassword, ...userData } = data;
      const response = await api.post("users", userData);
      navigate("/dashboard");
    } catch (err) {}
  };

  return (
    <UserContext.Provider value={{ login, registerUser }}>
      {children}
    </UserContext.Provider>
  );
}
