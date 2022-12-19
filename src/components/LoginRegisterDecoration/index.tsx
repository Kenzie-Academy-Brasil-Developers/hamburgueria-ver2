import { Logo } from "../Header/Logo";
import { DecorationStyled } from "./styles";
import { CgShoppingBag } from "react-icons/cg"
// import { ReactComponent as Dots } from "../../Images/LoginRegisterDecoration.svg";

export function LoginRegisterDecoration() {
  return (
    <DecorationStyled>
      <Logo />
      <div className="welcome-message">
        <div className="bag-wrapper">
        <CgShoppingBag/>
        </div>
        <h4>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</h4>
      </div>
        {/* <Dots className="dots"/> */}
    </DecorationStyled>
  );
}
