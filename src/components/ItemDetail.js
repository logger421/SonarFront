import {useCartContext} from "../hooks/useCartContext";

const ItemDetail = ({item}) => {
    const {cart, dispatch: dispatchCart} = useCartContext();

    const handleAddToCart = async () => {
        const response = await fetch(`api/cart/${cart._id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({items: [item, ...cart.items]}),
        })

        const json = await response.json();
        if (response.ok) {
            dispatchCart({type: 'SET_CART', payload: json});
            localStorage.setItem('cart', JSON.stringify(json));
            alert('Item added to cart')
        }
    }

    return (
        <div className="item-details">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h3>{item.price}$</h3>
            <span className="material-symbols-outlined cart-color"
                  onClick={handleAddToCart}>
                shopping_cart
            </span>
        </div>
    );
}

export default ItemDetail;