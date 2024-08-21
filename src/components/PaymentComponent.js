import {useState} from "react";
import {useCartContext} from "../hooks/useCartContext";

const PaymentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const {cart, dispatch} = useCartContext();

    const totalPrice = cart && cart.items.reduce((total, item) => total + item.price, 0);
    const disableSubmit = cart && cart.items.length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({firstName, lastName, cart: cart, price: totalPrice})
        });

        const json = await response.json();

        if (response.ok) {
            setFirstName('');
            setLastName('');
            setError(null);
            setEmptyFields([])
            dispatch({type: 'SET_CART', payload: {items: []}});
            cart.items = [];
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
    }

    return (
        <div className="payment-form" onSubmit={handleSubmit}>
            <h3>
                Payment
            </h3>
            <form className="create">
                <label>First Name</label>
                <input
                    type="text"
                    className={emptyFields.includes('firstName') ? 'error' : 'first-name'}
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    placeholder={"Enter you first name"}
                />
                <label>Last Name</label>

                <input
                    type="text"
                    className={emptyFields.includes('lastName') ? 'error' : 'last-name'}
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    placeholder={"Enter you last name"}
                />
                <h4>Amount: {totalPrice}$</h4>
                <button type="submit" onSubmit={handleSubmit} disabled={disableSubmit} className={disableSubmit ? 'disabled' : ''}>Submit payment</button>
                {error && <p className={"error"}>{error}</p>}
            </form>
        </div>
    )
}

export default PaymentComponent;