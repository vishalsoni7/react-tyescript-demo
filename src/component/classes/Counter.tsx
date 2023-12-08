import { Component } from "react";

type CounterProp = {
  message: string;
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProp, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h2>
          {this.props.message} {this.state.count}{" "}
        </h2>{" "}
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
