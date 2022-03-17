import { View, Text } from 'react-native'
import React from 'react'
import FeesTable from './FeesTable'
import { getDecreasingFees } from '../../../utils/helpers'

type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number
}

const AmortizationTable = ({ totalAmount, feesNumber, handlingFee, interestRate }: Props) => {

    const fees = getDecreasingFees(feesNumber, interestRate, totalAmount, handlingFee)

    return (
        <FeesTable fees={fees} />
    )
}

export default AmortizationTable