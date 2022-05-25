import { TouchableOpacity, Image } from 'react-native';
import { Text, View } from '_components/Themed';
import { RootTabScreenProps } from '_types';

import { styles } from './styles';

const HomeTabScreen = ({ navigation }: RootTabScreenProps<'HomeTab'>) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={[styles.title, {paddingTop: 20}]}>¡Bienvenido, </Text>
        <Text style={styles.title}>Juan!</Text>
        <Text style={{
            paddingVertical: 40,
            paddingHorizontal: 20,
          }}>
          <Text>
            Este es tu simulador de pagos con tarjetas de crédito. Prueba a
          </Text>
          <Text style={{fontWeight: "bold"}}> Simular una compra</Text>
          <Text> para que analices los costos.</Text>
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SimulationTab')}
            style={styles.buttonContainer}>
            <Image source={require('../../assets/images/hand.png')}/>
            <Text style={styles.fontRed}>Simula tu compra</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('ResultTab')}
            style={styles.buttonContainer}>
            <Image source={require('../../assets/images/result-red.png')}/>
            <Text style={styles.fontRed}>Última simulación</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 50,
        }}>
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{paddingRight: 8}}>Las cuentas son</Text>
            <Image source={require('../../assets/images/tuyas-logo.png')} style={{height: 40, width: 60}}/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeTabScreen;
