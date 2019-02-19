import * as React from 'react';
import { Button, Input, Jumbotron } from 'reactstrap';
interface FormState {
  text: string;
  submitted: boolean;
}
class BasicForm extends React.Component<{}, FormState> {
  public state = {
    submitted: false,
    text: '',
  };
  public handleSubmit() {
    this.setState({
      submitted: true,
    });
  }
  public render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            <Input
              onChange={e => this.setState({ text: e.target.value })}
              type="textarea"
              name="text"
              id="exampleText"
            />
          </p>
          <hr className="my-2" />
          {this.state.submitted && <p>This was submitted: {this.state.text}</p>}

          <p className="lead">
            <Button onClick={() => this.handleSubmit()} color="primary">
              Submit
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default BasicForm;
