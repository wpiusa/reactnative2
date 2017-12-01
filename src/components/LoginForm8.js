import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';


class LoginForm extends Component{
	state={email:'', password:''};

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
                placeholder="password"
                label="Password"
                value={this.state.password}
                onChangeText={password=>this.setState({password:password})}
             />
           </CardSection>

           <CardSection >
              <Button>
                Login
              </Button>
           </CardSection>
	    </Card>
	  )	
	}
}