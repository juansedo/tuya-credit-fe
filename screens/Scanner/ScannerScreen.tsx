import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, Modal, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AppColors } from '../../constants/Colors';
import ProductCard from '../../components/scanner/ProductCard';
import { CartContext } from '../../utils/cart-context';

export default function ScannerScreen(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [product, setProduct] = useState({
        "id": "fgjf3434HADH1352djhfjfXBDGHT",
        "ref": "PR100SD",
        "image_url": "https://cdn.coordiutil.com/imagen-olla_electrica_blackdecker_digital_de_6_litros_pr100sd-2114169-0-0-0-100.jpg",
        "description": "Olla A Presión Digital Multico BLACK & DECKER",
        "value": "599900",
        "discount_percent": "0.53",
        "special_discount_percent": "0.53",
        "warehouse": "Exito"
    });

    const { dispatch } = useContext(CartContext);

    const addItem = () => {
        dispatch({ type: 'ADD_PRODUCT', payload: { product: product } });
        props.navigation.navigate('SimulationTab')
    }

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setScanned(false);
    }

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <ProductCard product={product} />
                            <View style={styles.buttonsContainer}>
                                <Button
                                    title="Agregar"
                                    onPress={() => addItem()}
                                    color={AppColors.redColor}
                                    style={styles.button}
                                />
                                <Button
                                    title="Cancelar"
                                    onPress={handleCloseModal}
                                    color={AppColors.redColor}
                                    style={styles.button}
                                />
                            </View>

                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        width: '90%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonsContainer: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});