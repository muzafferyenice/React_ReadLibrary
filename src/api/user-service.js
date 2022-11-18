import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const register = (user) => {
  return axios.post(`${API_URL}/register`, user);
};

export const login = (credentials) => {
  return axios.post(`${API_URL}/signin`, credentials);
};

export const getUserByName = (
  name,
  page = 0,
  size = 20,
  sort = "id",
  type = "DESC"
) => {
  return axios.get(
    `${API_URL}/users/?name=${name}&sort=${sort}&type=${type}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};

export const getUserAuthUser = () => {
  return axios.get(`${API_URL}/user`, { headers: authHeader() });
};

export const getAllUserLoansPage = (
  page = 0,
  size = 20,
  sort = "id",
  type = "DESC"
) => {
  return axios.get(
    //role mole hepsi geliyoor
    `${API_URL}/user/loans?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    { headers: authHeader() }
  );
};

/* ADMIN SERVICES */

export const getUsersByPage = (
  page = 0,
  size = 20,
  sort = "id",
  type = "DESC"
) => {
  return axios.get(
    `${API_URL}/users?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    { headers: authHeader() }
  );
};

export const getUserById = (id) => {
  return axios.get(`${API_URL}/user/${id}`, { headers: authHeader() });
};

export const createUser = (user) => {
  return axios.put(`${API_URL}/users`, user, { headers: authHeader() });
};

export const updateUserByAdmin = (id, user) => {
  return axios.put(`${API_URL}/users/${id}`, user, { headers: authHeader() });
};

export const updateUserByEmployee = (id, user) => {
  return axios.put(`${API_URL}/user/${id}`, user, { headers: authHeader() });
};

export const deleteUserById = (id) => {
  return axios.delete(`${API_URL}/users/${id}`, { headers: authHeader() });
};
