import React, { useContext, useEffect, useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
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
  let { totalAmount, cardType } = props;
  const { state, dispatch } = useContext(CartContext);
  const feesNumber = state.fees;
  const handlingFee = state.creditCard.fee ?? 0;
  const interestRate = state.interestRate ?? (parseFloat(state.creditCard.interestRate) / 100).toFixed(3);
  const [feesNumberValue, setFeesNumberValue] = useState(feesNumber);
  const [interestRateValue, setInterestRateValue] = useState(interestRate);

  useEffect(() => {
    setFeesNumberValue(feesNumber);
    setInterestRateValue(interestRate ?? 0);
  }, [feesNumber, interestRate]);

  const updateFeesNumber = () => {
    if (!isNaN(parseInt(feesNumberValue))) {
      if (parseInt(feesNumberValue) > 92) {
        setFeesNumberValue("92");
        dispatch({ type: "SET_FEES", payload: { fees: "92" } });
      }
      else {
        dispatch({ type: "SET_FEES", payload: { fees: feesNumberValue } });
      }
    }
    else {
      setFeesNumberValue(state.fees);
    }
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
      <Text style={styles.title}>Con tu tarjeta {state.creditCard.type ?? ''}...</Text>
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
        <Image style={styles.creditCard} source={require('_assets/images/yellow.png')} />

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
