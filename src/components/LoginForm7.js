import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';


class LoginForm extends Component{
	state={email:''};

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