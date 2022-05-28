import { TouchableOpacity, Image, Text } from "react-native";

import { styles } from "../styles";

interface QuickAccessButtonProps {
  onPress: () => void;
  image: any;
  text: string;
}

const QuickAccessButton = (props: QuickAccessButtonProps) => {
  const { onPress, image, text } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.quickAccessButtonContainer}
    >
      <Image source={image} />
      <Text style={styles.quickAccessButtonFont}>{text}</Text>
    </TouchableOpacity>
  );
};

export default QuickAccessButton;
