import { StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import ProductSimulationCell from '../../components/simulation/ProductSimulationCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../types';
import { AppColors } from '../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

interface SimulationTabScreenProps {
  navigation: any
}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {

  const { state, dispatch } = useContext(CartContext);

  const finance = () => {
    dispatch({ type: "SIMULATE" });
    props.navigation.navigate('ResultTab');
  }

  const [TotalToFinance, setTotalToFinance] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        data={state.cartItems}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} />}
      />
      <View style={{width: '100%'}}>
        <TotalView value={TotalToFinance} totalItems={1}/>
        <View style={{
          flexDirection: 'row',
          paddingVertical: 10,
        }}>
          <TouchableOpacity style={styles.financeButton}>
            <Text style={styles.financeText}>Fináncialo!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <View style={{
                flexDirection: 'row', 
                backgroundColor: 'transparent',
                justifyContent: 'center'
              }}>
              <FontAwesome name="search" size={24} color="white" />
              <AntDesign name="qrcode" size={24} color="white" />
            </View>
            <Text style={styles.searchText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function TotalView(props: {value: number ,totalItems: number}) {
  return (
      <View style={styles.subtotalView}>
          <Text style={styles.whiteColor}>
              Total:
          </Text>
          <Text style={[styles.boldText, styles.whiteColor]}>
              {props.value * props.totalItems} COP
          </Text>
      </View>
  )
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
  whiteColor: {
    color: '#fff',
  },
  subtotalContainer: {
      flex: 1,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-around',
  },
  subtotalView: {
      height: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: AppColors.redWineColor,
      alignItems: 'center',
      borderRadius: 3,
      paddingHorizontal: 20,
      marginLeft: 60,
      marginRight: 20,
  },
  boldText: {
    fontWeight: 'bold'
  },
  financeButton: {
    height: 50,
    backgroundColor: AppColors.redColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  financeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: AppColors.redWineColor,
    width: 100,
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  }
});