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
  const { totalItems } = props;

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20,
      }}
    >

    </View>
  );
}

export default ProductTitle;
