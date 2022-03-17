
import { fee } from '../types'

export const getAnnuityFees = () => {

}

export const currencyFormat = (num: Number) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getDecreasingFees = (feesNumber:number, interestRate:number, totalAmount:number, handlingFee: number) =>{
    
    const amortizationFee: number = totalAmount / feesNumber;
    const buyMonth: Date = new Date();

    const buyFee: fee = {
        date: buyMonth.toLocaleDateString('es_ES'),
        value: '0',
        amortizationValue: '0',
        balance: currencyFormat(totalAmount),
        number : 0,
        handlingFeeValue: '0'
    }

    buyMonth.setMonth(buyMonth.getMonth() + 1);

    const firstMonth: fee = {
        date: buyMonth.toLocaleDateString('es_ES'),
        value: currencyFormat(amortizationFee),
        amortizationValue: currencyFormat(amortizationFee),
        interestValue: currencyFormat(0),
        balance: currencyFormat(totalAmount - amortizationFee),
        number : 1,
        handlingFeeValue: currencyFormat(handlingFee)
    }

    const fees: Array<fee> = [buyFee, firstMonth]

    for (let i = 2; i <= feesNumber; i++) {
        buyMonth.setMonth(buyMonth.getMonth() + 1);
        let feeValue = amortizationFee + (totalAmount - amortizationFee * i) * interestRate;
        fees.push({
            date: buyMonth.toLocaleDateString('es_ES'),
            value: currencyFormat(feeValue),
            amortizationValue: currencyFormat(amortizationFee),
            interestValue: currencyFormat(feeValue - amortizationFee),
            balance: currencyFormat(totalAmount - (amortizationFee * (i - 1))),
            number: i,
            handlingFeeValue: currencyFormat(handlingFee)
        
        });
    }

    return fees;

}