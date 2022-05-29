import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { View } from "_components/Themed";
import ProductSimulationCell from "_components/simulation/organisms/ProductSimulationCell";
import { CartContext } from "_utils/cart-context";
import { styles } from "_screens/Simulation/styles";
import { SimulationBar, TotalView } from "_components/simulation/molecules";
import { SearchModal, FinanceModal } from "_components/simulation/molecules";
import { ProductItem } from "_types"
import { useAsync } from "_utils/hooks/useAsync";
import { AuthContext } from "_utils/auth-context";

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
      <View style={{ paddingTop: 10, shadowColor: "rgb(0, 0, 0)", shadowOpacity: 0.1, width: "100%" }}>
        <TotalView total={totalPrice} />
        <SimulationBar
          onPressFinance={() => setFinanceModalVisible(true)}
          onPressSearch={() => setModalSearchVisible(true)}
        />
      </View>
      <SearchModal
        open={modalSearchVisible}
        onPressSearchByText={() => {
          setModalSearchVisible(false);
          props.navigation.navigate("Search");
        }}
        onPressSearchByQR={() => {
          setModalSearchVisible(false);
          props.navigation.navigate("Scanner");
        }}
        onClose={() => setModalSearchVisible(false)}
      />
      <FinanceModal
        open={modalFinanceVisible}
        cards={creditCards}
        onAccept={() => {
          setFinanceModalVisible(false);
          props.navigation.navigate("ResultTab");
        }}
        onClose={() => setFinanceModalVisible(false)}
      />
    </View>
  );
};

export default SimulationTabScreen;
