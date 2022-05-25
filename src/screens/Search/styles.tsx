import { StyleSheet } from "react-native";

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
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
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
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
