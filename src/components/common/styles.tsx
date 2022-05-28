import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  quickAccessButtonFont: {
    paddingTop: 15,
    paddingHorizontal: 10,
    color: "red",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
  quickAccessButtonContainer: {
    width: 130,
    height: 140,
    backgroundColor: "#FFFFFF",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOpacity: 0.4,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
