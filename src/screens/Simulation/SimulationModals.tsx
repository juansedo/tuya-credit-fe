import React, { useContext, useState } from 'react'
import { Modal, View, TouchableOpacity, Text, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { styles } from "_screens/Simulation/styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { card } from "_types"
import { AppColors } from '_constants/Colors';
import { CartContext } from '_utils/cart-context';

interface ModalInterface {
    navigation: any;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    cards?: Array<card>
    valueToFinance?: number;
}

interface PickerFinanceInterface {
    selectedValue: number;
    setSelectedValue: (visible: number) => void;
    setModalVisible: (visible: boolean) => void;
}

const PickerFinance = (props: PickerFinanceInterface) => {

    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={[styles.whiteColor, styles.boldText]}>
                Cuotas
            </Text>
            <Picker
                selectedValue={props.selectedValue}
                onValueChange={(itemValue, _itemIndex) =>
                    props.setSelectedValue(itemValue)
                }
                style={{ width: 90, backgroundColor: 'white', marginBottom: 10 }}
                itemStyle={{ height: 50 }} >
                {Array(96).fill(1).map((_, i) =>
                    <Picker.Item label={`${i + 1}`} value={i + 1} color='black' />
                )}
            </Picker>
        </View>
    )
}

interface CardViewInterface {
    setSelectedCard: (visible: string) => void;
    selectedCard: object;
    cardInformation: card;
}

const CardView = (props: CardViewInterface) => {
    const isCardSelected = props.selectedCard?.lastDigits == props.cardInformation.lastDigits
    return (
        <TouchableOpacity
            style={[
                styles.cardButton, {
                    backgroundColor: isCardSelected ? AppColors.redWineColor : 'white'
                }
            ]} onPress={() => {
                props.setSelectedCard(props.cardInformation)
            }} >
            <Image
                source={require('_assets/images/yellow.png')} />
            <View style={{
                paddingLeft: 10,
            }}>
                <Text style={[styles.boldText, styles.titleText, { color: isCardSelected ? "white" : "black" }]}>{props.cardInformation.type.charAt(0) + props.cardInformation.type.slice(1).toLowerCase()}</Text>
                <View style={styles.infoCardStyle}>
                    <Text style={[styles.boldText, { color: isCardSelected ? "white" : "black" }]}>Interés mensual: </Text>
                    <Text style={{ color: isCardSelected ? "white" : "black" }}>{props.cardInformation.interestRate}</Text>
                </View>
                <View style={styles.infoCardStyle}>
                    <Text style={[styles.boldText, { color: isCardSelected ? "white" : "black" }]}>Cupo disponible: </Text>
                    <Text style={{ color: isCardSelected ? "white" : "black" }} >${props.cardInformation.available}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ModalFinance = (props: ModalInterface) => {
    const [selectedValue, setSelectedValue] = useState(1)
    const [selectedCard, setSelectedCard] = useState("")
    const { dispatch } = useContext(CartContext)

    const handleFinance = () => {
        props.setModalVisible(false)
        console.log(selectedValue)
        console.log(selectedCard)
        dispatch({ type: 'SET_CREDIT_CARD', payload: { creditCard: selectedCard } })
        dispatch({ type: 'SET_FEES', payload: { fees: selectedValue } })
        dispatch({ type: 'SIMULATE' })
        props.navigation.navigate("ResultTab")
    }

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ position: 'absolute', right: 5, top: 3 }} onPress={() => props.setModalVisible(false)} >
                            <FontAwesome name="close" size={30} color="white" />
                        </TouchableOpacity>
                        <Text style={[styles.whiteColor, styles.boldText, { paddingVertical: 10 }]}>
                            Escoje una tarjeta
                        </Text>
                        <View style={{}}>
                            {
                                props.cards?.map((card, key) => {
                                    return (
                                        <CardView selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardInformation={card} />
                                    )
                                })
                            }
                        </View>
                        <PickerFinance
                            setModalVisible={props.setModalVisible}
                            selectedValue={selectedValue}
                            setSelectedValue={setSelectedValue} />
                        <TouchableOpacity style={styles.closeButton} onPress={handleFinance}>
                            <Text style={styles.whiteColor}>
                                Aceptar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
};

const SearchModal = (props: ModalInterface) => {
    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.optionButton} onPress={() => {
                                props.setModalVisible(false)
                                props.navigation.navigate("Search")
                            }} >
                                <FontAwesome name="search" size={80} color="white" />
                                <Text style={styles.whiteColor}>Busqueda</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.optionButton} onPress={() => {
                                props.setModalVisible(false)
                                props.navigation.navigate("Scanner")
                            }}>
                                <AntDesign name="qrcode" size={80} color="white" />
                                <Text style={styles.whiteColor}>Busqueda QR </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.closeButton} onPress={() => props.setModalVisible(false)} >
                            <Text style={styles.whiteColor}>
                                Cerrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export {
    ModalFinance,
    SearchModal
}