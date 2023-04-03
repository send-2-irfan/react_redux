import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Samsung Galaxy S21",
            category: "smartphones",
        },
        {
            id: 2,
            title: "Samsung Galaxy S21 Ultra",
            category: "smartphones",
        },
    ],
};

export const productReducer = (state = initialState , { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state ;
        default:
            return state;
    }

}