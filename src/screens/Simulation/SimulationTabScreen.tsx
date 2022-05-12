import React, { useState, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "_components/Themed";
import ProductSimulationCell from "_components/simulation/organisms/ProductSimulationCell";
import { CartContext } from "_utils/cart-context";
import { styles } from "_screens/Simulation/styles";
import { TotalView } from "_components/simulation/molecules";
import { currencyFormat } from "_utils/helpers";
import {ModalFinance, SearchModal} from './SimulationModals'

interface SimulationTabScreenProps {
  navigation: any;
}

const SimulationTabScreen = (props: SimulationTabScreenProps) => {
  const { state, dispatch } = useContext(CartContext);
  const [TotalToFinance, setTotalToFinance] = useState(0);
  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [modalFinanceVisible, setFinanceModalVisible] = useState(false);

  const finance = () => {
    setFinanceModalVisible(true)
    //dispatch({ type: "SIMULATE" });
    //props.navigation.navigate("ResultTab");
  };

  const totalPrice = state.cartItems.reduce((total, product) => {
    const productPrice = parseInt(product.amount) * parseInt(product.product.value)
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
            onPress={() => setModalSearchVisible(true)}
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
      <SearchModal navigation={props.navigation} modalVisible={modalSearchVisible} setModalVisible={setModalSearchVisible} />
      <ModalFinance navigation={props.navigation} modalVisible={modalFinanceVisible} setModalVisible={setFinanceModalVisible} />
    </View>
  );
};

export default SimulationTabScreen;
