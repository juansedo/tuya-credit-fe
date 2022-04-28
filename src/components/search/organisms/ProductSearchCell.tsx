import React, { useState } from "react";
import { Image } from "react-native";
import { View } from "_components/Themed";

import ProductTitle from "./ProductTitle";
import { styles } from "../styles";

interface ProductSearchProps {
  data: any;
  navigation: any;
}

const ProductSearchCell = (props: ProductSearchProps) => {
  const [Visible, setVisible] = useState(false);

  let Image_Http_URL = { uri: props.data.item.image_url };
  return (
    <View style={styles.mainView}>
      <View style={[styles.customView, styles.row]}>
        <Image style={styles.image} source={Image_Http_URL} />
        <ProductTitle
          productInfo={props.data.item}
          navigation={props.navigation}
          totalItems={props.data.item.amount}
        />
      </View>
    </View>
  );
}

export default ProductSearchCell;
