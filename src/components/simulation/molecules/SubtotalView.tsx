import { Text, View } from "_components/Themed";

import { styles } from "../styles";

const SubtotalView = (props: { value: number; totalItems: number }) => {
  return (
    <View style={styles.subtotalView}>
      <Text style={styles.whiteColor}>Subtotal:</Text>
      <Text style={[styles.boldText, styles.whiteColor]}>{props.value * props.totalItems} COP</Text>
    </View>
  );
};

export default SubtotalView;
