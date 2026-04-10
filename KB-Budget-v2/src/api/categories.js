import axios from 'axios';

const client = axios.create({
  baseURL: 'https://kb-7-budget-myv-json-server.onrender.com',
});

export function fetchCategories() {
  return client.get('/categories').then((res) => res.data);
}
