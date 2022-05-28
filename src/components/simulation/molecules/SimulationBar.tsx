import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../styles";

interface SimulationBarProps {
  onPressFinance: () => void;
  onPressSearch: () => void;
}

const SimulationBar = (props: SimulationBarProps) => {
  const { onPressFinance, onPressSearch } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity onPress={onPressFinance} style={styles.financeButton}>
        <Text style={styles.financeText}>Fináncialo!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSearch} style={styles.searchButton}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <FontAwesome name="search" size={22} color="white" />
          <AntDesign name="qrcode" size={24} color="white" />
        </View>
        <Text style={styles.searchText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SimulationBar;
