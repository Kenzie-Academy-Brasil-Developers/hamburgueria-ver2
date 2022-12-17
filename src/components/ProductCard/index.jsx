import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCard } from "./styles.js";

export function ProductCard({ name, img, category, price, id }) {
  const { addToCart } = useContext(CartContext);
  
  return (
    <StyledCard>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-infos">
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => addToCart({ img, name, price, category, id })}>
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}
