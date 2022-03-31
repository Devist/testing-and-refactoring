import axios from 'axios'

export function getProductsList(params) {
  return axios({
    method: 'get',
    url: '/products/list',
    baseURL: 'http://localhost:3000/api',
    params: params,
  })
}

export function getProduct(pid) {
  return axios({
    method: 'get',
    url: `/products/${pid}`,
    baseURL: 'http://localhost:3000/api',
  })
}
