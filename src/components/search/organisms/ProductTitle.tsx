import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { CartContext } from "_utils/cart-context";
import { Text, View } from "_components/Themed";

import { ProductDTO } from "types";
import { styles } from "../styles";

interface SearchProductTitleProps {
  productInfo: ProductDTO;
  totalItems: number;
  navigation: any;
};

const ProductTitle = (props: SearchProductTitleProps) => {
  const { productInfo, totalItems } = props;
  const { dispatch } = useContext(CartContext);

  const addItem = () => {
    dispatch({ type: "ADD_PRODUCT", payload: { product: productInfo } });
    props.navigation.navigate("SimulationTab");
  };

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
      }}
    >
      <View style={styles.row}>
        <Text style={styles.boldText} numberOfLines={1}>
          {props.productInfo.ref}
        </Text>
      </View>
      <Text
        numberOfLines={1}
        style={{
          flexWrap: "wrap",
        }}
      >
        {props.productInfo.description}
      </Text>
      <View style={styles.subtotalContainer}>
        <View
          style={{
            flexDirection: "row-reverse",
            marginLeft: 20,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => addItem()}
            style={[styles.cuantityView, styles.cuantityButtons]}
          >
            <Text style={[styles.cuantityButtonsTitle, styles.whiteColor]}>Añadir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductTitle;
