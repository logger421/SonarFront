import {createContext, useEffect, useReducer} from 'react';

export const CartContext = createContext([]);

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CART':
            return {
                cart: action.payload
            };
        default:
            return state;
    }
};

export function CartContextProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: null
    });

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))

        if (cart) {
            dispatch({type: 'SET_CART', payload: cart});
        }
    }, []);

    return (
        <CartContext.Provider value={{...state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}