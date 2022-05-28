import { Text, View } from "_components/Themed";

import { styles } from "../styles";

interface TotalViewProps {
  total: number;
}

const TotalView = (props: TotalViewProps) => {
  const { total } = props;
  let pesosCOP = Intl.NumberFormat("co-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <View style={styles.totalContainer}>
      <View style={styles.totalView}>
        <Text style={[styles.fontSizeLarge, styles.colorWhite]}>Total:</Text>
        <Text style={[styles.fontSizeLarge, styles.colorWhite, styles.bold, { fontSize: 18 }]}>{pesosCOP.format(total)}</Text>
      </View>
    </View>
  );
};

export default TotalView;
