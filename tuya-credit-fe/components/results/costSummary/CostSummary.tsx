import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number
}

const CostSummary = (props: Props) => {
    return (
        <View>
            <View>
                <View></View>
                <View></View>
            </View>
            <Text>CostSummary</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    show: { display: 'flex' },
    hide: { height: 0 },
    container: { flex: 1, backgroundColor: '#fff', width: '100%', marginBottom: 20 },
    head: { height: 40, backgroundColor: '#ED1C29' },
    text: { margin: 6, textAlign: 'center', color: 'black' },
    title: { margin: 6, textAlign: 'center', color: 'black' }
});

export default CostSummary