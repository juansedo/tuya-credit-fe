import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    fontFamily: "Poppins-Regular",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  fontRed: {
    color: "red",
    fontWeight: "bold",
    paddingTop: 5,
  },
  buttonContainer: {
    width: 130,
    height: 120,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  title: {
    paddingTop: 30,
    paddingHorizontal: 30,
    fontSize: 40,
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  content: {
    paddingVertical: 40,
    paddingHorizontal: 40,
    textAlign: "justify",
    fontFamily: "Poppins-Regular",
  },
  bold: {
    fontFamily: "Poppins-Bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
