import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-kenzie-v2.herokuapp.com",
  timeout: 12000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("@TOKEN");

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});
