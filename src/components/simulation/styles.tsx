import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  colorWhite: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
  },
  bold: {
    fontFamily: "Poppins-SemiBold",
  },
  fontSizeSmall: {
    fontSize: 12,
  },
  fontSizeLarge: {
    fontSize: 16,
  },
  mainContainer: {
    flexGrow: 2,
  },
  mainView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 120,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  imageContainer: {
    maxHeight: 130,
    flexGrow: 1,
  },
  image: {
    aspectRatio: 1,
    height: "100%",
    resizeMode: "contain",
  },
  titleContainer: {
    width: 225,
  },
  quantityButtons: {
    backgroundColor: AppColors.redWineColor,
    paddingHorizontal: 28,
  },
  quantityContainer: {
    width: "80%",
    alignSelf: "flex-end",
  },
  quantityView: {
    width: "100%",
    height: 25,
    display: "flex",
    flexDirection: "row",
    borderColor: AppColors.redWineColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  totalItemsText: {
    textAlign: "center",
    color: AppColors.redWineColor,
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  subtotalContainer: {
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    color: "#FFF",
  },
  subtotalView: {
    marginVertical: 5,
    height: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: AppColors.redWineColor,
    alignItems: "center",
    borderRadius: 3,
    paddingHorizontal: 10,
  },
  totalContainer: {
    alignSelf: "flex-end",
  },
  totalView: {
    marginHorizontal: 10,
    paddingLeft: 20,
    width: 300,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: AppColors.redWineColor,
    alignItems: "center",
    borderRadius: 4,
  },

  financeButton: {
    padding: 5,
    backgroundColor: AppColors.redColor,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  financeText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  searchButton: {
    backgroundColor: AppColors.redWineColor,
    width: 100,
    padding: 5,
  },
  searchText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },

  modalWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  searchOptionsContainer: {
    padding: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
    backgroundColor: AppColors.redColor,
  },
  optionButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 30,
    width: 170,
    backgroundColor: AppColors.redWineColor,
  },
});
