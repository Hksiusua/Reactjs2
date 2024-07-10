// import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalUpdateUser";
import Table from "./Table";

import { useEffect, useState } from "react";
import { showAllUser } from "../../service/apiService";

const Manager = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [ListUser, setListUser] = useState([]);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);

  useEffect(() => {
    fetchListUser();
  }, []);

  const fetchListUser = async () => {
    try {
      let res = await showAllUser();
      if (res.data.EC === 0) {
        setListUser(res.data.DT);
      } else {
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
    // console.log("update user: ", user);
  };

  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

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
            <Table
              ListUser={ListUser}
              handleClickBtnUpdate={handleClickBtnUpdate}
              handleClickBtnView={handleClickBtnView}
            ></Table>
            <br></br>
            <ModalCreateUser
              show={showModalCreateUser}
              onHide={() => setshowModalCreateUser(false)}
              fetchListUser={fetchListUser}
            ></ModalCreateUser>

            <ModalUpdateUser
              show={showModalUpdateUser}
              onHide={() => setShowModalUpdateUser(false)}
              fetchListUser={fetchListUser}
              dataUpdate={dataUpdate}
            ></ModalUpdateUser>

            <ModalViewUser
              show={showModalViewUser}
              onHide={() => setShowModalViewUser(false)}
              fetchListUser={fetchListUser}
              dataUpdate={dataUpdate}
            ></ModalViewUser>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manager;
