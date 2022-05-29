import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { styles } from "../styles";

interface PickerNumberProps {
  value: number;
  onChange: (value: number) => void;
}

const PickerNumber = (props: PickerNumberProps) => {
  const { value, onChange } = props;

  return (
    <View style={{ alignItems: "center" }}>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        style={{ width: 150 }}
        itemStyle={{ height: 150, fontFamily: "Poppins-SemiBold" }}
      >
        {Array(92).fill(1).map((_, i) => (
          <Picker.Item key={i} label={`${i + 1}`} value={i + 1} color="black" />
        ))}
      </Picker>
    </View>
  );
};

export default PickerNumber;
