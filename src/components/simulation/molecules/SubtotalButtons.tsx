import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { CartContext } from "_utils/cart-context";
import { Text, View } from "_components/Themed";

import { styles } from "../styles";

const SubtotalButtons = (props: {
  totalItems: number;
  showAlert: React.Dispatch<React.SetStateAction<boolean>>;
  productId: string;
}) => {
  const { dispatch } = useContext(CartContext);

  const sumItem = () => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { id: props.productId } });
  };

  const lestItem = () => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { id: props.productId } });
  };

  return (
    <View style={styles.cuantityView}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity activeOpacity={0.5} onPress={() => lestItem()} style={[styles.cuantityButtons]}>
          <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>-</Text>
        </TouchableOpacity>
        <Text style={styles.totalItemsText}>{props.totalItems}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => sumItem()} style={[styles.cuantityButtons]}>
          <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubtotalButtons;
