import axios from 'axios'

export function postUser(data) {
    return axios({
        method: 'post',
        url: '/user',
        baseURL: 'http://localhost:3000/api',
        data: data
    })
}