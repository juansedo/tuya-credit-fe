import { useContext } from "react";
import { ScrollView } from "react-native";
import AmortizationTable from "_components/results/organisms/AmortizationTable";
import CostSummary from "_components/results/organisms/CostSummary";
import { CartContext } from "_utils/cart-context";

import { styles } from "./styles";

const ResultTabScreen = () => {
  const { state } = useContext(CartContext);
  let total = 0;
  state.simulationItems.forEach((item: any) => {
    total += item.amount * item.product.value;
  });

  let cardType = "mastercard";

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
      <CostSummary totalAmount={total} feesNumber={12} handlingFee={9000} interestRate={0.02055} cardType={cardType} />
      <AmortizationTable
        totalAmount={total}
        feesNumber={12}
        handlingFee={9000}
        interestRate={0.02055}
        cardType={cardType}
      />
    </ScrollView>
  );
};

export default ResultTabScreen;
