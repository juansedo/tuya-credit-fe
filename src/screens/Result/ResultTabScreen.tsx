import { useContext } from "react";
import { ScrollView } from "react-native";
import AmortizationTable from "_components/results/organisms/AmortizationTable";
import CostSummary from "_components/results/organisms/CostSummary";
import { CartContext } from "_utils/cart-context";

import { styles } from "./styles";

const ResultTabScreen = () => {
  const { state } = useContext(CartContext);
  const totalPrice = state.cartItems.reduce((total, product) => {
    const productPrice = parseInt(product.amount) * parseInt(product.product.creditCardPrice ?? product.product.originalPrice);
    return total + productPrice
  }, 0)

  let cardType = "mastercard";

  return (
    <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
      <CostSummary
        totalAmount={totalPrice}
        feesNumber={state.fees}
        handlingFee={9000}
        interestRate={state.interestRate}
        cardType={cardType}
      />
      <AmortizationTable
        totalAmount={totalPrice}
        feesNumber={state.fees}
        handlingFee={9000}
        interestRate={state.interestRate}
        cardType={cardType}
      />
    </ScrollView>
  );
};

export default ResultTabScreen;
