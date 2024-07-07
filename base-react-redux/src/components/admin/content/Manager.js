import ModalCreateUser from "./ModalCreateUser";

const Manager = (props) => {
  return (
    <>
      <div className="mannager-user-container">
        <div className="title-manager"></div>
        <div className="users-content">
          <div>
            <button>Add new users</button>
          </div>

          <div>
            table users
            <br></br>
            <ModalCreateUser></ModalCreateUser>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manager;
