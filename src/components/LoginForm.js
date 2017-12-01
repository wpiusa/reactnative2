import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';
import { Text } from 'react-native';


class LoginForm extends Component{
	state={email:'', password:'', error:'',loading:false};

  onButtonPress() {
    const {email,password}=this.state;
    this.setState({error:'', loading:true});

    firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
          .catch(()=>{
             this.setState({error:'Auth Failed!'})
          })
      });
  }
   
  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return(
       <Button onPress={this.onButtononPress.bind(this)}>
          Login
       </Button>
    );
  } 

  render(){
	  return(
	    <Card>
           <CardSection>
             <Input 
                placeholder="user@gmail.com"
                label='Email'
                value={this.state.email}
                onChangeText={email=>this.setState({email:email})}
              
           </CardSection>

           <CardSection>
             <Input 
                secureTexEntry
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password=>this.setState({password:password})}
             />
           </CardSection>

           <Text style={styles.errorTextStyle}>
             {this.state.error}
           </Text>

           <CardSection >
             {this.renderButton()}
           </CardSection>
	    </Card>
	  )	
	}
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;