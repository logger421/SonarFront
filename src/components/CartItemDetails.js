import {useCartContext} from "../hooks/useCartContext";

const CartItemDetail = ({item}) => {
    const {cart, dispatch: dispatchCart} = useCartContext();
    const handleDeleteItem = async () => {
        const response = await fetch(`api/cart/${cart._id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({items: cart.items.filter(i => i._id !== item._id)}),
        })

        const json = await response.json();

        if (response.ok) {
            dispatchCart({type: 'SET_CART', payload: json});
            localStorage.setItem('cart', JSON.stringify(json));
            alert('Deleted item from cart')
        }
    }

    return (
        <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h3>{item.price}$</h3>
            <span className="material-symbols-outlined delete-color" onClick={handleDeleteItem}>delete</span>
        </div>
    );
}

export default CartItemDetail;