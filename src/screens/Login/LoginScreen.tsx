import { StyleSheet, Image, Button, Text, TextInput } from 'react-native';
import { View } from '../../components/Themed';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { AppColors } from '../../constants/Colors'


interface LoginScreenProps {

}

export default function LoginScreen(props: LoginScreenProps) {

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.title}>
          <Image style={styles.logo} source={require('../../assets/images/credituya-white.png')} />
          <Text style={[styles.text, styles.titleText]}>Inicio de sesión</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input} placeholder="correo"></TextInput>
          <TextInput style={styles.input} placeholder="contraseña"></TextInput>
        </View>
        <View style={styles.submit}>
          <Text style={[styles.text, styles.forgotPassword]}>¿olvidaste tu contraseña?</Text>
          <Button title={'Aceptar'} color={AppColors.redColor} onPress={() => console.log('')} />
        </View>
      </View>
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
    marginHorizontal: 'auto',
    height: '100%',
    backgroundColor: AppColors.redColor,
    justifyContent: 'center',

  },
  logo: {
    width: '80%',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    backgroundColor: AppColors.redColor,
    marginBottom: '20%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -10,
    lineHeight: 20,
  },
  inputs: {
    marginBottom: '30%',
    backgroundColor: AppColors.redColor,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
    height: 40,
    paddingHorizontal: 10,
  },
  submit: {
    backgroundColor: AppColors.redColor,
    width: '90%',
    alignSelf: 'center',
  },
  forgotPassword: {
    marginBottom: 10,
    fontWeight: 'bold',
  }

});
