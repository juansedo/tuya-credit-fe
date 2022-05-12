import React, { useRef, useState } from 'react'
import { Modal, View, TouchableOpacity, Text, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { styles } from "_screens/Simulation/styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { card } from "_types"
import { AppColors } from '_constants/Colors';

interface ModalInterface {
    navigation: any;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    cards?: Array<card>
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
                style={{ width: 200, height: 150 }}
                itemStyle={{ height: 150 }} >
                {Array(96).fill(1).map((_, i) =>
                    <Picker.Item label={`${i + 1}`} value={i + 1} color='white' />
                )}
            </Picker>
            <TouchableOpacity style={styles.closeButton} onPress={() => props.setModalVisible(false)} >
                <Text style={styles.whiteColor}>
                    Aceptar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

interface CardViewInterface {
    setSelectedCard: (visible:  string) => void;
    selectedCard: string;
    cardInformation: card;
}

const CardView = (props: CardViewInterface) => {
    const isCardSelected = props.selectedCard == props.cardInformation.lastDigits
    return (
        <TouchableOpacity 
            style={[
                styles.cardButton, {
                    backgroundColor: isCardSelected ? AppColors.redWineColor : 'white'
                }
            ]} onPress={() => {
            props.setSelectedCard(props.cardInformation.lastDigits)
        }} >
            <Image 
                style={styles.cardImage}
                source={require('_assets/images/yellow.png')}/>
            <View style={{
                paddingLeft: 10,
            }}>
                <Text style={[styles.boldText, styles.titleText, {color: isCardSelected ? "white": "black"}]}>{props.cardInformation.type.charAt(0) + props.cardInformation.type.slice(1).toLowerCase()}</Text>
                <View style={styles.infoCardStyle}>
                    <Text style={[styles.boldText, {color: isCardSelected ? "white": "black"}]}>Interés mensual: </Text>
                    <Text style={{color: isCardSelected ? "white": "black"}}>{props.cardInformation.interestRate}</Text>
                </View>
                <View style={styles.infoCardStyle}>
                    <Text style={[styles.boldText, {color: isCardSelected ? "white": "black"}]}>Cupo disponible: </Text>
                    <Text style={{color: isCardSelected ? "white": "black"}} >${props.cardInformation.available}</Text>
                </View>
            </View>    
        </TouchableOpacity>
    )
}

const ModalFinance = (props: ModalInterface) => {
    const [selectedValue, setSelectedValue] = useState(1)
    const [selectedCard, setSelectedCard] = useState("")

    const pickerRef = useRef();

    const open = () => {
        pickerRef.current.focus();
    }

    const close = () => {
        pickerRef.current.blur();
    }

    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide" transparent={true} visible={props.modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.whiteColor, styles.boldText, {paddingTop: 10}]}>
                            Escoje una tarjeta
                        </Text>
                        <View style={{}}>
                            {
                                props.cards?.map((card, key) => {
                                    return (
                                        <CardView selectedCard={selectedCard} setSelectedCard={setSelectedCard} cardInformation={card}/>
                                    )
                                })
                            }
                        </View>
                        <PickerFinance 
                            setModalVisible={props.setModalVisible} 
                            selectedValue={selectedValue} 
                            setSelectedValue={setSelectedValue}/>
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