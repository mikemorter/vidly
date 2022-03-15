import http from "./httpService";
import config from "../config.json";
import userEvent from "@testing-library/user-event";

const apiEndpoint = config.apiUrl + "/users";

export function register(user) {
  http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
