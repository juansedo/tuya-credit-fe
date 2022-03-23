import { StyleSheet, FlatList } from 'react-native';
import { View } from '../../components/Themed';
import ProductModel from '../../models/ProductModel';
import ProductSimulationCell from './ProductSimulationCell';
import React, { useState, useEffect } from 'react'

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
    }
  ]
  const [serverData, setServerData] = useState(data)
  const [idToDelete, setIdToDelete] = useState(-1)

  useEffect(() => {
    setServerData(serverData.filter(item => item.id !== idToDelete))
  }, [idToDelete])

  return (
    <View style={styles.container}>
      <FlatList
        data={serverData}
        style={styles.list}
        renderItem={(item, index) => <ProductSimulationCell data={item} setIdToDelete={setIdToDelete} />}
        extraData={setIdToDelete} />
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
