import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({
      count: this.state.value + 1
    });
  };

  render() {
    //console.log("props", this.props);
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()} </span>
        <button
          onClick={() => this.handleIncrement({ id: this.state.count })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className={"btn btn-danger btn-sm m-2"}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
