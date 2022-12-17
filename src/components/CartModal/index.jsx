import { useContext } from "react";
import { CartContext } from "../../providers/CartContext";
import { StyledCartModal } from "./styles";
import { CartCard } from "./CartCard";

export function CartModal() {
  const { modalCart, setModalCart, cartItems, setCartItems } =
    useContext(CartContext);

  const totalPrice = cartItems
    .reduce((acc, current) => acc + current.price * current.quantity, 0)
    .toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <>
      {modalCart && (
        <StyledCartModal>
          <section>
            <div className="section-organizer">
              <div className="cart-header">
                <h3>Carrinho de Compras</h3>
                <button onClick={() => setModalCart(false)}>X</button>
              </div>
              <ul className="cart-items">
                {cartItems?.map((prod, i) => (
                  <CartCard prod={prod} key={i} />
                ))}
              </ul>
              <div className="cart-infos">
                <h4>Total:</h4>
                <h4 className="total-price">{totalPrice}</h4>
              </div>
              <button
                className="remove-all-items"
                onClick={() => setCartItems([])}
              >
                Remover Todos
              </button>
            </div>
          </section>
        </StyledCartModal>
      )}
    </>
  );
}
