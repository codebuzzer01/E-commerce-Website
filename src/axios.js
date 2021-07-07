import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:5001/challenge-b0bad/us-central1/api'

});
export default instance;