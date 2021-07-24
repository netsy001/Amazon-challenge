// create initial state i.e initially we are starting the with empty basket
export const initialState = {
    basket: [],
    user: null
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

        case "EMPTY_BASKET":
            return {
                ...state,  // keep the state whatever it is but
                basket: [] // change the basket to its original empty array.. i.e emptying the basket
            }

        case "REMOVE_FROM_BASKET":
            // here we are geting the state, we r getting basket and using findIndex function. What its doing is going threw all the basket items and checks if any of the basket items id match the action id. Here its just checking if the the id is matching
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            // saving all the items in new variable  called newBasket
            let newBasket = [...state.basket];
            if (index >= 0) {
                //here index is the one that we clicked to remove i.e if we have 5 products and clicked on 4 the 4th is index and it will be removed. 1 is deleteing by 1.
                // Splice function is to remove
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cant remove product(id:${action.id}) as its not in basket!`)
            }
            //after deleting returning the current state.
            return {
                ...state,
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }


        default:
            return state;

    }
}

export default reducer;