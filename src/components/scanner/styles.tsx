import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  image: {
    alignSelf: "center",
    width: 250,
    maxHeight: 250,
    resizeMode: "contain",
    flex: 1,
  },
  productName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  productDescription: {
    textAlign: "center",
    opacity: 0.8,
  },
});
