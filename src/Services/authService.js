import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users/login/";
const tokenKey = "token";
const tokenref = "tokenref";
const firebaseToken = "registration_id";

http.setJwt(getJwt());

export async function login(username, password) {
  const { data } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, data.access);
  localStorage.setItem(tokenref, data.refresh);
}

export function loginWithJwt(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem(tokenref);
  localStorage.removeItem(firebaseToken);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);

    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function RefreshToken() {
  const jwt = localStorage.getItem(tokenref);

  const { data } = await http.post(apiUrl + "/users/token/refresh/", {
    refresh: jwt,
  });
  localStorage.setItem(tokenKey, data.access);
  localStorage.setItem(tokenref, data.refresh);
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
