import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import AmortizationTable from '../../components/results/amortizationTable/AmortizationTable';
import CostSummary from '../../components/results/costSummary/CostSummary';


export default function ResultTabScreen() {
  return (
    <View style={styles.container}>
      <CostSummary totalAmount={1200000} feesNumber={32} handlingFee={9000} interestRate={0.02055} />
      <AmortizationTable totalAmount={1200000} feesNumber={32} handlingFee={9000} interestRate={0.02055} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
