import { fee } from "../types";

export const currencyFormat = (num: Number) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const getAnnuityFees = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
    handlingFee: number
) => {
    let annuity = totalAmount *
        ((Math.pow(1 + interestRate, feesNumber) * interestRate) /
            (Math.pow(1 + interestRate, feesNumber) - 1));

    const buyMonth: Date = new Date();
    const buyFee: fee = {
        date: buyMonth.toDateString(),
        value: currencyFormat(0),
        amortizationValue: currencyFormat(0),
        balance: currencyFormat(totalAmount),
        number: 0,
        handlingFeeValue: currencyFormat(0),
    };

    const fees: Array<fee> = [buyFee];

    for (let i = 1; i <= feesNumber; i++) {
        buyMonth.setMonth(buyMonth.getMonth() + 1);
        fees.push({
            date: buyMonth.toDateString(),
            value: currencyFormat(annuity),
            amortizationValue: currencyFormat(annuity),
            interestValue: currencyFormat(0),
            balance: currencyFormat(
                annuity *
                ((Math.pow(1 + interestRate, feesNumber - i) - 1) /
                    (Math.pow(1 + interestRate, feesNumber - i) * interestRate))
            ),
            number: i,
            handlingFeeValue: currencyFormat(handlingFee),
        });
    }

    return fees;
};

export const getDecreasingFees = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
    handlingFee: number
) => {
    const amortizationFee: number = totalAmount / feesNumber;
    const buyMonth: Date = new Date();

    const buyFee: fee = {
        date: buyMonth.toDateString(),
        value: currencyFormat(0),
        amortizationValue: currencyFormat(0),
        balance: currencyFormat(totalAmount),
        number: 0,
        handlingFeeValue: currencyFormat(0),
    };

    buyMonth.setMonth(buyMonth.getMonth() + 1);

    const firstMonth: fee = {
        date: buyMonth.toDateString(),
        value: currencyFormat(amortizationFee),
        amortizationValue: currencyFormat(amortizationFee),
        interestValue: currencyFormat(0),
        balance: currencyFormat(totalAmount - amortizationFee),
        number: 1,
        handlingFeeValue: currencyFormat(handlingFee),
    };

    const fees: Array<fee> = [buyFee, firstMonth];

    if (feesNumber < 2) return fees;

    const secondMonthValue =
        amortizationFee +
        totalAmount * interestRate +
        (totalAmount - amortizationFee) * interestRate;
    const secondMonth: fee = {
        date: buyMonth.toDateString(),
        value: currencyFormat(secondMonthValue),
        amortizationValue: currencyFormat(amortizationFee),
        interestValue: currencyFormat(secondMonthValue - amortizationFee),
        balance: currencyFormat(totalAmount - amortizationFee * 2),
        number: 2,
        handlingFeeValue: currencyFormat(handlingFee),
    };

    fees.push(secondMonth);

    for (let i = 3; i <= feesNumber; i++) {
        buyMonth.setMonth(buyMonth.getMonth() + 1);
        let feeValue =
            amortizationFee +
            (totalAmount - amortizationFee * (i - 1)) * interestRate;
        fees.push({
            date: buyMonth.toDateString(),
            value: currencyFormat(feeValue),
            amortizationValue: currencyFormat(amortizationFee),
            interestValue: currencyFormat(feeValue - amortizationFee),
            balance: currencyFormat(totalAmount - amortizationFee * i),
            number: i,
            handlingFeeValue: currencyFormat(handlingFee),
        });
    }

    return fees;
};

export const getAnnuityValue = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
) => {
    let annuity =
        totalAmount *
        ((Math.pow(1 + interestRate, feesNumber) * interestRate) /
            (Math.pow(1 + interestRate, feesNumber) - 1));

    return currencyFormat(annuity);
}

export const getDecreasingValues = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
) => {
    const minium: number = totalAmount / feesNumber;
    let maxium: number;
    if (feesNumber > 1) {
        maxium = minium +
            totalAmount * interestRate +
            (totalAmount - minium) * interestRate;
    }
    else {
        maxium = minium;
    }

    return [currencyFormat(minium), currencyFormat(maxium)];
}

export const getAnnuityTotal = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
    handlingFee: number
) => {
    const annuity = totalAmount *
        ((Math.pow(1 + interestRate, feesNumber) * interestRate) /
            (Math.pow(1 + interestRate, feesNumber) - 1));

    const total = annuity * feesNumber + handlingFee * feesNumber;

    return currencyFormat(total);
}

export const getDecreasingTotal = (
    feesNumber: number,
    interestRate: number,
    totalAmount: number,
    handlingFee: number
) => {
    const amortizationFee: number = totalAmount / feesNumber;
    let total = amortizationFee;

    if (feesNumber < 2) return currencyFormat(total);

    total += amortizationFee +
        totalAmount * interestRate +
        (totalAmount - amortizationFee) * interestRate;

    for (let i = 3; i <= feesNumber; i++) {
        let feeValue =
            amortizationFee +
            (totalAmount - amortizationFee * (i - 1)) * interestRate;

        total += feeValue;
    }

    return currencyFormat(total);
}