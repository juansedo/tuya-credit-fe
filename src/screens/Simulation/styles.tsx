import { StyleSheet } from "react-native";
import { AppColors } from "_constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  list: {
    width: "100%",
  },
  whiteColor: {
    color: "#fff",
  },
  subtotalContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  subtotalView: {
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.redWineColor,
    alignItems: "center",
    borderRadius: 3,
    paddingHorizontal: 20,
    marginLeft: 60,
    marginRight: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  financeButton: {
    height: 50,
    backgroundColor: AppColors.redColor,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  financeText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  searchButton: {
    backgroundColor: AppColors.redWineColor,
    width: 100,
  },
  searchText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
});
