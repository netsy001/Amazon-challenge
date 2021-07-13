// create initial state i.e initially we are starting the with empty basket
export const initialState = {
    basket: [],
};

//Selector using the reducer function method to calculate the price of all products added to cart.

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        default:
            return state;

    }
}

export default reducer;