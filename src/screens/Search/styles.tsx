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
  SearchBar: {
    paddingHorizontal: 10,
    borderColor: AppColors.redColor,
    borderWidth: 2,
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  SearchBarContainer: {
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  discountButton: {
    width: "20%",
    padding: 1,
    alignSelf: "center",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  discountButtonActive: {
    backgroundColor: AppColors.redColor,
  },
  discountButtonText: {
    color: AppColors.redColor,
  },
  discountButtonTextActive: {
    color: "white",
  },
});
