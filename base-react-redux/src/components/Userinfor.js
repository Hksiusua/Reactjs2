import React, { useState } from "react";

// class Userinfor extends React.Component {
//   state = {
//     name: "hoa hóa hòa",
//     age: 20,
//   };

//   handleClick = () => {
//     this.setState({
//       name: "hù hu hú",
//     });
//   };
//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeInputAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//     // console.log(this.state);
//     // alert("hello");
//   };
//   render() {
//     return (
//       <div>
//         <h2>heloo</h2>;<h2>what's your name {this.state.name}</h2>
//         <h2>How old are you {this.state.age}</h2>
//         <button onClick={this.handleClick}>Click here</button>
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <h1>Ten</h1>
//           <input
//             type="text"
//             onChange={(event) => {
//               this.handleOnChangeInput(event);
//             }}
//           ></input>

//           <h1>Tuoi</h1>
//           <input
//             type="number"
//             onChange={(event) => {
//               this.handleOnChangeInputAge(event);
//             }}
//           ></input>
//           <button>submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const Userinfor = (props) => {
  const [goodName, setGoodName] = useState("hoa hóa hòa");

  const [goodAge, setGoodAge] = useState(25);
  const handleClick = () => {
    setGoodName("hù hu hú");
    setGoodAge(25);
    // this.setState({
    //   name: "hù hu hú",
    // });
  };
  const handleOnChangeInput = (event) => {
    setGoodName(event.target.value);

    // this.setState({
    //   name: event.target.value,
    // });
  };

  const handleOnChangeInputAge = (event) => {
    setGoodAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: goodName,
      age: goodAge,
    });
    // console.log(this.state);
    // alert("hello");
  };

  return (
    <div>
      <h2>heloo</h2>;<h2>what's your name {goodName}</h2>
      <h2>How old are you {goodAge}</h2>
      <button onClick={handleClick}>Click here</button>
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <h1>Ten</h1>
        <input
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        ></input>

        <h1>Tuoi</h1>
        <input
          type="number"
          onChange={(event) => {
            handleOnChangeInputAge(event);
          }}
        ></input>
        <button>submit</button>
      </form>
    </div>
  );
};
export default Userinfor;
