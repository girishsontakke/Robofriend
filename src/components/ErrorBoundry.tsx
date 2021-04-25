import React, { Component } from "react";

type State = {
  hasError: boolean;
};

type Props = {};

class ErrorBoundry extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1> Ooops! that is not good </h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
