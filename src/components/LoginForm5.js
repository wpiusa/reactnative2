import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';


class LoginForm extends Component{
	state={text:''};

  render(){
	  return(
	    <Card>
           <CardSection>
             <Input 
                value={this.state.text}
                onChangeText={text=>this.setState({text:text})}
              
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