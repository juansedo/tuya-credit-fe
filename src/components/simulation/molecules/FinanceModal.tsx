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
  const [selectedCard, setSelectedCard] = useState<number>(-1);
  const { dispatch } = useContext(CartContext);

  const cardList = cards.map((card, key) => (
    <CardItem
      key={key}
      card={card}
      isSelected={selectedCard === key}
      onClick={() => setSelectedCard(key)}
    />
  ));

  const handleAccept = () => {
    dispatch({ type: "SET_CREDIT_CARD", payload: { creditCard: cards[selectedCard] } });
    dispatch({ type: "SET_FEES", payload: { fees: selectedValue } });
    dispatch({ type: "SIMULATE" });
    onAccept();
  };

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={open}>
        <TouchableWithoutFeedback onPressIn={onClose}>
          <View style={styles.modalWrapper}>
            <TouchableWithoutFeedback>
              <View style={styles.cardOptionsContainer}>
                <Text style={[styles.cardOptionsTitle, styles.colorWhite, styles.bold]}>
                  Escoje una tarjeta
                </Text>
                <View style={styles.cardsContainer}>
                  {cardList}
                </View>
                <Text style={[styles.cardOptionsTitle, styles.colorWhite, styles.bold]}>
                  Cuotas
                </Text>
                <View style={styles.cardsContainer}>
                  <PickerNumber
                    value={selectedValue}
                    onChange={(value) => setSelectedValue(value)}
                  />
                </View>
                <TouchableOpacity style={styles.cardOptionsAcceptButton} onPress={handleAccept}>
                  <Text style={[styles.colorWhite, styles.textAlignCenter, styles.fontSizeLarge]}>Aceptar</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default FinanceModal;
