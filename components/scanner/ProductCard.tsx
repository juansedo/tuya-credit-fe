import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { ProductDTO } from '../../types'

type ProductCardProps = {
    product: ProductDTO
}

export default function ProductCard({ product }: ProductCardProps) {

    let imgSource = { uri: product.image_url };
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={imgSource} />
                <Text numberOfLines={1} style={styles.productName}>{product.ref}</Text>
                <Text numberOfLines={1} style={styles.productDescription}>{product.description}</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingBottom: 10,
    },
    image: {
        alignSelf: 'center',
        width: 250,
        maxHeight: 250,
        resizeMode: 'contain',
        flex: 1,
    },
    productName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
    productDescription: {
        textAlign: 'center',
        opacity: 0.8,
    }
})