import React, { useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "_components/Themed";
import { AlertDelete, ProductHeader, SubtotalButtons, SubtotalView } from "_components/simulation/molecules";
import XIcon from "_assets/images/svg/XIcon";
import { ProductItem } from "_types";

import ProductTitle from "./ProductTitle";
import { styles } from "../styles";

interface ProductSimulationCellProps {
  item: ProductItem;
}

const ProductSimulationCell = (props: ProductSimulationCellProps) => {
  const { item: { product, amount } } = props;

  const [Visible, setVisible] = useState(false);
  let Image_Http_URL = { uri: product.imageUrl };
  return (
    <View style={styles.mainView}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Image_Http_URL} />
      </View>
      <View style={styles.mainContainer}>
        <ProductHeader product={product} />
        <View style={styles.subtotalContainer}>
          <SubtotalView item={props.item} />
          <View
            style={{
              flexDirection: "row-reverse",
              marginLeft: 20,
            }}
          >
            <SubtotalButtons totalItems={amount} showAlert={setVisible} productId={product.id} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setVisible(true)}
          style={{
            top: 0,
            right: 0,
            width: 25,
            position: "absolute",
          }}
        >
          <XIcon />
        </TouchableOpacity>
        {Visible && <AlertDelete id={Number(props.item.product.id)} showAlert={setVisible} visible={Visible} />}
      </View>
    </View>
  );
}

export default ProductSimulationCell;
