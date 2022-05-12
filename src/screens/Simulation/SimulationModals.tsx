import React, { useRef, useState } from 'react'
import { Modal, View, TouchableOpacity, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import { styles } from "_screens/Simulation/styles";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

interface ModalInterface {
    navigation: any;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
}

const ModalFinance = (props: ModalInterface) => {
    const [selectedValue, setSelectedValue] = useState(1)
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
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <Text style={styles.whiteColor}>Cuotas</Text>
                            <Picker 
                                selectedValue={selectedValue} 
                                onValueChange={(itemValue, _itemIndex) =>
                                    setSelectedValue(itemValue)
                                }
                                style={{width: 200, height: 150}} 
                                itemStyle={{height: 150}} >
                                {Array(96).fill(1).map((_, i) =>
                                    <Picker.Item label={`${i+1}`} value={i+1} color='white'/>
                                )}
                            </Picker>
                            <TouchableOpacity style={styles.closeButton} onPress={() => props.setModalVisible(false)} >
                        <Text style={styles.whiteColor}>
                            Aceptar
                        </Text>
                    </TouchableOpacity>
                        </View>
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