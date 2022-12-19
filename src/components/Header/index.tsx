import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Logo } from "./Logo";
import { SearchInput } from "./Search";
import { StyledHeader } from "./styles";
import { FiLogOut } from "react-icons/fi"
import { HiShoppingCart } from "react-icons/hi"

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
          <HiShoppingCart onClick={() => setModalCart(true)} className="header-btn"/>
          <FiLogOut onClick={() => logout()} className="header-btn"/>
        </div>
      </header>
    </StyledHeader>
  );
}
