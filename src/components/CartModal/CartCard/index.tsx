import { StyledCard } from "./styles";
import { BsFillTrashFill } from "react-icons/bs"
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext";
import { IProduct } from "..";

interface IProd {
  prod: IProduct;
}

export function CartCard({ prod }: IProd) {
  const { removeItem, addItem, removeAllItem } = useContext(CartContext);
  const { name, img, id, quantity } = prod;



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
            <span>{quantity}</span>
            <button onClick={() => addItem(id)} className="add-btn">
              +
            </button>
          </div>
        </div>
      </div>
      <BsFillTrashFill onClick={() => removeAllItem(id)} className="remove-item"/>
    </StyledCard>
  );
}
