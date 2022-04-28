import { useState } from "react";
import { Text, View } from "_components/Themed";
import { SubtotalButtons } from "_components/simulation/molecules";
import { SubtotalView } from "_components/simulation/molecules";
import { ProductDTO } from "_types";

import { styles } from "../styles";

interface ProductTitleProps {
  productInfo: ProductDTO;
  showAlerts: React.Dispatch<React.SetStateAction<boolean>>;
  totalItems: number;
}

const ProductTitle = (props: ProductTitleProps) => {
  const [totalItems, setTotalItems] = useState(1);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
      }}
    >
      <View style={styles.row}>
        <Text numberOfLines={1} style={styles.boldText}>
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
        <SubtotalView totalItems={totalItems} value={props.productInfo.value} />
        <View
          style={{
            flexDirection: "row-reverse",
            marginLeft: 20,
          }}
        >
          <SubtotalButtons totalItems={totalItems} showAlert={props.showAlerts} productId={props.productInfo.id} />
        </View>
      </View>
    </View>
  );
}

export default ProductTitle;
