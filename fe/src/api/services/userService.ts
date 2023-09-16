import http from "../../http-common";

const get = (id: number) => {
  return http.get(`/user/${id}`);
}

const userServices = { get };

export default userServices;