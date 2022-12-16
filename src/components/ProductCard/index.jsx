import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";


export function ProductCard({ name, img, category, price}) {
    const { addToCart } = useContext(CartContext)

    return (
    <li>
      <figure>
        <img src={img} alt="" />
      </figure>

      <h3>{name}</h3>
      <span>{category}</span>
      <p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
      <button onClick={() => addToCart({img, name, price, category})}>Adicionar</button>
    </li>
  );
}
