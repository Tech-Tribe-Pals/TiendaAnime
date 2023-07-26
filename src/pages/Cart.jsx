import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Cart = () => {

    const { cart } = useContext(CartContext)

    console.log(cart);

    return (
        <main>
            { cart.map(e => (
                <div key={e.id}>
                <p>{e.id}</p>
                <p>Cantidad: {e.quantity}</p>
                </div>
            )) }
        </main>
    );
}

export default Cart;
