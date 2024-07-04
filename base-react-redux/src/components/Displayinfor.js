import React, { useState } from "react";
import "./Displayinfor.scss";
// import logo from "./../logo.svg";
// class Displayinfor extends React.Component {
//   state = {
//     isshowListUser: true,
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       document.title = "CongNghia ";
//     }, 3000);
//   }
//   handleShowHide = () => {
//     this.setState({
//       isshowListUser: !this.state.isshowListUser,
//     });
//   };

//   render() {
//     const { listUsers } = this.props;

//     return (
//       <div>
//         {/* <img src={logo} /> */}
//         <>
//           <span
//             onClick={() => {
//               this.handleShowHide();
//             }}
//           >
//             Hide list users <br></br>
//             {this.state.isshowListUser === true
//               ? "Hide list users"
//               : "show list users"}
//           </span>
//         </>
//         {/* so you print the screen */}
//         {this.state.isshowListUser && (
//           <>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={user.age > 20 ? "red" : "green"}>
//                   <div>My name {user.name}</div>
//                   <div>My age {user.age}</div>

//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

// function component doesn't use this
const Displayinfor = (props) => {
  const { listUsers } = props;

  const [isshowListUser, setShowHideListUser] = useState(true);

  const handleShowHide = () => {
    setShowHideListUser(!isshowListUser);
  };
  return (
    <div>
      <div>
        <span
          onClick={() => {
            handleShowHide();
          }}
        >
          {isshowListUser === true ? "hide the user" : "Show List Users"}
        </span>
      </div>
      {/* so you print the screen */}
      {isshowListUser && (
        <>
          {listUsers.map((user) => {
            return (
              <div key={user.id} className={user.age > 20 ? "red" : "green"}>
                <div>My name {user.name}</div>
                <div>My age {user.age}</div>

                <div>
                  <button
                    onClick={() => {
                      props.handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default Displayinfor;
