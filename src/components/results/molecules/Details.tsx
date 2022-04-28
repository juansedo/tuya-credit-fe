import { Alert, TouchableOpacity } from "react-native";
import { fee } from "_types";

import { styles } from "../styles";

const Details = (fee: fee) => (
  <TouchableOpacity
    onPress={() =>
      Alert.alert(
        "Detalles de la cuota",
        `
Numero de cuota: ${fee.number}
Fecha de pago: ${fee.date}
Valor base: ${fee.amortizationValue}
intereses: ${fee.interestValue}
Valor total: ${fee.value}
saldo pendiente: ${fee.balance}
          `,
        [{ text: "cerrar", onPress: () => console.log("OK Pressed") }]
      )
    }
  >
    <Image style={styles.img} source={require("_assets/images/document.png")} />
  </TouchableOpacity>
);

export default Details;
