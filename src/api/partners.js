import axios from 'axios';
const headers = 'Token 63ab652db85025784db873bcd17904932e4f97a2';

const axiosOptions = {
  baseURL: 'https://tco-dev.evrazsteelbuilding.ru/api',
  headers,
}

export const getPartners = axios.get('/partners/', axiosOptions)

export const getPartnerBlock = async (axios, id) => await axios.get(`partner/${id}/block/`, axiosOptions);

export const getPartnerUnblock = async (axios, id) => await axios.get(`partner/${id}/unblock/`, axiosOptions);
