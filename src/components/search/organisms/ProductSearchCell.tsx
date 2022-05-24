import React, { useState } from "react";
import { Image } from "react-native";
import { Text, View } from "_components/Themed";
import { ProductDTO } from "_types";

import ProductTitle from "./ProductTitle";
import { styles } from "../styles";

type ProductSearchProps = {
  data: ProductDTO,
  navigation: any,
}

const ProductSearchCell = (props: ProductSearchProps) => {
  const { data, navigation } = props;
  const [Visible, setVisible] = useState(false);

  let Image_Http_URL = { uri: data.imageUrl };
  return (
    <View style={styles.mainView}>
      <View style={[styles.customView, styles.row]}>
        <Image style={styles.image} source={Image_Http_URL} />
        <ProductTitle
          productInfo={data}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

export default ProductSearchCell;
