import { StyleSheet, Image, TouchableOpacity, ProgressViewIOSComponent } from 'react-native'
import React, { useState } from 'react'
import { Text, View } from '../../components/Themed';
import { AppColors } from '../../constants/Colors'
import XIcon from '../../assets/images/svg/XIcon';
import ProductModel from '../../models/ProductModel';
import Dialog from "react-native-dialog";

interface ProductSimulationCellProps {
    data: ProductModel,
    setIdToDelete: React.Dispatch<React.SetStateAction<number>>
}

export default function ProductSimulationCell(props: ProductSimulationCellProps) {
    const [Visible, setVisible] = useState(false)
    let Image_Http_URL = { uri: props.data.item.image_url };
    console.log(props);
    return (
        <View style={styles.mainView}>
            <View style={[styles.customView, styles.row]}>
                <Image
                    style={styles.image}
                    source={Image_Http_URL} />
                <ProductTitle productInfo={props.data.item} setIdToDelete={props.setIdToDelete} showAlert={setVisible} />
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
                    Visible && <AlertDelete id={props.data.item.id} setIdToDelete={props.setIdToDelete} showAlert={setVisible} visible={Visible} />
                }
            </View>
        </View>
    )
}

function ProductTitle(props: {
    productInfo: ProductModel,
    setIdToDelete: React.Dispatch<React.SetStateAction<number>>,
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
}) {
    const [totalItems, setTotalItems] = useState(1)
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 20,
        }}>
            <View style={styles.row}>
                <Text style={styles.boldText}>Red:</Text>
                <Text>{props.productInfo.id}</Text>
            </View>
            <Text style={{
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
                    <SubtotalButtons totalItems={totalItems} setTotalItems={setTotalItems} showAlert={props.showAlert} />
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
    setTotalItems: React.Dispatch<React.SetStateAction<number>>,
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
}) {

    const sumItem = () => {
        props.setTotalItems(props.totalItems + 1)
    }

    const lestItem = () => {
        if (props.totalItems > 1) {
            props.setTotalItems(props.totalItems - 1)
        } else {
            props.showAlert(true)
        }
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
                    style={[styles.cuantityView, styles.cuantityButtons]}>
                    <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.totalItemsText}>{props.totalItems}</Text>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => sumItem()}
                    style={[styles.cuantityView, styles.cuantityButtons]}>
                    <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const AlertDelete = (props: {
    setIdToDelete: React.Dispatch<React.SetStateAction<number>>,
    showAlert: React.Dispatch<React.SetStateAction<boolean>>,
    id: number,
    visible: boolean
}) => {
    const handleCancel = () => {
        props.showAlert(false);
    };

    const handleDelete = () => {
        props.setIdToDelete(props.id)
        props.showAlert(false);
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
    },
    cuantityButtonsTitle: {
        fontSize: 30,
        height: 35,
        alignSelf: 'center',
    },
    cuantityView: {
        width: '40%',
        height: 20,
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