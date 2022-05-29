import { useContext } from 'react';
import { Image } from 'react-native';
import { QuickAccessButton } from '_components/common/molecules';
import { Text, View } from '_components/Themed';
import { RootTabScreenProps } from '_types';
import { AuthContext } from '_utils/auth-context';

import { styles } from './styles';

const HomeTabScreen = ({ navigation }: RootTabScreenProps<'HomeTab'>) => {
  const { state } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.title}>¡Bienvenido, {state.name}!</Text>
        <Text style={styles.content}>
          <Text>
            Este es tu simulador de pagos con tarjetas de crédito. Prueba a
          </Text>
          <Text style={styles.bold}> Simular una compra</Text>
          <Text> para que analices los costos.</Text>
        </Text>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <QuickAccessButton
            onPress={() => navigation.navigate('SimulationTab')}
            image={require('../../assets/images/hand.png')}
            text="Simula tu compra"
          />
          <QuickAccessButton
            onPress={() => navigation.navigate('ResultTab')}
            image={require('../../assets/images/result-red.png')}
            text="Última simulación"
          />
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 50,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Text style={{ fontFamily: "Poppins-Regular", paddingRight: 8 }}>Las cuentas son</Text>
            <Image source={require('../../assets/images/tuyas-logo.png')} style={{ height: 40, width: 60 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeTabScreen;
