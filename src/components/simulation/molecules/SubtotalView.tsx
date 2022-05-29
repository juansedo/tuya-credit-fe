import { Text, View } from "_components/Themed";
import { ProductItem } from "_types";

import { styles } from "../styles";

interface SubtotalViewProps {
  item: ProductItem;
}

const SubtotalView = (props: SubtotalViewProps) => {
  const { item: { product, amount } } = props;
  const price = Number(product.creditCardPrice ?? product.originalPrice) * amount;
  let pesosCOP = Intl.NumberFormat("co-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <View style={styles.subtotalView}>
      <Text style={[styles.colorWhite]}>Subtotal: </Text>
      <Text style={[styles.fontSizeLarge, styles.colorWhite, styles.bold]}>
        {pesosCOP.format(price)}
      </Text>
    </View>
  );
};

export default SubtotalView;
