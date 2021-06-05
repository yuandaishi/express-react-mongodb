import React from "react";
class Son1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "00",
    };
  }
  componentDidMount() {
    console.log("2.componentDidMount");
  }
  componentDidUpdate() {
    console.log("2.componentDidUpdate");
  }
  render() {
    console.log("2.render");
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

export default Son1;
