import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
const Manager = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  return (
    <>
      <div className="mannager-user-container">
        <div className="title-manager"></div>
        <div className="users-content">
          <div>
            <button
              className="btn btn-info"
              onClick={() => {
                setshowModalCreateUser(true);
              }}
            >
              Add new users
            </button>
          </div>

          <div>
            table users
            <br></br>
            <ModalCreateUser
              show={showModalCreateUser}
              onHide={() => setshowModalCreateUser(false)}
            ></ModalCreateUser>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manager;
