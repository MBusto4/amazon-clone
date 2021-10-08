import axios from 'axios'

const instance = axios.create({
    baseURL: '...' //this is where the API (Firebase Cloud Functions)url goes
})


export default instance