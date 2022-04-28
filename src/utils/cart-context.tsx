import { View, Text } from 'react-native'
import React, { createContext, useState, useReducer } from 'react'
import { ProductItem, ProductDTO } from '../../types';

let data = [
    {
        id: 1,
        ref: "TV LG 55 pulgadas",
        image_url: "https://olimpica.vtexassets.com/arquivos/ids/474490/Televisor-LED-FHD-OLIMPO-Smartv-101CM-40--40D3200S.jpg?v=637497819260800000",
        description: "Televisor de 55 pulgadas marca LG",
        value: 1200000,
        discount_percent: 0.1,
        special_discount_percent: 0.2,
        warehouse: "warehouse",
    },
    {
        id: 2,
        ref: "LG OLED 40 pulgadas 4k",
        image_url: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
        description: "Televisor de 40 pulgadas marca LG",
        value: 1100000,
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

export const CartContext: React.Context<{ state: any, dispatch: any }> = createContext({ state: initialState, dispatch: () => { } });

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            console.log(state.cartItems.some(item => item.product.id === action.payload.product.id))
            if (!state.cartItems.some(item => item.product.id === action.payload.product.id)) {
                return { ...state, cartItems: [...state.cartItems, { product: action.payload.product, amount: 1 }] }
            }
            return { ...state }
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
            return { ...state, simulationItems: state.cartItems }
        default:
            return state
    }
}

const CartProvider = ({ children }: any) => {
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