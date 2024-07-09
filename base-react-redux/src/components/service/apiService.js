// import axios from "axios";
import { instance } from "../utils/axiosCustomize";

const createUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("image", image);
  return instance.post("api/v1/participant", data); // this is data is take data so add
};

const showAllUser = () => {
  return instance.get("api/v1/participant/all"); // this is data is take data so add
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("image", image);
  return instance.put("api/v1/participant", data); // this is data is take data so add
};

export { createUser, showAllUser, putUpdateUser };
