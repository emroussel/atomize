import React, { Component, useState, FunctionComponent } from 'react';

type FunctionComponentProp = {
  title: string;
};

export const FunctionalApp: FunctionComponent<FunctionComponentProp> = React.memo((props) => {
  const { title } = props;
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="class">
      <h1>{title}</h1>
      <p>{count}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
});

type ClassComponentProp = {
  title: string;
};

export class ComponentApp extends Component<ClassComponentProp, { count: number }> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  render() {
    const { title } = this.props;
    const { count } = this.state;

    return (
      <div className="class">
        <h1>{title}</h1>
        <p>{count}</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
