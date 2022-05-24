import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { ProductDTO } from "_types";

import { styles } from "../styles";

type ScannerProductCardProps = {
  product: ProductDTO;
};

const ProductCard = (props: ScannerProductCardProps) => {
  let { product } = props;
  let imgSource = { uri: product.imageUrl };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSource} />
      <Text numberOfLines={1} style={styles.productName}>
        {product.name}
      </Text>
      <Text numberOfLines={1} style={styles.productDescription}>
        {product.description}
      </Text>
    </View>
  );
};

export default ProductCard;
