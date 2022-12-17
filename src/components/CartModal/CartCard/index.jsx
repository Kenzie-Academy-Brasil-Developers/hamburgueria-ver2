import { StyledCard } from "./styles";
import { ReactComponent as DeleteBtn } from "../../../Images/TrashBtn.svg";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";

export function CartCard({ prod }) {
  const { removeItem, addItem, removeAllItem } = useContext(CartContext);
  const { name, img, id } = prod;

  return (
    <StyledCard>
      <div className="item-wrapper">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-infos">
          <h3>{name}</h3>
          <div className="add-remove-btns">
            <button onClick={() => removeItem(id)} className="remove-btn">
              -
            </button>
            {prod.quantity > 0 ? <span>{prod.quantity}</span> : false}
            <button onClick={() => addItem(id)} className="add-btn">
              +
            </button>
          </div>
        </div>
      </div>
      <DeleteBtn onClick={() => removeAllItem(id)} className="remove-item">
        Remover
      </DeleteBtn>
    </StyledCard>
  );
}
