import { StyleSheet, FlatList,  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ProductModel from '../../models/ProductModel';
import ProductSimulationCell from './ProductSimulationCell';

interface SimulationTabScreenProps {
  data: [ProductModel]
}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {
  let data = [
    {
      id: 1,
      ref: "ref",
      image_url: "url",
      description: "description",
      value: 1000,
      discount_percent: 0.1,
      special_discount_percent: 0.2,
      warehouse: "warehouse",
    },
    {
      id: 2,
      ref: "re2",
      image_url: "ur2",
      description: "description2",
      value: 2000,
      discount_percent: 0.2,
      special_discount_percent: 0.4,
      warehouse: "warehouse2",
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.list}
        renderItem={ProductSimulationCell}/>
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
