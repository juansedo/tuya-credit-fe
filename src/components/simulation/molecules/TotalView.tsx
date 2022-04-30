import { Text, View } from "_components/Themed";

import { styles } from "../styles";

const TotalView = (props: { value: string }) => {
    return (
        <View style={styles.subtotalView}>
            <Text style={styles.whiteColor}>
                Total:
            </Text>
            <Text style={[styles.boldText, styles.whiteColor]}>
                {props.value} COP
            </Text>
        </View>
    )
}

export default TotalView;
