import { StyleSheet, ScrollView } from 'react-native';
import AmortizationTable from './results/amortizationTable';
import CostSummary from './results/costSummary';


export default function ResultTabScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
      <CostSummary totalAmount={1200000} feesNumber={32} handlingFee={9000} interestRate={0.02055} cardType={"visa"} />
      <AmortizationTable totalAmount={1200000} feesNumber={12} handlingFee={0} interestRate={0.02055} cardType={'visa'} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
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
