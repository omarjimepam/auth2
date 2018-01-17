import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMoun() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBYxoT7J3Ifp6Ebya1_blwOh--by7PlWsg',
      authDomain: 'auth2-89505.firebaseapp.com',
      databaseURL: 'https://auth2-89505.firebaseio.com',
      projectId: 'auth2-89505',
      storageBucket: 'auth2-89505.appspot.com',
      messagingSenderId: '919515645628'
  })
  }
  render() {
    return (
      <View>
        <Header headerText='Verificar cuenta' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
