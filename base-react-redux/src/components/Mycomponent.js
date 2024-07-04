import React, { useState } from "react";
import Userinfor from "./Userinfor";
import Displayinfor from "./Displayinfor";
// class Mycomponent extends React.Component {
//   state = {
//     listUsers: [
//       { id: 1, name: "nghiadzai", age: 20 },
//       { id: 2, name: "hoàidzai", age: 40 },
//       { id: 3, name: "linhadzai", age: 60 },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     console.log("Check: ", userObj);
//     // coppy the array add userObj the first
//     this.setState({
//       listUsers: [userObj, ...this.state.listUsers],
//     });
//   };

//   handleDeleteUser = (userId) => {
//     let listUsersClone = [...this.state.listUsers];
//     const result = listUsersClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUsers: result,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Userinfor handleAddNewUser={this.handleAddNewUser}></Userinfor>

//         <Displayinfor
//           listUsers={this.state.listUsers}
//           handleDeleteUser={this.handleDeleteUser}
//         ></Displayinfor>
//       </div>
//     );
//   }
// }

const Mycomponent = (props) => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "nghiadzai", age: 20 },
    { id: 2, name: "hoàidzai", age: 40 },
    { id: 3, name: "linhadzai", age: 60 },
  ]);
  const handleAddNewUser = (userObj) => {
    console.log("Check: ", userObj);
    // coppy the array add userObj the first
    setListUsers([userObj, ...listUsers]);
    // this.setState({
    //   listUsers: [userObj, ...this.state.listUsers],
    // });
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    const result = listUsersClone.filter((item) => item.id !== userId);
    setListUsers(result);
    // this.setState({
    //   listUsers: result,
    // });
  };
  return (
    <div>
      <Userinfor handleAddNewUser={handleAddNewUser}></Userinfor>
      <Displayinfor
        listUsers={listUsers}
        handleDeleteUser={handleDeleteUser}
      ></Displayinfor>
    </div>
  );
};

export default Mycomponent;
