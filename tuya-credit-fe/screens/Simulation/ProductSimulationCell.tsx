import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { Text, View } from '../../components/Themed';
import {AppColors} from '../../constants/Colors'
import XIcon from '../../assets/images/svg/XIcon';
import ProductModel from '../../models/ProductModel';

interface ProductSimulationCellProps {
    data: ProductModel,
}

export default function ProductSimulationCell(props: ProductSimulationCellProps) {
    return (
        <View style={styles.mainView}>
            <View style={[styles.customView, styles.row]}> 
                <Image
                    style={styles.image}
                    source={require('../../assets/images/favicon.png')}/>
                <ProductTitle/>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{
                        top: 10,
                        width: 20,
                        position: 'absolute',
                        right: 20,
                    }}>
                        <XIcon/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

function ProductTitle() {
    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
            marginTop: 20,
        }}>
            <View style={styles.row}>
                <Text style={styles.boldText}>Red:</Text>
                <Text>22343432323344</Text>
            </View>
            <Text style={{
                flexWrap: 'wrap'
            }}>
                Xiaomi Mi 11 Lite (128 GB, 6 GB) 6.55 pulgadas 90 Hz AMOLED
            </Text>
            <View style={styles.subtotalContainer}>
                <SubtotalView/>
                <View style={{
                        flexDirection: 'row-reverse',
                        marginLeft: 20,
                    }}>
                    <SubtotalButtons/>
                </View>
            </View>
        </View>
    )
}
 
function SubtotalView() {
    return (
        <View style={styles.subtotalView}>
            <Text style={styles.whiteColor}>
                Subtotal:
            </Text>
            <Text style={[styles.boldText, styles.whiteColor]}>
                1’200.000,00 COP
            </Text>
        </View>
    )
}

function SubtotalButtons() {
    const [totalItems, setTotalItems] = useState(1)

    const sumItem = () => {
        setTotalItems(totalItems+1)
    }

    const lestItem = () => {
        if (totalItems > 1) {
            setTotalItems(totalItems-1)
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
                <Text style={styles.totalItemsText}>{totalItems}</Text>
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

const styles = StyleSheet.create({
    mainView: {
        flex:  1,
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