import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const createPublisher = (publisher) => {
  return axios.post(`${API_URL}/publishers`, publisher, {
    headers: authHeader(),
  });
};

export const getPublisherById = (id) => {
  return axios.get(`${API_URL}/publishers/${id}`, { headers: authHeader() });
};

export const updatePublisher = (publisher, id) => {
  return axios.put(`${API_URL}/publishers/${id}`, publisher, {
    headers: authHeader(),
  });
};

export const deletePublisher = (id) => {
  return axios.delete(`${API_URL}/publishers/${id}`, { headers: authHeader() });
};

export const getPublisherByPage = (
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/publishers?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
