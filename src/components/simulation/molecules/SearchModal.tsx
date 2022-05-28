import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { AppColors } from "_constants/Colors";

import { styles } from "../styles";

interface SearchModalProps {
  open: boolean;
  onPressSearchByText: () => void;
  onPressSearchByQR: () => void;
  onClose: () => void;
}

const SearchModal = (props: SearchModalProps) => {
  const { open, onPressSearchByText, onPressSearchByQR, onClose } = props;
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={open}>
        <TouchableWithoutFeedback onPressIn={onClose}>
          <View style={styles.modalWrapper}>
            <View style={styles.searchOptionsContainer}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={[styles.optionButton]}
                  onPress={onPressSearchByText}
                >
                  <FontAwesome name="search" size={90} color="white" />
                  <Text style={[styles.fontSizeLarge, styles.colorWhite, { marginTop: 30 }]}>Búsqueda</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.optionButton, { backgroundColor: AppColors.redColor }]}
                  onPress={onPressSearchByQR}
                >
                  <AntDesign name="qrcode" size={90} color="white" />
                  <Text style={[styles.fontSizeLarge, styles.colorWhite, { marginTop: 30 }]}>Leer QR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default SearchModal;
