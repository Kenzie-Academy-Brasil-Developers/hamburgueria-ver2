import { CartProvider } from "./CartContext";
import { UserProvider } from "./UserContext";

interface IIndexContext{
  children: React.ReactNode;
}

export function Providers({ children }:IIndexContext) {
  return (
    <UserProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </UserProvider>
  );
}
