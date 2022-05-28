import { Image, Text, TouchableOpacity, View } from "react-native";
import { CreditCardDTO } from "_types";
import { styles } from "../styles";

interface CardItemProps {
  card: CreditCardDTO;
  isSelected: boolean;
  onClick: () => void;
}

const CardItem = (props: CardItemProps) => {
  const { card, isSelected, onClick } = props;
  const interestRate = Number(card.interestRate).toFixed(2);
  const pesosCOP = Intl.NumberFormat("co-CO", {
    style: "currency",
    currency: "COP",
  });

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        ...(isSelected ? [styles.selectedCard] : []),
      ]}
      onPress={onClick}
    >
      <View style={styles.cardImageContainer}>
        <Image style={styles.cardImage} source={require("_assets/images/yellow.png")} />
      </View>
      <View style={styles.cardTextContainer}>
        <View>
          <Text style={[styles.cardTitle, ...(isSelected ? [styles.selectedCard] : [])]}>
            {card.type}
          </Text>
        </View>
        <View>
          <Text style={[styles.fontSizeSmall, ...(isSelected ? [styles.selectedCard] : [])]}>
            <Text style={[styles.bold]}>Interés mensual: </Text>
            {interestRate}
          </Text>
        </View>
        <View>
          <Text style={[styles.fontSizeSmall, ...(isSelected ? [styles.selectedCard] : [])]}>
            <Text style={[styles.bold]}>Cupo disponible: </Text>
            {pesosCOP.format(Number(card.available))}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
