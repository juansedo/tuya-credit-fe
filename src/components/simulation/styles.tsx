import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    height: 130,
    width: "100%",
  },
  customView: {
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    height: "100%",
    resizeMode: "contain",
  },
  cuantityButtons: {
    backgroundColor: AppColors.redWineColor,
    paddingHorizontal: 15,
    height: 25,
    lineHeight: 0,
    margin: 0,
  },
  cuantityButtonsTitle: {
    fontSize: 15,
  },
  cuantityView: {
    width: "50%",
    height: 25,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: AppColors.redWineColor,
    justifyContent: "center",
    borderRadius: 5,
  },
  totalItemsText: {
    textAlign: "center",
    color: AppColors.redWineColor,
    fontWeight: "bold",
    textAlignVertical: "center",
    width: 50,
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
  },
});
