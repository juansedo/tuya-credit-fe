import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppColors } from '../../../constants/Colors'
import App from '../../../App'

type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number
}

const CostSummary = ({ totalAmount, feesNumber, handlingFee, interestRate }: Props) => {
    return (
        <View>
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
                    <Text style={[styles.redText, styles.feeValue]}>175.973,53</Text>
                    <View style={styles.feeDetailsContainer}>
                        <View>
                            <Text style={styles.bold}>Detalle</Text>
                            <Text>Cuota Mensual</Text>
                            <Text>Cuota de manejo</Text>
                        </View>
                        <View>
                            <Text style={styles.bold}>Costo</Text>
                            <Text> 162000</Text>
                            <Text> 13000</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', width: '100%', marginBottom: 20 },
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
    creditCard: { width: '30%', backgroundColor: 'red', marginRight: 15 },
    summary: { flexDirection: 'row' },
    feeValue: { fontSize: 20, textAlign: 'right', fontWeight: 'bold' },
    topText: { textAlign: 'center', marginBottom: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
    bold: { fontWeight: 'bold' }
});

export default CostSummary