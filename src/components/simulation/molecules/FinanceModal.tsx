import { useContext, useState } from "react";
import { Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { CreditCardDTO } from "_types";
import { CartContext } from "_utils/cart-context";
import { styles } from "../styles";
import CardItem from "./CardItem";
import PickerNumber from "./PickerNumber";

interface FinanceModalProps {
  open: boolean;
  cards: CreditCardDTO[];
  onAccept: () => void;
  onClose: () => void;
}

const FinanceModal = (props: FinanceModalProps) => {
  const { open, cards, onAccept, onClose } = props;
  const [selectedValue, setSelectedValue] = useState(1);
  const [selectedCard, setSelectedCard] = useState<number>(null);
  const { dispatch } = useContext(CartContext);

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={open}>
        <TouchableWithoutFeedback onPressIn={onClose}>
          <View style={styles.modalWrapper}>
            <View style={styles.cardOptionsContainer}>
              <Text style={[styles.cardOptionsTitle, styles.colorWhite, styles.bold]}>
                Escoje una tarjeta
              </Text>
              <View style={styles.cardsContainer}>
                {cards.map((card, key) => <CardItem card={card} key={key} isSelected={selectedCard === key} onClick={() => setSelectedCard(key)} />)}
              </View>
              {/* <PickerNumber setModalVisible={open} selectedValue={selectedValue} setSelectedValue={setSelectedValue} /> */}
              <TouchableOpacity style={styles.cardOptionsAcceptButton} onPress={onAccept}>
                <Text style={[styles.colorWhite, styles.textAlignCenter]}>Aceptar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default FinanceModal;
