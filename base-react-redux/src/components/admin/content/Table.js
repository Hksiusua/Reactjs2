import "./Table.scss";
const Table = (props) => {
  const { ListUser } = props;
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Index</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {ListUser.length > 0 ? (
          ListUser.map((user, index) => (
            <tr key={`table-users-${index}`}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <div className="col-md-12 col- row">
                  <div className="col-md-3">
                    <button
                      type="button"
                      class="btn btn-success  designSizeButton"
                    >
                      View
                    </button>
                  </div>
                  <div className="col-md-3 ">
                    <button
                      type="button"
                      class="btn btn-warning  designSizeButton"
                      onClick={() => {
                        props.handleClickBtnUpdate(user);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div className="col-md-3 ">
                    <button
                      type="button"
                      class="btn btn-danger  designSizeButton"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
