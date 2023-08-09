import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";

const CartStyle = styled.main`
  display: flex;
  width: 90%;
  margin: 20px auto 0 auto;
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 150px;
      border: solid 2px #000;
      border-radius: 15px;
      img {
        width: auto;
        height: 90%;
      }
      .itemDescription {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
      }
    }
    &:nth-child(2) {
        justify-content: end;
        align-items: center;
    }
  }
`;

const Cart = () => {
  const { cart } = useContext(CartContext);

    const [total, setTotal] = useState(0)

    const getTotal = () => {
        cart.map(e => {
            const num = e.price * e.quantity
            setTotal(actualNum => actualNum + num)
        })
    }

  useEffect(() => {
    getTotal()
  }, [])

  return (
    <CartStyle>
      <section>
        {cart.map((e) => (
          <div className="item" key={e.id}>
            <img src={e.img} alt="prodImg" />
            <div className="itemDescription">
              <p>{e.title}</p>
              <p>Cantidad: {e.quantity}</p>
              <p>$ {e.price}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
      Total: ${ total }
      </section>
    </CartStyle>
  );
};

export default Cart;
