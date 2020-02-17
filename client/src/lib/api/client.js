import axios from 'axios';

const client = axios.create();

// API 주소를 다른 곳으로 사용함
client.defaults.baseURL = 'http://52.79.219.137:80/'

export default client;