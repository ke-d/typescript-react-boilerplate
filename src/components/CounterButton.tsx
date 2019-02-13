import * as React from 'react';
import { Button } from 'reactstrap';

interface CounterButtonState {
  counter: number;
}

interface CounterButtonProps {
  buttonColor: string;
}

class CounterButton extends React.Component<
  CounterButtonProps,
  CounterButtonState
> {
  public state = {
    counter: 0,
  };
  public render() {
    const buttonColor =
      this.state.counter >= 5 ? 'danger' : this.props.buttonColor;
    return (
      <Button
        onClick={() => {
          this.setState({
            counter: this.state.counter + 1,
          });
        }}
        color={buttonColor}
      >
        {this.state.counter}
      </Button>
    );
  }
}

export default CounterButton;
