import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Table, Row } from 'react-native-table-component'
import TableRow from './tableRow'
import { AppColors } from '../../../constants/Colors'
import { fee } from '../../../types';

const FeesTable = ({ fees }: { fees: Array<fee> }) => {

    const tableRows = fees.map((fee, index) => <TableRow key={index} fee={fee} />)

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 0, borderColor: '#c8e1ff' }}>
                    <Row style={StyleSheet.flatten(styles.head)} textStyle={StyleSheet.flatten(styles.text)} data={['#', 'Fecha', 'Cuota', 'Acciones']} flexArr={[1, 2, 2, 2]}></Row>
                    {tableRows}
                </Table>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', width: '100%', marginBottom: 20 },
    head: { height: 40, backgroundColor: AppColors.redColor },
    text: { margin: 6, textAlign: 'center', color: 'black' },
    title: { margin: 6, textAlign: 'center', color: 'black' }
});

export default FeesTable