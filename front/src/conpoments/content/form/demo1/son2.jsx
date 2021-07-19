import React from "react";
class Son2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00",
    };
  }
  componentDidMount() {
    console.log("3.componentDidMount");
  }
  componentDidUpdate() {
    console.log("3.componentDidUpdate");
  }
  render() {
    console.log("3.render");
    for (let i = 0; i < 10000000; i++) {}
    return (
      <p
        onClick={() => {
          this.setState({ time: +new Date() });
        }}
      >
        {this.state.time}
      </p>
    );
  }
}

export default Son2;
