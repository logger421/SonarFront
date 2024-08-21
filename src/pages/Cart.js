import {useCartContext} from "../hooks/useCartContext";
import CartComponent from "../components/CartComponent";
import {useEffect} from "react";
import PaymentComponent from "../components/PaymentComponent";

const Cart = () => {
    const {cart, dispatch: dispatchCart} = useCartContext()

    useEffect(() => {
        const fetchCart = async () => {
            const response = await fetch('api/cart/66c3baab305eb3ab2a5554d7');
            const json = await response.json();

            if (response.ok) {
                dispatchCart({type: 'SET_CART', payload: json});
                localStorage.setItem('cart', JSON.stringify(json))
            }
        }
        const cart = localStorage.getItem('cart')

        if (cart) {
            dispatchCart({type: 'SET_CART', payload: JSON.parse(cart)});
            return
        }

        fetchCart()
    }, [dispatchCart]);

    return (
        <div className="cart">
            <div className="items">
            <h2>Your cart items:</h2>
                {cart && <CartComponent cart={cart}/>}
            </div>
            <PaymentComponent/>
        </div>
    );
}

export default Cart;