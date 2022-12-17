import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Logo } from "./Logo";
import { SearchInput } from "./Search";
import { StyledHeader } from "./styles";
import { ReactComponent as CartImg } from "../../Images/CartBtn.svg"
import { ReactComponent as LogoutImg } from "../../Images/LogoutBtn.svg";
import { CartContext } from "../../providers/CartContext";


export function Header() {
  const { logout } = useContext(UserContext);
  const { setModalCart } = useContext(CartContext);

  return (
    <StyledHeader>
      <header>
        <Logo />
        <div>
          <SearchInput />
          <CartImg onClick={() => setModalCart(true)}/>
          <LogoutImg onClick={() => logout()}/>
        </div>
      </header>
    </StyledHeader>
  );
}
