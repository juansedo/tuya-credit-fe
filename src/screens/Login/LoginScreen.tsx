import React, { useState } from 'react';
import { StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { View } from '_components/Themed';
import { AppColors } from '_constants/Colors';

interface LoginScreenProps {
  navigation: any
}

export default function LoginScreen(props: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOnPress = async () => {
    try {
      const response = await fetch('http://34.135.136.87/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseJson = await response.json();
      if (!('access_token' in responseJson)) {
        throw new Error('Invalid credentials');
      }
      setError('');
      await SecureStore.setItemAsync('access_token', responseJson.access_token);
      props.navigation.navigate('Root');
    }
    catch (error) {
      setError(error.message);
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
        <View style={styles.inputs}>
          <Text style={[styles.text, styles.forgotPassword]}>{error}</Text>
        </View>
        <View style={styles.submit}>
          <Text style={[styles.text, styles.forgotPassword]}>
            ¿olvidaste tu contraseña?
          </Text>
          <TouchableOpacity style={styles.submitButton} onPress={handleOnPress}>
            <Text style={styles.submitText}>Aceptar</Text>
          </TouchableOpacity>
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
    width: '70%',
    alignSelf: 'center',
  },
  forgotPassword: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: AppColors.redWineColor,
    padding: 10,
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
