import { View, Text } from "react-native";
import { ProductDTO } from "_types";

import { styles } from "../styles";

interface ProductHeaderProps {
  product: ProductDTO;
}

const ProductHeader = (props: ProductHeaderProps) => {
  const { product } = props;

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.fontSizeSmall} numberOfLines={1}>
        <Text style={styles.bold}>Ref: </Text>
        {product.ref}
      </Text>
      <Text style={styles.bold}>
        {product.name}
      </Text>
      <Text numberOfLines={2}>
        {product.description}
      </Text>
    </View>
  );
}

export default ProductHeader;
