import { useContext } from "react";
import Dialog from "react-native-dialog";
import { CartContext } from "_utils/cart-context";

const AlertDelete = (props: {
  showAlert: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  visible: boolean;
}) => {
  const { dispatch } = useContext(CartContext);
  const handleCancel = () => {
    props.showAlert(false);
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_PRODUCT", payload: { id: props.id } });
    props.showAlert(false);
  };

  return (
    <Dialog.Container visible={props.visible}>
      <Dialog.Title>Eliminar producto</Dialog.Title>
      <Dialog.Description>¿Estas seguro que quieres eliminar este producto?</Dialog.Description>
      <Dialog.Button label="Cancelar" onPress={handleCancel} />
      <Dialog.Button label="Eliminar" onPress={handleDelete} />
    </Dialog.Container>
  );
};

export default AlertDelete;
