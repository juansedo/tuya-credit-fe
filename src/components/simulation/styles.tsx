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
});
