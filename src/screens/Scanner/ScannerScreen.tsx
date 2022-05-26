import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, Modal, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { AppColors } from "_constants/Colors";
import { ProductCard } from "_components/scanner/molecules";
import { CartContext } from "_utils/cart-context";
import { AuthContext } from "_utils/auth-context";
import { executeNativeBackPress } from "react-native-screens";

const ScannerScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({});
  const { axiosAuth } = useContext(AuthContext);

  const { dispatch } = useContext(CartContext);

  const addItem = () => {
    setModalVisible(false);
    dispatch({ type: "ADD_PRODUCT", payload: { product: product } });
    props.navigation.navigate("SimulationTab");
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    try {
      const productInfo = await axiosAuth.get(data);
      setProduct(productInfo.data.data);
      setScanned(true);
      setModalVisible(true);
    }
    catch (e) {

    }

  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setScanned(false);
  };

  if (hasPermission === null) {
    return null;
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
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ProductCard product={product} />
              <View style={styles.buttonsContainer}>
                <Button title="Agregar" onPress={() => addItem()} color={AppColors.redColor} style={styles.button} />
                <Button title="Cancelar" onPress={handleCloseModal} color={AppColors.redColor} style={styles.button} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default ScannerScreen;
