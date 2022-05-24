import React, { useState, useContext } from "react";
import { FlatList, Modal, TouchableOpacity, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "_components/Themed";
import ProductSimulationCell from "_components/simulation/organisms/ProductSimulationCell";
import { CartContext } from "_utils/cart-context";
import { styles } from "_screens/Simulation/styles";
import { TotalView } from "_components/simulation/molecules";
import { currencyFormat } from "_utils/helpers";

interface SimulationTabScreenProps {
  navigation: any;
}

const SimulationTabScreen = (props: SimulationTabScreenProps) => {
  const { state, dispatch } = useContext(CartContext);
  const [TotalToFinance, setTotalToFinance] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const finance = () => {
    dispatch({ type: "SIMULATE" });
    props.navigation.navigate("ResultTab");
  };

  const totalPrice = state.cartItems.reduce((total, product) => {
    const productPrice = parseInt(product.amount) * parseInt(product.product.creditCardPrice ?? product.product.originalPrice);
    return total + productPrice
  }, 0)

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ width: "100%" }}>
        <TotalView value={currencyFormat(totalPrice)} />
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={finance}
            style={styles.financeButton}
          >
            <Text style={styles.financeText}>Fináncialo!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.searchButton}
          >
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "transparent",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="search" size={24} color="white" />
              <AntDesign name="qrcode" size={24} color="white" />
            </View>
            <Text style={styles.searchText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.optionButton} onPress={() => {
                  setModalVisible(false)
                  props.navigation.navigate("Search")
                }} >
                  <FontAwesome name="search" size={80} color="white" />
                  <Text style={styles.whiteColor}>Busqueda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={() => {
                  setModalVisible(false)
                  props.navigation.navigate("Scanner")
                }}>
                  <AntDesign name="qrcode" size={80} color="white" />
                  <Text style={styles.whiteColor}>Busqueda QR </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)} >
                <Text style={styles.whiteColor}>
                  Cerrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default SimulationTabScreen;
