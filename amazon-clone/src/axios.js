import axios from 'axios'

const instance = axios.create({
    //this is where the API (Firebase Cloud Functions)url goes
    baseURL: "http://localhost:5001/clone-e2b31/us-central1/api"
})


export default instance