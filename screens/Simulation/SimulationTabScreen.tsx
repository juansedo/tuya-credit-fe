import { StyleSheet, FlatList, Button } from 'react-native';
import { View } from '../../components/Themed';
import ProductSimulationCell from '../../components/simulation/ProductSimulationCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../types';


interface SimulationTabScreenProps {

}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {

  const { state } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} />}
      />
      <Button
        title="Search"
        onPress={() => props.navigation.navigate('Search')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list: {
    width: '100%'
  }
});
