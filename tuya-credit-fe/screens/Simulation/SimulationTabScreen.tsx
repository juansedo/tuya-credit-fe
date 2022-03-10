import { StyleSheet, FlatList,  } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import ProductSimulationCell from './ProductSimulationCell';

type DATA = {
  id: number;
}

interface SimulationTabScreenProps {
  data: [DATA]
}

export default function SimulationTabScreen(props: SimulationTabScreenProps) {
  const DAT = [
    {
      id: 1, 
      name: "Camilo"
    }, 
    {
      id: 2,
      name: "Laura"
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={DAT}
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
