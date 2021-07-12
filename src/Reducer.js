// create initial state i.e initially we are starting the with empty basket

export const initialState = {
    basket: [],
};


const reducer = (state, action) => {

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