import React, { useState, useContext } from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Dialog from "react-native-dialog";
import { View } from '_components/Themed';
import { AppColors } from '_constants/Colors';
import { AuthContext } from '_utils/auth-context';

interface LoginScreenProps {
  navigation: any
}

export default function LoginScreen(props: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const { signIn } = useContext(AuthContext);

  const handleAccept = () => {
    setVisible(false);
  };

  const handleOnPress = async () => {
    const error = await signIn(email, password)
    if (error) {
      setVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.title}>
          <Image style={styles.logo} source={require('../../assets/images/credituya-white.png')} />
          <Text style={[styles.text, styles.titleText]}>Inicio de sesión</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input} onChangeText={setEmail} placeholder="Correo"></TextInput>
          <TextInput style={styles.input} onChangeText={setPassword} secureTextEntry={true} placeholder="Contraseña"></TextInput>
        </View>
        <View style={styles.submit}>
          <Text style={[styles.text, styles.forgotPassword]}>
            ¿Olvidaste tu contraseña?
          </Text>
          <TouchableOpacity style={styles.submitButton} onPress={handleOnPress}>
            <Text style={styles.submitText}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Dialog.Container visible={visible}>
        <Dialog.Title>Usuario incorrecto</Dialog.Title>
        <Dialog.Description>Comprueba tu correo y contraseña</Dialog.Description>
        <Dialog.Button label="Aceptar" onPress={handleAccept} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.redColor,
  },
  login: {
    width: '80%',
    marginTop: -50,
    marginHorizontal: 'auto',
    height: '100%',
    backgroundColor: AppColors.redColor,
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  title: {
    backgroundColor: AppColors.redColor,
    marginBottom: '20%',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputs: {
    marginBottom: 30,
    backgroundColor: AppColors.redColor,
  },
  input: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '100%',
    height: 45,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  submit: {
    backgroundColor: AppColors.redColor,
    width: '90%',
    alignSelf: 'center',
  },
  forgotPassword: {
    marginBottom: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  submitButton: {
    paddingHorizontal: 20,
    height: 70,
    borderRadius: 5,
    backgroundColor: AppColors.redLightColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
