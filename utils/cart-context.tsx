import { View, Text } from 'react-native'
import { createContext, useState, useReducer } from 'react'
import { ProductItem, ProductDTO } from '../types';

export const CartContext = createContext({});

let data = [
    {
        id: 1,
        ref: "ref",
        image_url: "https://olimpica.vtexassets.com/arquivos/ids/474490/Televisor-LED-FHD-OLIMPO-Smartv-101CM-40--40D3200S.jpg?v=637497819260800000",
        description: "description",
        value: 1000,
        discount_percent: 0.1,
        special_discount_percent: 0.2,
        warehouse: "warehouse",
    },
    {
        id: 2,
        ref: "re2",
        image_url: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
        description: "description2",
        value: 2000,
        discount_percent: 0.2,
        special_discount_percent: 0.4,
        warehouse: "warehouse2",
    }
]

const initialState: { cartItems: Array<ProductItem>, simulationItems: Array<ProductItem> } = {
    cartItems: [
        {
            product: data[0],
            amount: 1
        },
        {
            product: data[1],
            amount: 2
        }
    ],
    simulationItems: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            let item = action.payload;
            return { ...state, cartItems: [...state.cartItems, { product: item.product, amount: item.amount }] }
        case "DELETE_PRODUCT":
            return { ...state, cartItems: state.cartItems.filter((item: ProductItem) => item.product.id !== action.payload.id) }
        case "INCREASE_AMOUNT":
            let productToIncrease = state.cartItems.find((item: ProductItem) => item.product.id === action.payload.id)
            productToIncrease.amount += 1;
            return { ...state }
        case "DECREASE_AMOUNT":
            let productToDecrease = state.cartItems.find((item: ProductItem) => item.product.id === action.payload.id)
            if (productToDecrease.amount > 1) {
                productToDecrease.amount -= 1;
            }
            return { ...state }
        case "SIMULATE":
            return { ...state, cardItems: [] }
    }
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </CartContext.Provider >
    )
}

export default CartProvider;