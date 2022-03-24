import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import AmortizationTable from '../../components/results/amortizationTable/';
import CostSummary from '../../components/results/costSummary';
import { useContext } from 'react';
import { CartContext } from '../../utils/cart-context';


export default function ResultTabScreen() {
  const { state } = useContext(CartContext);
  let total = 0
  state.simulationItems.forEach(item => {
    total += item.amount * item.product.value
  });

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
      <CostSummary totalAmount={total} feesNumber={12} handlingFee={9000} interestRate={0.02055} cardType={"visa"} />
      <AmortizationTable totalAmount={total} feesNumber={12} handlingFee={9000} interestRate={0.02055} cardType={'visa'} />
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
