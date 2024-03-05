import axios from "axios";


export function requestGetUserPlaceHolder() {
    return axios.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users/1'
    })
}