import { View, Text } from 'react-native'
import React, { createContext, useState, useReducer } from 'react'
import { ProductItem, ProductDTO } from '_types';

export const CartContext = createContext({});

let data = [
    {
        description: "Omnis quam id ut ab.",
        imageUrl: "http://loremflickr.com/640/480",
        name: "Unbranded Granite Bike",
        originalPrice: "187207.00",
        otherMethodPrice: "187207.00",
        provider: "Grupo Éxito",
        ref: "xrfrtcolu8",
    },
    {
        creditCardPrice: "168486.30",
        description: "Omnis quam id ut ab.",
        imageUrl: "http://loremflickr.com/640/480",
        name: "Unbranded Granite Gloves",
        originalPrice: "187207.00",
        otherMethodPrice: "187207.00",
        provider: "Grupo Éxito",
        ref: "xrfrtcolu8",
    }
]

const initialState: { cartItems: Array<ProductItem>, simulationItems: Array<ProductItem>, interestRate: number, fees: number } = {
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
    simulationItems: [],
    interestRate: 0.0225,
    fees: 12,
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            if (!state.cartItems.some(item => item.product.id === action.payload.product.id)) {
                console.log({ ...state, cartItems: [...state.cartItems, { product: action.payload.product, amount: 1 }] })
                return { ...state, cartItems: [...state.cartItems, { product: action.payload.product, amount: 1 }] }
            }
            return { ...state }
        case "DELETE_PRODUCT":
            return { ...state, cartItems: state.cartItems.filter((item: ProductItem) => item.product.id !== action.payload.id) }
        case "INCREASE_AMOUNT":
            const productToIncrease = state.cartItems.find((item: ProductItem) => item.product.id === action.payload.id)
            productToIncrease.amount += 1;
            return { ...state }
        case "DECREASE_AMOUNT":
            const productToDecrease = state.cartItems.find((item: ProductItem) => item.product.id === action.payload.id)
            if (productToDecrease.amount > 1) {
                productToDecrease.amount -= 1;
            }
            return { ...state }
        case "SIMULATE":
            return { ...state, simulationItems: state.cartItems }
        case "SET_FEES":
            return { ...state, fees: action.payload.fees }
        case "SET_INTEREST_RATE":
            return { ...state, interestRate: action.payload.interestRate }
        default:
            return state
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
