import { Alert, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AppColors } from "_constants/Colors";
import { fee } from "_types";

const Details = (fee: fee) => (
  <TouchableOpacity
    onPress={() =>
      Alert.alert(
        "Detalles de la cuota",
        `
Numero de cuota: ${fee.number}
Fecha de pago: ${fee.date}
Valor base: ${fee.amortizationValue}
intereses: ${fee.interestValue ?? '$0.00'}
Valor total: ${fee.value}
saldo pendiente: ${fee.balance}
          `,
        [{ text: "cerrar", onPress: () => console.log("OK Pressed") }]
      )
    }
  >
    <Image style={styles.img} source={require("../../../assets/images/document.png")} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  img: {
    width: 35,
    height: 35,
    marginLeft: "auto",
    marginRight: "auto",
    tintColor: AppColors.redColor,
  },
});

export default Details;
