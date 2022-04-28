import { FlatList, TouchableOpacity } from "react-native";
import { View, Text } from "../../components/Themed";
import ProductSimulationCell from "../../components/simulation/organisms/ProductSimulationCell";
import React, { useState, useContext } from "react";
import { CartContext } from "../../utils/cart-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "_screens/simulation/styles";
import { TotalView } from "_components/simulation/molecules";

interface SimulationTabScreenProps {
  navigation: any;
}

const SimulationTabScreen = (props: SimulationTabScreenProps) => {
  const { state, dispatch } = useContext(CartContext);

  const finance = () => {
    dispatch({ type: "SIMULATE" });
    props.navigation.navigate("ResultTab");
  };

  const [TotalToFinance, setTotalToFinance] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} />}
      />
      <View style={{ width: "100%" }}>
        <TotalView value={TotalToFinance} totalItems={1} />
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity style={styles.financeButton}>
            <Text style={styles.financeText}>Fináncialo!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
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
    </View>
  );
};

export default SimulationTabScreen;
