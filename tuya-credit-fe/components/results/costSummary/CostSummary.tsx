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
            <Text>Con tu tarjeta MasterCard</Text>
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
            <Text>¡Edita las cuotas o el interés si lo deseas probar!</Text>
            <View>
                <Text style={styles.redText}>Paga {feesNumber} cuotas mensuales de...</Text>
                <Text style={styles.redText}>175.973,53</Text>
                <View style={styles.feeDetailsContainer}>
                    <View>
                        <Text>Detalle</Text>
                        <Text>Cuota Mensual</Text>
                        <Text>Cuota de manejo</Text>
                    </View>
                    <View>
                        <Text>Costo</Text>
                        <Text> 162000</Text>
                        <Text> 13000</Text>
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
    inputValueText: { fontSize: 17, textAlign: 'center' },
    feeDetailsContainer: { flexDirection: 'row', justifyContent: 'space-around' }
});

export default CostSummary