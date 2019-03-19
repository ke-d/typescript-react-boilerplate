import * as React from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { FindUser } from '../generated-models';

class FindUserParent extends React.Component {
  public state = {
    email: '',
    toggle: false,
  };
  public render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={e =>
              this.setState({ toggle: false, email: e.target.value })
            }
            type="email"
            placeholder="Email"
          />
        </FormGroup>
        <Button onClick={() => this.setState({ toggle: true })}>
          Find User
        </Button>
        {this.state.toggle && (
          <FindUser.Component variables={{ email: this.state.email }}>
            {({ loading, error, data }) => {
              if (loading) return 'Loading...';
              if (error) return `Error! ${error.message}`;
              if (!data) return 'No data found';
              return (
                <div>
                  <div>Email: {data.userFind.email}</div>
                  <div>Bio: {data.userFind.bio}</div>
                </div>
              );
            }}
          </FindUser.Component>
        )}
      </Form>
    );
  }
}

export default FindUserParent;
