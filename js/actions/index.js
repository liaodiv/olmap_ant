import axios from 'axios';

const ROOT_URL = 'http://localhost:3001/api';

export function FetchGet(layer) {
    console.log('调用接口',layer);
    const request = axios.get(ROOT_URL+'/task');
    return{
        type:'FETCH_GET',
        payload:request
    }
}