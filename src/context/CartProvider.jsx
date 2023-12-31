import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
/* const [loading, setLoading] = useState(false); */
import { actionTypes } from "../actions/cart.actions"
import { cartReducer, cartInitialState } from "../reducers/cart.reducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }
    function removeOneFromCart(idDrink) {
        dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: { idDrink } })
    }
    function removeAllFromCart(idDrink) {
        dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: { idDrink } })

    }
    function clearCart(idDrink) {
        dispatch({ type: actionTypes.CLEAR_CART, payload: { idDrink } })
    }
    function totalPrice() {
        let updatedPrice = 0;
        state.cartItems.forEach((drink) => {
            updatedPrice += drink.quantity * drink.price;
            state.totalPrice = updatedPrice
        });
        return updatedPrice
    }

function sendOrder(){
    alert(JSON.stringify(state))
}

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        totalPrice,
        sendOrder
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