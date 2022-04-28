import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React from 'react'
import { AppColors } from '../../../constants/Colors'
import { getAnnuityValue, getDecreasingValues } from '../../../utils/helpers';

type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number,
    cardType: string
}

const CostSummary = ({ totalAmount, feesNumber, handlingFee, interestRate, cardType }: Props) => {

    let feesData: JSX.Element;
    let feesDataText: string;

    if (cardType === "mastercard") {
        let feeValues = getDecreasingValues(feesNumber, interestRate, totalAmount);
        feesData = <View>
            <Text style={[styles.redText, styles.feeValue]}> <Text style={styles.small}>Max. </Text> {feeValues[0]}</Text>
            <Text style={[styles.redText, styles.feeValue]}> <Text style={styles.small}>Min. </Text>{feeValues[1]}</Text>
        </View>;

        feesDataText = feeValues[0] + " - " + feeValues[1];
    }
    else {
        let feeValue = getAnnuityValue(feesNumber, interestRate, totalAmount);
        feesData = <Text style={[styles.redText, styles.feeValue]}>{feeValue}</Text>;

        feesDataText = feeValue
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Con tu tarjeta MasterCard...</Text>
            <View style={styles.inputDataContainer}>
                <View style={[styles.fees, styles.inputContainer]}>
                    <Text style={styles.inputText} >Cuotas </Text>
                    <View style={styles.inputValueContainer}>
                        <Text style={[styles.redText, styles.inputValueText]} >{feesNumber}</Text>
                    </View>
                </View>
                <View style={[styles.interest, styles.inputContainer]}>
                    <Text style={styles.inputText} >Interés Mensual </Text>
                    <View style={styles.inputValueContainer}>
                        <Text style={[styles.orangeText, styles.inputValueText]} >{interestRate}</Text>
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
    )
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', width: '100%', marginBottom: 20 },
    fees: { backgroundColor: AppColors.redColor, flex: 2, color: "#fff" },
    interest: { backgroundColor: AppColors.orangeColor, flex: 3 },
    inputContainer: { paddingHorizontal: 10, paddingVertical: 2, flexDirection: 'row', alignItems: 'center' },
    inputDataContainer: { flexDirection: 'row', width: '100%' },
    inputText: { color: '#fff' },
    inputValueContainer: { backgroundColor: '#fff', color: '#fff', width: 90, marginVertical: 2 },
    redText: { color: AppColors.redColor },
    orangeText: { color: AppColors.orangeColor },
    inputValueText: { fontSize: 17, textAlign: 'center', fontWeight: '700' },
    feeDetailsContainer: { flexDirection: 'row', justifyContent: 'space-around' },
    creditCard: { width: '30%', backgroundColor: 'red', marginRight: 15, height: 100 },
    summary: { flexDirection: 'row' },
    feeValue: { fontSize: 20, textAlign: 'center', fontWeight: 'bold' },
    topText: { textAlign: 'center', marginBottom: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    bold: { fontWeight: 'bold' },
    small: { fontSize: 12 }
});

export default CostSummary
