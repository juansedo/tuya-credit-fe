import React, { useState, useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text } from "_components/Themed";
import ProductSimulationCell from "_components/simulation/organisms/ProductSimulationCell";
import { CartContext } from "_utils/cart-context";
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
        keyExtractor={(item, index) => index}
      />
      <View style={{ width: "100%" }}>
        <TotalView value={TotalToFinance} totalItems={1} />
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Search')}
            style={styles.financeButton}
          >
            <Text style={styles.financeText}>Fináncialo!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={finance}
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
    </View>
  );
};

export default SimulationTabScreen;
