import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const getSomeStatistics = () => {
  return axios.get(`${API_URL}/report`, { headers: authHeader() });
};

export const getReportsUnreturnedWithPage = (
  page = 0,
  size = 20,
  sort = "name",
  type = "ASC"
) => {
  return axios.get(
    `${API_URL}/report/unreturned-books?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    { headers: authHeader() }
  );
};

export const getReportsWithPageExpiredBooks = (
  page = 0,
  size = 20,
  sort = "name",
  type = "DESC"
) => {
  return axios.get(
    `${API_URL}/report/expired-books?page=${page}&size=${size}&sort=${sort}&type=${type}`,
    { headers: authHeader() }
  );
};

export const getReportMostBorrowers = (page = 0, size = 20) => {
  return axios.get(
    `${API_URL}/report/most-borrowers?page=${page}&size=${size}`,
    { headers: authHeader() }
  );
};

export const getReportMostPopularBooks = (amount = 10, page = 0, size = 20) => {
  return axios.get(
    `${API_URL}/report/most-popular-books?amount=${amount}&page=${page}&size=${size}`,
    { headers: authHeader() }
  );
};
