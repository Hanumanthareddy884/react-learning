import React from "react";

class Simple extends React.Component {
  
  state = {
    count: 0,
  };
    increment = ()=>{
        this.setState({
            count : this.state.count+1
    });
};
  render() {
    return <div>
        <h1>Hello everyone reddy is {this.state.count}</h1>
        <button onClick={this.increment}>incxgf</button>
    </div>;
  }
}

export default Simple;
