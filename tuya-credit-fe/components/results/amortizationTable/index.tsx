import { View, Text } from 'react-native'
import React from 'react'
import FeesTable from './FeesTable'
import { getDecreasingFees, getAnnuityFees } from '../../../utils/helpers'
import { fee } from '../../../types'

type Props = {
    totalAmount: number,
    feesNumber: number,
    handlingFee: number,
    interestRate: number,
    cardType: string
}

const AmortizationTable = ({ totalAmount, feesNumber, handlingFee, interestRate, cardType }: Props) => {
    let fees: Array<fee> = [];
    if (cardType === "mastercard") {
        fees = getDecreasingFees(feesNumber, interestRate, totalAmount, handlingFee)
    }
    else {
        fees = getAnnuityFees(feesNumber, interestRate, totalAmount, handlingFee)
    }
    return (
        <FeesTable fees={fees} />
    )
}

export default AmortizationTable