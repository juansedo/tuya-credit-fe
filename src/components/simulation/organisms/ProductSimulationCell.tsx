import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { View } from "_components/Themed";
import { AlertDelete } from "_components/simulation/molecules";
import XIcon from "_assets/images/svg/XIcon";

import ProductTitle from "./ProductTitle";
import { ProductItem } from "../../../../types";
import { styles } from "../styles";

interface ProductSimulationCellProps {
  data: {
    item: ProductItem;
  };
}

const ProductSimulationCell = (props: ProductSimulationCellProps) => {
  const [Visible, setVisible] = useState(false);
  let Image_Http_URL = { uri: props.data.item.product.image_url };
  return (
    <View style={styles.mainView}>
      <View style={[styles.customView, styles.row]}>
        <Image style={styles.image} source={Image_Http_URL} />
        <ProductTitle
          productInfo={props.data.item.product}
          showAlerts={setVisible}
          totalItems={props.data.item.amount}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setVisible(true)}
          style={{
            top: 7,
            width: 20,
            position: "absolute",
            right: 15,
          }}
        >
          <XIcon />
        </TouchableOpacity>
        {Visible && <AlertDelete id={props.data.item.product.id} showAlert={setVisible} visible={Visible} />}
      </View>
    </View>
  );
}

export default ProductSimulationCell;
