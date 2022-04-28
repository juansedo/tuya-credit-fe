import { StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { Text, View } from '../Themed';
import { AppColors } from '../../constants/Colors'
import XIcon from '../../assets/images/svg/XIcon';
import { ProductDTO } from '../../../types';
import Dialog from "react-native-dialog";
import { CartContext } from '../../utils/cart-context';
import { FontDisplay } from 'expo-font';

interface ProductSearchProps {
    data: any;
    navigation: any;
}

export default function ProductSearch(props: ProductSearchProps) {


    const [Visible, setVisible] = useState(false)

    let Image_Http_URL = { uri: props.data.item.image_url };
    return (
        <View style={styles.mainView} >
            <View style={[styles.customView, styles.row]}>
                <Image
                    style={styles.image}
                    source={Image_Http_URL} />
                <ProductTitle productInfo={props.data.item} showAlert={setVisible} navigation={props.navigation} totalItems={props.data.item.amount} />
            </View>
        </View >
    )
}

function ProductTitle(props: {
    productInfo: ProductDTO,
    totalItems: number,
    navigation: any
}) {
    const { productInfo, totalItems } = props;
    const { dispatch } = useContext(CartContext);

    const addItem = () => {
        dispatch({ type: 'ADD_PRODUCT', payload: { product: productInfo } });
        props.navigation.navigate('SimulationTab')
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 20,
        }}>
            <View style={styles.row}>
                <Text style={styles.boldText} numberOfLines={1}>{props.productInfo.ref}</Text>
            </View>
            <Text
                numberOfLines={1}
                style={{
                    flexWrap: 'wrap'
                }}>
                {props.productInfo.description}
            </Text>
            <View style={styles.subtotalContainer}>
                <View style={{
                    flexDirection: 'row-reverse',
                    marginLeft: 20,
                }}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => addItem()}
                        style={[styles.cuantityView, styles.cuantityButtons]}>
                        <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>Añadir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        height: 130,
        width: '100%',
    },
    customView: {
        flex: 1,
    },
    boldText: {
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        aspectRatio: 1,
        height: '100%',
        resizeMode: 'contain'
    },
    cuantityButtons: {
        backgroundColor: AppColors.redWineColor,
    },
    cuantityButtonsTitle: {
        fontSize: 15,
        height: 20,
        alignSelf: 'center',
    },
    cuantityView: {
        width: '50%',
        height: 25,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: AppColors.redWineColor,
        justifyContent: 'center',
        borderRadius: 5
    },
    totalItemsText: {
        textAlign: 'center',
        color: AppColors.redWineColor,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        width: 50,
    },
    whiteColor: {
        color: '#fff',
    },
    subtotalContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    subtotalView: {
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: AppColors.redWineColor,
        alignItems: 'center',
        borderRadius: 3,
        paddingHorizontal: 20
    }
})