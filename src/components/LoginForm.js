import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

  state = {
    email: '',
    password: ''
 };

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              placeholder="<usuario>@gmail.com"
              label="Correo"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="password"
              label="Contraseña"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            <Button>
              Firmarse
            </Button>
          </CardSection>
        </Card>
    );
  }
}

export default LoginForm;
