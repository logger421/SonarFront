import ItemsList from "../components/ItemsList.js";
import {useEffect} from "react";
import {useItemsContext} from "../hooks/useItemsContext.js";
import {useCartContext} from "../hooks/useCartContext";

const Home = () => {
    const {items, dispatch: dispatchItems} = useItemsContext();
    const {cart, dispatch: dispatchCart} = useCartContext();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('api/items');
            const json = await response.json();

            if (response.ok) {
                dispatchItems({type: 'SET_ITEMS', payload: json});
            }
        }
        fetchItems()
    }, [dispatchItems]);

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
        <div className="home">
            <div className="items">
            <h2>Choose items to buy:</h2>
                {items && <ItemsList items={items}/>}
            </div>
        </div>
    );
}

export default Home;