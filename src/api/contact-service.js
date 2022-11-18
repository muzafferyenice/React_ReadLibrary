import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const sendMessage = (message) => {
  return axios.post(`${API_URL}/contact`, message);
};

export const getMessages = () => {
  return axios.get(`${API_URL}//contact/all`, {
    headers: authHeader(),
  });
};

export const getMessage = (id) => {
  return axios.get(`${API_URL}/contact/${id}`, {
    headers: authHeader(),
  });
};

export const updateMessage = (id) => {
    return axios.post(`${API_URL}/contact/${id}`, {
      headers: authHeader(),
    });
  };

export const deleteMessage = (id) => {
  return axios.delete(`${API_URL}/contact/${id}`, {
    headers: authHeader(),
  });
};
