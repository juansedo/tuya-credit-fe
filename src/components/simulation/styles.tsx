import { StyleSheet } from "react-native";
import { AppColors } from "../../constants/Colors";

export const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    minHeight: 120,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  mainContainer: {
    flexGrow: 2,
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
    width: 50,
    textAlign: "center",
    color: AppColors.redWineColor,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
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
