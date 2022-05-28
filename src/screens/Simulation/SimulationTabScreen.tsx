import React, { useState, useContext, useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "_components/Themed";
import ProductSimulationCell from "_components/simulation/organisms/ProductSimulationCell";
import { CartContext } from "_utils/cart-context";
import { styles } from "_screens/Simulation/styles";
import { TotalView } from "_components/simulation/molecules";
import { currencyFormat } from "_utils/helpers";
import { ModalFinance, SearchModal } from './SimulationModals'
import { ProductItem } from "_types"
import { useAsync } from "_utils/hooks/useAsync";
import { AuthContext } from "_utils/auth-context";

const creditCards = [
  {
    type: "PRIVADA",
    lastDigits: "2291",
    fee: "21500.00",
    feeMode: "MONTHLY IN USE",
    capacity: "8600000.00",
    available: "5160000.00",
    interestRate: "0.1600",
    userKey: "QRST"
  },
  {
    type: "CREDICOMPRAS",
    lastDigits: "7263",
    fee: "12500.00",
    feeMode: "MONTHLY",
    capacity: "16200000.00",
    available: "14580000.00",
    interestRate: "0.9300",
    userKey: "QRST"
  },
  {
    type: "PRIVADA",
    lastDigits: "2993",
    fee: "21500.00",
    feeMode: "MONTHLY",
    capacity: "17600000.00",
    available: "10560000.00",
    interestRate: "1.9700",
    userKey: "QRST"
  },
]

interface SimulationTabScreenProps {
  navigation: any;
}

const SimulationTabScreen = (props: SimulationTabScreenProps) => {
  const { state, dispatch } = useContext(CartContext);

  const [modalSearchVisible, setModalSearchVisible] = useState(false);
  const [modalFinanceVisible, setFinanceModalVisible] = useState(false);
  const [creditCards, setCreditCards] = useState([]);
  const { axiosAuth } = useContext(AuthContext);

  const fetchCreditCards = async () => {
    try {
      let response = await axiosAuth.get("http://34.135.136.87/users/cards");
      return response.data.data;
    }
    catch (error) {
      console.log(error);
      return [];
    }
  };

  useAsync(fetchCreditCards, setCreditCards);

  const finance = () => {
    setFinanceModalVisible(true);
  };

  const totalPrice = state.cartItems.reduce((total: number, product: ProductItem) => {
    const productPrice = product.amount * parseInt(product.product.creditCardPrice ?? product.product.originalPrice);
    return total + productPrice
  }, 0)

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={({item}) => <ProductSimulationCell item={item} />}
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
      <SearchModal navigation={props.navigation} modalVisible={modalSearchVisible} setModalVisible={setModalSearchVisible} valueToFinance={totalPrice} />
      <ModalFinance navigation={props.navigation} modalVisible={modalFinanceVisible} setModalVisible={setFinanceModalVisible} cards={creditCards} />
    </View>
  );
};

export default SimulationTabScreen;
