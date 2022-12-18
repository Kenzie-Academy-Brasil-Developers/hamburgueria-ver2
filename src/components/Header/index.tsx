import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Logo } from "./Logo";
import { SearchInput } from "./Search";
import { StyledHeader } from "./styles";
// import { ReactComponent as CartImg } from "../../Images/CartBtn.svg"
// import { ReactComponent as LogoutImg } from "../../Images/LogoutBtn.svg";
 

import { CartContext } from "../../providers/CartContext";


export function Header() {
  const { logout } = useContext(UserContext);
  const { setModalCart } = useContext(CartContext);


  return (
    <StyledHeader>
      <header>
        <Logo />
        <div className="header-buttons">
          <SearchInput />
          <button onClick={() => setModalCart(true)} className="header-btn">Carrinho</button>
          <button onClick={() => logout()} className="header-btn">Sair</button>
        </div>
      </header>
    </StyledHeader>
  );
}
