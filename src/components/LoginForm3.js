import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component{
	render(){
	  return(
	    <Card>
           <CardSection>
             <TextInput style={{height:20, width:80}}/>
           </CardSection>

           <CardSection />

           <CardSection >
              <Button>
                Login
              </Button>
           </CardSection>
	    </Card>
	  )	
	}
}