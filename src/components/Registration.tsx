import * as React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Register } from '../generated-models';

class Registration extends React.Component {
  public state = {
    bio: '',
    email: '',
    password: '',
  };
  public render() {
    return (
      <Register.Component>
        {(mutate, { loading }) => {
          const { bio, email, password } = this.state;
          return (
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  onChange={e => this.setState({ email: e.target.value })}
                  type="email"
                  placeholder="Email"
                />
                <Label for="password">Password</Label>
                <Input
                  onChange={e => this.setState({ password: e.target.value })}
                  type="password"
                  placeholder="Password"
                />
                <Label for="bio">Bio</Label>
                <Input
                  onChange={e => this.setState({ bio: e.target.value })}
                  type="textarea"
                  placeholder="Bio"
                />
              </FormGroup>
              <Button
                onClick={() => {
                  mutate({ variables: { email, bio, password } });
                }}
              >
                Find User
              </Button>
            </Form>
          );
        }}
      </Register.Component>
    );
  }
}

export default Registration;
