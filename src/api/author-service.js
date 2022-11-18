import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const createAuthor = (author) => {
  return axios.post(`${API_URL}/authors`, author, { headers: authHeader() });
};

export const getAuthorById = (id) => {
  return axios.get(`${API_URL}/authors/${id}`, { headers: authHeader() });
};

export const updateAuthor = (author, id) => {
  return axios.put(`${API_URL}/authors/${id}`, author, {
    headers: authHeader(),
  });
};

export const deleteAuthor = (id) => {
  return axios.delete(`${API_URL}/authors/${id}`, { headers: authHeader() });
};

export const getAuthorsByPage = (
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/authors?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
