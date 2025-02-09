import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <StatusBar backgtoundColor="#FFF" translucent={false} />

        <Image
          source={require('./src/assets/logo.png')}
          style={styles.logo} />

        <TextInput
          placeholder='Username, Celular ou Email'
          style={styles.input} />

        <TextInput
          placeholder='Sua Senha'
          style={styles.input} />

        <View style={styles.esqueceuContainer}>
          <TouchableOpacity>
            <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>

        <View style={styles.divisor}>

          <View style={styles.linha}></View>
          <Text> Ou </Text>
          <View style={styles.linha}></View>
        </View>

        <TouchableOpacity style={styles.facebook}>
          <FontAwesome5 name="facebook" size={25} color="#399fff" />
          <Text style={styles.face}>Continue como Fulano</Text>
        </TouchableOpacity>

        <View style={styles.div}></View>

        <View style={styles.cadastro}>
          <Text> Não possui uma conta?</Text>
          <Text style={styles.cadastreText}>Cadastre-se</Text>
        </View>



      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 350,
    height: 200,
    marginTop: '40%',
  },

  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#d9d9d9',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
  },

  esqueceuContainer: {
    width: '90%',
    alignItems: 'flex-end',
    marginBottom: 25
  },

  esqueceuText: {
    color: 'blue',
  },

  login: {
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.2,
  },

  loginText: {
    color: '#FFF'
  },

  divisor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '40',
    marginBottom: '40',
    gap: 10,
  },

  linha: {
    height: 2,
    width: '40%',
    backgroundColor: '#b5b5b5'
  },

  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20',
  },

  face: {
    color: 'blue'
  },

  div: {
    height: 2,
    width: '90%',
    backgroundColor: '#b5b5b5',
    marginTop: 140,
    marginBottom: 14,
  },

  cadastroLinha: {
    height: 20,
    width: '90%',
  },

  cadastro: {
    flexDirection: 'row',
    gap: 5,
  },

  cadastreText: {
    color: 'blue',
    fontWeight: 'bold'
  },

});
