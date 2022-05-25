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
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    top: 0,
    bottom: 0,
    margin: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  modalView: {
    margin: 20,
    backgroundColor: AppColors.redColor,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    backgroundColor: AppColors.redColor,
  },
  optionButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 150,
    margin: 10,
    backgroundColor: AppColors.redWineColor,
  },
  cardButton: {
    alignItems: "center",
    flexDirection: 'row',
    width: 320,
    margin: 10,
    paddingVertical: 7,
  },
  infoCardStyle: {
    alignItems: "center",
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 20,
    paddingVertical: 10,
  },
  closeButton: {
    width: 100,
    backgroundColor: AppColors.redWineColor,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
  }
});
