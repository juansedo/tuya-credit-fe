import { StyleSheet, Image, TouchableOpacity, ProgressViewIOSComponent } from 'react-native'
import React, { useContext, useState } from 'react'
import { Text, View } from '../Themed';
import { AppColors } from '../../constants/Colors'
import XIcon from '../../assets/images/svg/XIcon';
import { ProductDTO } from '../../types';
import Dialog from "react-native-dialog";
import { CartContext } from '../../utils/cart-context';

interface ProductSimulationCellProps {
    data: ProductDTO,
}


export default function ProductSimulationCell(props: ProductSimulationCellProps) {

    const [Visible, setVisible] = useState(false)
    let Image_Http_URL = { uri: props.data.item.product.image_url };
    return (
        <View style={styles.mainView} >
            <View style={[styles.customView, styles.row]}>
                <Image
                    style={styles.image}
                    source={Image_Http_URL} />
                <ProductTitle productInfo={props.data.item.product} showAlert={setVisible} totalItems={props.data.item.amount} />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setVisible(true)}
                    style={{
                        top: 10,
                        width: 20,
                        position: 'absolute',
                        right: 20,
                    }}>
                    <XIcon />
                </TouchableOpacity>
                {
                    Visible && <AlertDelete id={props.data.item.product.id} showAlert={setVisible} visible={Visible} />
                }
            </View>
        </View >
    )
}

function ProductTitle(props: {
    productInfo: ProductDTO,
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
    totalItems: number
}) {
    const { productInfo, showAlert, totalItems } = props;
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 20,
        }}>
            <View style={styles.row}>
                <Text numberOfLines={1} style={styles.boldText}>props.productInfo.ref</Text>
            </View>
            <Text
                numberOfLines={1}
                style={{
                    flexWrap: 'wrap'
                }}>
                {props.productInfo.description}
            </Text>
            <View style={styles.subtotalContainer}>
                <SubtotalView totalItems={totalItems} value={props.productInfo.value} />
                <View style={{
                    flexDirection: 'row-reverse',
                    marginLeft: 20,
                }}>
                    <SubtotalButtons totalItems={totalItems} showAlert={props.showAlert} productId={productInfo.id} />
                </View>
            </View>
        </View>
    )
}

function SubtotalView(props: { value: number, totalItems: number }) {
    return (
        <View style={styles.subtotalView}>
            <Text style={styles.whiteColor}>
                Subtotal:
            </Text>
            <Text style={[styles.boldText, styles.whiteColor]}>
                {props.value * props.totalItems} COP
            </Text>
        </View>
    )
}

function SubtotalButtons(props: {
    totalItems: number,
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
    productId: number
}) {

    const { dispatch } = useContext(CartContext);

    const sumItem = () => {
        dispatch({ type: 'INCREASE_AMOUNT', payload: { id: props.productId } });
    }

    const lestItem = () => {
        dispatch({ type: 'DECREASE_AMOUNT', payload: { id: props.productId } });
    }

    return (
        <View style={styles.cuantityView}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => lestItem()}
                    style={[styles.cuantityButtons]}>
                    <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.totalItemsText}>{props.totalItems}</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => sumItem()}
                    style={[styles.cuantityButtons]}>
                    <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const AlertDelete = (props: {
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
    id: number,
    visible: boolean
}) => {
    const { dispatch } = useContext(CartContext);
    const handleCancel = () => {
        props.showAlert(false);
    };

    const handleDelete = () => {
        dispatch({ type: 'DELETE_PRODUCT', payload: { id: props.id } });
    };

    return (
        <Dialog.Container visible={props.visible}>
            <Dialog.Title>Eliminar producto</Dialog.Title>
            <Dialog.Description>
                Estas seguro que quieres eliminar este
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="Delete" onPress={handleDelete} />
        </Dialog.Container>
    );
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
        paddingHorizontal: 15,
        height: 25,
        lineHeight: 0,
        margin: 0
    },
    cuantityButtonsTitle: {
        fontSize: 15,


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