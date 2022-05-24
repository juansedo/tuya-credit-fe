import React, { useContext, useState } from "react";
import { FlatList, TextInput } from "react-native";
import { View } from "_components/Themed";
import ProductSearchCell from "_components/search/organisms/ProductSearchCell";
import * as SecureStore from 'expo-secure-store';

import { styles } from "./styles";
import { ProductDTO } from "_types";
import { useAsync } from "_utils/hooks/useAsync";
import { AuthContext } from "_utils/auth-context";

interface SearchScreenProps {
  navigation: any;
}

const SimulationTabScreen = (props: SearchScreenProps) => {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const { axiosAuth } = useContext(AuthContext);


  const fetchProducts = async () => {
    try {
      let response = await axiosAuth.get("http://34.135.136.87/products");
      return response.data.data as Promise<ProductDTO[]>;
    }
    catch (error) {
      console.log(error);
      return [];
    }
  };

  useAsync(fetchProducts, setProducts);

  const handleInputChange = (text: any) => {
    setProducts(
      data.filter(
        (item) =>
          item.ref.toLowerCase().includes(text.toLowerCase()) ||
          item.description.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.53,
          shadowRadius: 10,
          elevation: 10,
          paddingBottom: 10,
        }}
      >
        <View style={styles.SearchBarContainer}>
          <TextInput style={styles.SearchBar} onChangeText={(text) => handleInputChange(text)} />
        </View>
      </View>

      <FlatList
        data={products}
        style={styles.list}
        renderItem={({ item }) => <ProductSearchCell data={item} navigation={props.navigation} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default SimulationTabScreen;
