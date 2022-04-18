import { StyleSheet, FlatList, Button, Text, TextInput } from 'react-native';
import { View } from '../../components/Themed';
import ProductSimulationCell from '../../components/simulation/ProductSimulationCell';
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../../utils/cart-context';
import { ProductDTO } from '../../types';
import { AppColors } from '../../constants/Colors'


interface LoginScreenProps {

}

export default function LoginScreen(props: LoginScreenProps) {

  const { state, dispatch } = useContext(CartContext);

  const finance = () => {
    dispatch({ type: "SIMULATE" });
    props.navigation.navigate('ResultTab');
  }

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <View style={styles.title}>
          <View style={styles.logo}></View>
          <Text style={[styles.text, styles.titleText]}>Inicio de sesión</Text>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input}></TextInput>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.submit}>
          <Text style={[styles.text, styles.forgotPassword]}>olvidaste tu contraseña</Text>
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
    width: 200,
    height: 100,
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
    alignSelf: 'center',
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
  },
  inputs: {
    marginBottom: '30%',
    backgroundColor: AppColors.redColor,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#fff',
    width: '80%',
    alignSelf: 'center',
    height: 40,
  },
  submit: {
    backgroundColor: AppColors.redColor,
  },
  forgotPassword: {
    marginBottom: 10
  }

});
