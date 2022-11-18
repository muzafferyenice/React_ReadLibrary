import axios from "axios";
import { settings } from "../utils/settings";
import authHeader from "./auth-header";

const API_URL = settings.apiURL;

export const deleteBook = (id) => {
  return axios.delete(`${API_URL}/books/${id}`, { headers: authHeader() });
};

export const getBookById = (id) => {
  return axios.get(`${API_URL}/books/${id}`, { headers: authHeader() });
};

export const downloadFile = (fileName) => {
  return axios.get(`${API_URL}/book/image/download/${fileName}`);
};

export const updateBook = (book, id) => {
  console.log(id);
  //  debugger;
  return axios.put(`${API_URL}/books/${id}`, book, { headers: authHeader() });
};

export const createBookWithImage = (book) => {
  // console.log(image);
  console.log(book);
  return axios.post(`${API_URL}/books`, book, { headers: authHeader() });
};

export const getAllBooksWithNamesByPage = (
  //yeni eklenen bookid author ve diger name ler geliyor
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/books/all/names?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const getAllBooksByPage = (
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/books/all?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const getAllWithPageForMember = (
  q = null,
  cat = null,
  author = null,
  publisher = null,
  page = 0,
  size = 20,
  sort = "name",
  direction = "ASC"
) => {
  return axios.get(
    `${API_URL}/books?q=${q}&cat=${cat}&author=${author}&publisher=${publisher}&page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    { headers: authHeader() }
  );
};

export const getAllBooksWithPageOnlyWithBookName = (
  q = null,
  sort = "id",
  direction = "ASC",
  size = 20,
  page = 0
) => {
  return axios.get(
    `${API_URL}/books/admin?q=${q}&sort=${sort}&direction=${direction}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};
export const getAllBooksWithPageOnlyWithCatId = (
  cat = null,
  sort = "id",
  direction = "ASC",
  size = 20,
  page = 0
) => {
  return axios.get(
    `${API_URL}/books/admin?cat=${cat}&sort=${sort}&direction=${direction}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};
export const getAllBooksWithPageOnlyWithPubId = (
  publisher = null,
  sort = "id",
  direction = "ASC",
  size = 20,
  page = 0
) => {
  return axios.get(
    `${API_URL}/books/admin?publisher=${publisher}&sort=${sort}&direction=${direction}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};
export const getAllBooksWithPageOnlyWithAuthorId = (
  author = null,
  sort = "id",
  direction = "ASC",
  size = 20,
  page = 0
) => {
  return axios.get(
    `${API_URL}/books/admin?author=${author}&sort=${sort}&direction=${direction}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};

export const getAllWithPageForAdmin = (
  q = null,
  cat = null,
  author = null,
  publisher = null,
  sort = "id",
  direction = "ASC",
  size = 20,
  page = 0
) => {
  return axios.get(
    `${API_URL}/books/admin?q=${q}&cat=${cat}&author=${author}&publisher=${publisher}&sort=${sort}&direction=${direction}&size=${size}&page=${page}`,
    { headers: authHeader() }
  );
};
