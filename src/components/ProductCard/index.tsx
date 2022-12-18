import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCard } from "./styles";

interface IProductCard{ 
  name: string;
  img: string;
  category: string;
  price: number; 
  id: number;
}

export function ProductCard({ name, img, category, price, id }: IProductCard) {
  const { addToCart } = useContext(CartContext);
  let quantity = 1

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
        <button onClick={() => addToCart( {img, name, price, category, id, quantity} )}>
          Adicionar
        </button>
      </div>
    </StyledCard>
  );
}
