import axios from "axios";


export function requestGetCounterByOne() {
    return axios.request({
        method: 'GET',
        url: 'https://my-json-server.typicode.com/yassineDevox/counter-server/counter'
    })
}