import { StyleSheet } from "react-native";
import { AppColors } from "_constants/Colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    marginBottom: 20,
  },
  fees: {
    backgroundColor: AppColors.redColor,
    flex: 2,
    color: "#fff",
  },
  interest: {
    backgroundColor: AppColors.orangeColor,
    flex: 3,
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  inputDataContainer: {
    flexDirection: "row",
    width: "100%",
  },
  inputText: {
    color: "#fff",
  },
  inputValueContainer: {
    backgroundColor: "#fff",
    color: "#fff",
    width: 90,
    marginVertical: 2,
  },
  redText: {
    color: AppColors.redColor,
  },
  orangeText: {
    color: AppColors.orangeColor,
  },
  inputValueText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "700",
  },
  feeDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  creditCard: {
    width: "30%",
    backgroundColor: "red",
    marginRight: 15,
    height: 100,
  },
  summary: {
    flexDirection: "row",
  },
  feeValue: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  topText: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  small: {
    fontSize: 12,
  },
});
