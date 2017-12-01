//test
// install firebase : npm install --save firebase
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firbase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
   //init firebase
   firebase.initializeApp({
      apiKey: 'AIzaSyBtxMY4K6uHxv_2e3GD-FWAD2ACX6lPVRE',
      authDomain: 'authentication-70a18.firebaseapp.com',
      databaseURL: 'https://authentication-70a18.firebaseio.com',
      storageBucket: 'authentication-70a18.appspot.com',
      messagingSenderId: '682333809338'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }	

  render() {
     return(
      <View>
        <Header headerText="Authentication" />	
        <LoginForm />
      </View>
     );
  }
}

export default App;
