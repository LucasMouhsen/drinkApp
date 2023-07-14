import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

/* const [loading, setLoading] = useState(false); */
export const CartContext = createContext();

const cartInitialState = {
    cartItems: [],
}

const actionTypes = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
    REMOVE_ALL_FROM_CART: 'REMOVE_ALL_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
    /* UPDATE_QUANTITY:"UPDATE_QUANTITY",  */
}

function cartReducer(state, { payload, type }) {
    const { idDrink, quantity } = payload;
    let drinkIsInCart = state.cartItems.find((item) => item.idDrink === idDrink);

    switch (type) {
        case actionTypes.ADD_TO_CART:
            if (drinkIsInCart) {
                const updatedCartItems = state.cartItems.map((item) => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                payload.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload],
                };
            }
        case actionTypes.REMOVE_ONE_FROM_CART:
            
    }
}


export function CartProvider({ children }) {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }
    function removeOneFromCart() {

    }
    function removeAllFromCart() {

    }
    function clearCart() {

    }
    function loading() {

    }

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        loading,
    }
    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}