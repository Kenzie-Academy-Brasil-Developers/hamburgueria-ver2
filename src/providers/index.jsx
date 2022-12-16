import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

export function Providers({ children }) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
}
