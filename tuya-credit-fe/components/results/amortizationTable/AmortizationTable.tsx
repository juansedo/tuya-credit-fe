import { ScrollView, Text, StyleSheet, ViewStyle, View } from 'react-native'
import React from 'react'
import { Table, TableWrapper, Rows, Row } from 'react-native-table-component'
import TableRow from './tableRow'
import { useState } from 'react';
import { AppColors } from '../../../constants/Colors'



type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number
}

const AmortizationTable = ({ totalAmount, feesNumber, handlingFee, interestRate }: Props) => {

    const amortizationFee: number = totalAmount / feesNumber;
    const [collapsed, setCollapsed] = useState(false);

    let fees: Array<number> = [amortizationFee, amortizationFee + totalAmount * interestRate + (totalAmount - amortizationFee) * interestRate]
    for (let i = 2; i < feesNumber; i++) {
        fees.push(amortizationFee + (totalAmount - amortizationFee * i) * interestRate);
    }

    let display: ViewStyle = collapsed ? styles.hide : styles.show;

    const buyMonth: Date = new Date();
    const tableRows = fees.map((fee, index) => {
        buyMonth.setMonth(buyMonth.getMonth() + 1)
        return (
            <TableRow
                index={index + 1}
                date={buyMonth.toLocaleDateString('es_ES')}
                fee={fee}
                key={index}
                amortizationFee={amortizationFee}
                totalAmount={totalAmount}
            />
        )
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={() => setCollapsed(!collapsed)}>Detalles</Text>
            <View style={[display, styles.container]}>
                <Table borderStyle={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                    <Row style={styles.head} textStyle={styles.text} data={['#', 'Fecha', 'Cuota', 'Acciones']} flexArr={[1, 2, 2, 2]}></Row>
                    {tableRows}
                </Table>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    show: { display: 'flex' },
    hide: { display: 'flex' },
    container: { flex: 1, backgroundColor: '#fff', width: '100%', marginBottom: 20 },
    head: { height: 40, backgroundColor: AppColors.redColor },
    text: { margin: 6, textAlign: 'center', color: 'black' },
    title: { margin: 6, textAlign: 'center', color: 'black' }
});

export default AmortizationTable