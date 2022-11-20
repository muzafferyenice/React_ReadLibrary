import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const createLoan = (loan) => {
  console.log(loan);
  return axios.post(`${API_URL}/loans`, loan, { headers: authHeader() });
};

export const getLoanWithIdAdmin = (id) => {
  return axios.get(`${API_URL}/loans/auth/${id}`);
};

export const getLoanWithIdMember = (id) => {
  return axios.get(`${API_URL}/loans/${id}`);
};

export const updateLoan = (loan, id) => {
  console.log(loan);
  console.log(id);
  return axios.put(`${API_URL}/loans/${id}`, loan, { headers: authHeader() });
};

export const findAllLoansByUserId = (
  //herseyi getiren method
  userId,
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/loans/admin/user/${userId}?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
export const findAllLoansAuthanticatedUser = (
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/loans/user/?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
export const findLoanedBookByBookId = (
  bookId,
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/loans/book/${bookId}?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const getLoansWithPageAuthenticatedUser = (
  page = 0,
  size = 20,
  sort = "id",
  direction = "DESC"
) => {
  return axios.get(
    `${API_URL}/loans?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};
