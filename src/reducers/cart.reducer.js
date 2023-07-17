import { actionTypes } from "../actions/cart.actions"
export const cartInitialState = {
    cartItems: [],
    totalPrice: 0,
}

export function cartReducer(state, { payload, type }) {
    const { idDrink } = payload;
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
            if (drinkIsInCart.quantity > 1) {
                const updatedCartItems = state.cartItems.map((item) => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            } else {
                const updatedCartItems = state.cartItems.filter((item) => item.idDrink !== idDrink);
                return {
                    ...state,
                    cartItems: updatedCartItems,
                };
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.idDrink !== idDrink)
            };
        case actionTypes.CLEAR_CART:
            return cartInitialState;

    }
}