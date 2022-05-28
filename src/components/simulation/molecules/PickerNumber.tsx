import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "../styles";

interface PickerNumberProps {
  selectedValue: number;
  setSelectedValue: (visible: number) => void;
  setModalVisible: (visible: boolean) => void;
}

const PickerNumber = (props: PickerNumberProps) => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text style={[styles.colorWhite, styles.bold]}>Cuotas</Text>
      <Picker
        selectedValue={props.selectedValue}
        onValueChange={(itemValue, _itemIndex) => props.setSelectedValue(itemValue)}
        style={{ width: 90, backgroundColor: "white", marginBottom: 10 }}
        itemStyle={{ height: 50 }}
      >
        {Array(96)
          .fill(1)
          .map((_, i) => (
            <Picker.Item label={`${i + 1}`} value={i + 1} color="black" />
          ))}
      </Picker>
    </View>
  );
};

export default PickerNumber;
