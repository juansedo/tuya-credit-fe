import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { TableWrapper, Cell } from 'react-native-table-component'
import { AppColors } from '../../../../constants/Colors'
import { fee } from '../../../../types'

const Details = (fee: fee) => (

    <TouchableOpacity
        onPress={() => Alert.alert(
            "Detalles de la cuota",
            `
Numero de cuota: ${fee.number}\n
Fecha de pago: ${fee.date}\n
Valor base: ${fee.amortizationValue}\n
intereses: ${fee.interestValue}\n
Valor total: ${fee.value}\n
saldo pendiente: ${fee.balance}
            `,
            [
                { text: "cerrar", onPress: () => console.log("OK Pressed") }
            ]
        )}>
        <Image style={styles.img} source={require('../../../../assets/images/document.png')} />
    </TouchableOpacity>
);

const TableRow = ({ fee }: { fee: fee }) => {

    return (
        <TableWrapper key={fee.number} style={styles.row}>
            <Cell key={0} data={fee.number} textStyle={styles.text} flex={1} />
            <Cell key={1} data={fee.date} textStyle={styles.text} flex={2} />
            <Cell key={2} data={fee.value} textStyle={styles.text} flex={2} />
            <Cell key={3} data={Details(fee)} textStyle={styles.text} flex={2} />
        </TableWrapper>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', width: '100%' },
    text: { margin: 6, textAlign: 'center', paddingTop: 9, paddingBottom: 9, fontSize: 14 },
    row: { flexDirection: 'row' },
    btn: { width: 60, backgroundColor: AppColors.redColor, borderRadius: 2, padding: 1, alignSelf: 'center' },
    btnText: { textAlign: 'center', color: '#fff' },
    img: { width: 35, height: 35, marginLeft: 'auto', marginRight: 'auto', tintColor: AppColors.redColor }
});

export default TableRow