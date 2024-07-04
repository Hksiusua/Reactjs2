import React from "react";

class Userinfor extends React.Component {
  state = {
    name: "hoa hóa hòa",
    age: 20,
  };

  handleClick = () => {
    this.setState({
      name: "hù hu hú",
    });
  };
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeInputAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
    // console.log(this.state);
    // alert("hello");
  };
  render() {
    return (
      <div>
        <h2>heloo</h2>;<h2>what's your name {this.state.name}</h2>
        <h2>How old are you {this.state.age}</h2>
        <button onClick={this.handleClick}>Click here</button>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <h1>Ten</h1>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>

          <h1>Tuoi</h1>
          <input
            type="number"
            onChange={(event) => {
              this.handleOnChangeInputAge(event);
            }}
          ></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default Userinfor;
