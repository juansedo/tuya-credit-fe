import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontRed: {
    color: 'red',
    fontWeight: 'bold',
    paddingTop: 5,
  },
  buttonContainer: {
    width: 130,
    height: 120,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "Poppins-SemiBold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
