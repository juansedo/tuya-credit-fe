import { StyleSheet, FlatList, Button, TextInput } from 'react-native';
import { View } from '../../components/Themed';
import ProductSearchCell from '../../components/search/ProductSearchCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../types';


interface SearchScreen {

}

export default function SimulationTabScreen(props: SearchScreen) {

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
    const [products, setProducts] = useState(data)

    const handleInputChange = (text) => {
        setProducts(data.filter((item) => item.image_url.includes(text)));
    }

    return (
        <View style={styles.container}>
            <View style={styles.SearchBarContainer}>
                <TextInput style={styles.SearchBar} onChangeText={text => handleInputChange(text)} />
            </View>
            <FlatList
                data={products}
                style={styles.list}
                renderItem={(item) => <ProductSearchCell data={item} navigation={props.navigation} />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    list: {
        width: '100%'
    },
    SearchBar: {
        borderColor: '#000000',
        width: '80%'
    },
    SearchBarContainer: {
        width: '80%',
        borderColor: 'black',
        marginTop: 10,
        borderWidth: 2,
        alignSelf: 'center',
    }
});
