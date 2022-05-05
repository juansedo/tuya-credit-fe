import React, { useContext, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { getAnnuityValue, getDecreasingValues } from "_utils/helpers";
import { CartContext } from "_utils/cart-context";

import { styles } from "../styles";

type ResultsCostSummaryProps = {
  totalAmount: number;
  feesNumber: number;
  handlingFee: number;
  interestRate: number;
  cardType: string;
};

const CostSummary = (props: ResultsCostSummaryProps) => {
  const { totalAmount, feesNumber, handlingFee, interestRate, cardType } = props;
  const [feesNumberValue, setFeesNumberValue] = useState(feesNumber);
  const [interestRateValue, setInterestRateValue] = useState(interestRate);
  const { dispatch } = useContext(CartContext);

  const updateFeesNumber = () => {
    dispatch({ type: "SET_FEES", payload: { fees: feesNumberValue } });
  }

  const updateInterestRate = () => {
    dispatch({ type: "SET_INTEREST_RATE", payload: { interestRate: interestRateValue } });
  }

  let feesData: JSX.Element;
  let feesDataText: string;

  if (cardType === "mastercard") {
    let feeValues = getDecreasingValues(feesNumber, interestRate, totalAmount);
    feesData = (
      <View>
        <Text style={[styles.redText, styles.feeValue]}>
          {" "}
          <Text style={styles.small}>Min. </Text> {feeValues[0]}
        </Text>
        <Text style={[styles.redText, styles.feeValue]}>
          {" "}
          <Text style={styles.small}>Max. </Text>
          {feeValues[1]}
        </Text>
      </View>
    );

    feesDataText = feeValues[0] + " - " + feeValues[1];
  } else {
    let feeValue = getAnnuityValue(feesNumber, interestRate, totalAmount);
    feesData = <Text style={[styles.redText, styles.feeValue]}>{feeValue}</Text>;

    feesDataText = feeValue;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Con tu tarjeta MasterCard...</Text>
      <View style={styles.inputDataContainer}>
        <View style={[styles.fees, styles.inputContainer]}>
          <Text style={styles.inputText}>Cuotas </Text>
          <View style={styles.inputValueContainer}>
            <TextInput
              style={[styles.redText, styles.inputValueText]}
              keyboardType='numeric'
              value={feesNumberValue.toString()}
              onChangeText={value => setFeesNumberValue(value)}
              onEndEditing={() => updateFeesNumber()}
            />
          </View>
        </View>
        <View style={[styles.interest, styles.inputContainer]}>
          <Text style={styles.inputText}>Interés Mensual </Text>
          <View style={styles.inputValueContainer}>
            <TextInput
              style={[styles.redText, styles.inputValueText]}
              keyboardType='numeric'
              value={interestRateValue.toString()}
              onChangeText={value => setInterestRateValue(value)}
              onEndEditing={() => updateInterestRate()}
            />
          </View>
        </View>
      </View>
      <Text style={styles.topText}>¡Edita las cuotas o el interés si lo deseas probar!</Text>
      <View style={styles.summary}>
        <View style={styles.creditCard}></View>
        <View>
          <Text style={styles.redText}>Paga {feesNumber} cuotas mensuales de...</Text>
          {feesData}
          <View style={styles.feeDetailsContainer}>
            <View>
              <Text style={styles.bold}>Detalle</Text>
              <Text style={styles.small}>Cuota Mensual</Text>
              <Text style={styles.small}>Cuota de manejo</Text>
            </View>
            <View>
              <Text style={styles.bold}>Costo</Text>
              <Text style={styles.small}>{feesDataText}</Text>
              <Text style={styles.small}> {handlingFee}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CostSummary;
