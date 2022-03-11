import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { TableWrapper, Cell } from 'react-native-table-component';

type TableRowProps = {
    index: number,
    date: string,
    fee: number,
    amortizationFee: number,
    totalAmount: number
}

function currencyFormat(num: Number) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const Details = ({ index, date, fee, amortizationFee, totalAmount }: TableRowProps) => (

    <TouchableOpacity
        onPress={() => Alert.alert(
            "Detalles de la cuota",
            `
Numero de cuota: ${index}\n
Fecha de pago: ${date}\n
Valor base: ${currencyFormat(amortizationFee)}\n
intereses: ${currencyFormat(fee - amortizationFee)}\n
Valor total: ${currencyFormat(fee)}\n
saldo pendiente: ${currencyFormat(totalAmount - amortizationFee * index)}
            `,
            [
                { text: "cerrar", onPress: () => console.log("OK Pressed") }
            ]
        )}>
        <Image style={styles.img} source={require('../../../../assets/images/document.png')} />
    </TouchableOpacity>
);

const TableRow = ({ index, date, fee, amortizationFee, totalAmount }: TableRowProps) => {

    return (
        <TableWrapper key={index} style={styles.row}>
            <Cell key={0} data={index} textStyle={styles.text} flex={1} />
            <Cell key={1} data={date} textStyle={styles.text} flex={2} />
            <Cell key={2} data={currencyFormat(fee)} textStyle={styles.text} flex={2} />
            <Cell key={3} data={Details({ index, date, fee, amortizationFee, totalAmount })} textStyle={styles.text} flex={2} />
        </TableWrapper>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width: '100%' },
    text: { margin: 6, textAlign: 'center', paddingTop: 9, paddingBottom: 9, fontSize: 14 },
    row: { flexDirection: 'row' },
    btn: { width: 60, backgroundColor: '#ED1C29', borderRadius: 2, padding: 1, alignSelf: 'center' },
    btnText: { textAlign: 'center', color: '#fff' },
    img: { width: 35, height: 35, marginLeft: 'auto', marginRight: 'auto', tintColor: '#ED1C29' }
});

export default TableRow