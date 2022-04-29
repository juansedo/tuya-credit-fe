import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row } from "react-native-table-component";
import TableRow from "_components/results/molecules/TableRow";
import { AppColors } from "_constants/Colors";
import { getDecreasingFees, getAnnuityFees, getDecreasingTotal, getAnnuityTotal } from "_utils/helpers";
import { fee } from "_types";

type ResultsAmortizationTableProps = {
  totalAmount: number;
  feesNumber: number;
  handlingFee: number;
  interestRate: number;
  cardType: string;
};

const AmortizationTable = (props: ResultsAmortizationTableProps) => {
  const { totalAmount, feesNumber, handlingFee, interestRate, cardType } = props;

  let fees: Array<fee> = [];
  let total: string = "";
  if (cardType === "mastercard") {
    fees = getDecreasingFees(feesNumber, interestRate, totalAmount, handlingFee);
    total = getDecreasingTotal(feesNumber, interestRate, totalAmount, handlingFee);
  } else {
    fees = getAnnuityFees(feesNumber, interestRate, totalAmount, handlingFee);
    total = getAnnuityTotal(feesNumber, interestRate, totalAmount, handlingFee);
  }

  const tableRows = fees.map((fee, index) => <TableRow key={index} fee={fee} />);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <Text style={styles.text}>El total que pagas por tu compra es de </Text>
          <Text style={[styles.text, styles.total, styles.bold]}>{total}</Text>
          <Text style={styles.text}>
            {" "}
            <Text style={styles.bold}>No ahorras nada</Text> pero con cuotas todo es mas fácil de pagar
          </Text>
        </View>
        <Table borderStyle={{ borderWidth: 0, borderColor: "#c8e1ff" }}>
          <Row
            style={StyleSheet.flatten(styles.head)}
            textStyle={StyleSheet.flatten(styles.columnTitles)}
            data={["#", "Fecha", "Cuota", "Acciones"]}
            flexArr={[1, 2, 2, 2]}
          ></Row>
          {tableRows}
        </Table>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 20,
  },
  head: {
    height: 40,
    backgroundColor: AppColors.redColor,
  },
  columnTitles: {
    margin: 6,
    textAlign: "center",
    color: "white",
  },
  title: {
    margin: 6,
    textAlign: "center",
    color: "black",
  },
  text: {
    margin: 3,
    textAlign: "center",
    fontSize: 14,
    color: "black",
  },
  total: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
  totalContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default AmortizationTable;
