import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TableWrapper, Cell } from "react-native-table-component";
import { AppColors } from "_constants/Colors";
import { fee } from "_types";

import Details from "./Details";

interface ResultsTableRowProps {
  fee: fee,
}

const TableRow = (props: ResultsTableRowProps) => {
  const { fee } = props;
  return (
    <TableWrapper key={fee.number} style={styles.row}>
      <Cell key={0} data={fee.number} textStyle={styles.text} flex={1} />
      <Cell key={1} data={fee.date} textStyle={styles.text} flex={2} />
      <Cell key={2} data={fee.value} textStyle={styles.text} flex={2} />
      <Cell key={3} data={Details(fee)} textStyle={styles.text} flex={2} />
    </TableWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    width: "100%",
  },
  text: {
    margin: 6,
    textAlign: "center",
    paddingTop: 9,
    paddingBottom: 9,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
  },
  btn: {
    width: 60,
    backgroundColor: AppColors.redColor,
    borderRadius: 2,
    padding: 1,
    alignSelf: "center",
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
  img: {
    width: 35,
    height: 35,
    marginLeft: "auto",
    marginRight: "auto",
    tintColor: AppColors.redColor,
  },
});

export default TableRow;
