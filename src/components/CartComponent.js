import CartItemDetail from "./CartItemDetails";

const CartComponent = ({cart}) => {
    const available = cart.items.some(item => item !== null)

    return (
        <div className="items">
            {available && cart.items.map((item) => (
                <CartItemDetail key={item._id} item={item}></CartItemDetail>
            ))}
            {!available && <p>Your cart is empty!</p>}
        </div>
    );
}

export default CartComponent;