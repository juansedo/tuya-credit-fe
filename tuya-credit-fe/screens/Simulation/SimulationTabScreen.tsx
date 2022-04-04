import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { View, Text } from '../../components/Themed';
import ProductModel from '../../models/ProductModel';
import ProductSimulationCell from './ProductSimulationCell';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { AppColors } from '../../constants/Colors';

interface SimulationTabScreenProps {
  data: [ProductModel]
}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {
  let data = [
    {
      id: 1,
      ref: "ref",
      image_url: "https://olimpica.vtexassets.com/arquivos/ids/474490/Televisor-LED-FHD-OLIMPO-Smartv-101CM-40--40D3200S.jpg?v=637497819260800000",
      description: "description",
      value: 1000,
      discount_percent: 0.1,
      special_discount_percent: 0.2,
      warehouse: "warehouse",
    },
    {
      id: 2,
      ref: "re2",
      image_url: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
      description: "description2",
      value: 2000,
      discount_percent: 0.2,
      special_discount_percent: 0.4,
      warehouse: "warehouse2",
    },
    {
      id: 3,
      ref: "re2",
      image_url: "https://www.lg.com/co/images/televisores/md07504651/gallery/Des-01.jpg",
      description: "description2",
      value: 2000,
      discount_percent: 0.2,
      special_discount_percent: 0.4,
      warehouse: "warehouse2",
    }
  ]
  const [serverData, setServerData] = useState(data)
  const [idToDelete, setIdToDelete] = useState(-1)
  const [IdTotalItem, setIdTotalItem] = useState({})
  const [TotalToFinance, setTotalToFinance] = useState(0)

  useEffect(() => {
    const amount = serverData.find(item => item.id === idToDelete)?.value
    setTotalToFinance(TotalToFinance-(IdTotalItem[idToDelete.toString()]*amount))
    setServerData(serverData.filter(item => item.id !== idToDelete))
    delete IdTotalItem[idToDelete.toString()]
    console.log(IdTotalItem);
  }, [idToDelete])
  
  useEffect(() => {
    let total = 0
    for (const [key, amount] of Object.entries(IdTotalItem)) {
      const subtotal = serverData.find(item => item.id.toString() === key)
      total += subtotal?.value * amount
    }
    setTotalToFinance(total)
    console.log(TotalToFinance);
  }, [IdTotalItem])

  return (
    <View style={styles.container}>
      <FlatList
        data={serverData}
        style={styles.list}
        renderItem={(item) => <ProductSimulationCell data={item} setIdToDelete={setIdToDelete} setIdTotalItem={setIdTotalItem} IdTotalItem={IdTotalItem} />}
        extraData={setIdToDelete} />
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
