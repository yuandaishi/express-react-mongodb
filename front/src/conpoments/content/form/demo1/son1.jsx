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
    // for (let i = 0; i < 1000000000; i++) {}
    return (
      <p
        className='p1'
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
