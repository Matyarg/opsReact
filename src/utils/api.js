import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // URL de tu API o base de datos

export const getReports = () => {
  return axios.get(`${BASE_URL}/reports`);
};

export const createReport = (report) => {
  return axios.post(`${BASE_URL}/reports`, report);
};

export const updateReport = (reportId, report) => {
  return axios.put(`${BASE_URL}/reports/${reportId}`, report);
};

export const deleteReport = (reportId) => {
  return axios.delete(`${BASE_URL}/reports/${reportId}`);
};
