import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalCreateUser.scss";

import Image from "../../assets/hinhTest.jpg";
const ModalCreateUser = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");

  const [previewImage, setPreviewImage] = useState("");

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      console.log("good", event.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              className="form-control"
              value={email}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              UserName
            </label>
            <input
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              type="text"
              className="form-control"
              value={username}
            />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              className="form-control"
              value={password}
            />
          </div>
          <label for="exampleFormControlInput1" className="form-label">
            Roles
          </label>
          <select
            onChange={(event) => {
              setRole(event.target.value);
            }}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <div className="mb-3 mt-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label FormatImage"
              htmlFor="labelUpload"
            >
              <FontAwesomeIcon icon={faPlus} className="fa-plus-icon" />
              Repository image
            </label>
            <input
              type="file"
              id="labelUpload"
              hidden
              onChange={(event) => {
                handleUploadImage(event);
              }}
            />
            <div className="repositoryImage">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>previewImage</span>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreateUser;
