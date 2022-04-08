import { StyleSheet, FlatList, Button } from 'react-native';
import { View } from '../../components/Themed';
import ProductSimulationCell from '../../components/simulation/ProductSimulationCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../types';
import { AppColors } from '../../constants/Colors'


interface SimulationTabScreenProps {

}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {

  const { state, dispatch } = useContext(CartContext);

  const finance = () => {
    dispatch({ type: "SIMULATE" });
    props.navigation.navigate('ResultTab');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} />}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Buscar"
          onPress={() => props.navigation.navigate('Scanner')}
          color={AppColors.redColor}
        />
        <Button
          title="Financialo!"
          onPress={finance}
          color={AppColors.redColor}
        />
      </View>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  }
});
