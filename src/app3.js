//test
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';

class App extends Component {
  render() {
     return(
      <View>
        <Header headerText="Authentication" />	
        <Text>An App</Text>
      </View>
     );
  }
}

export default App;
