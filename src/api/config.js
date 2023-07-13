import axios from "axios";
import { getEnvironments } from "../helpers/getEnviroments";

const { VITE_API_URL } = getEnvironments();

const apiSedalp = axios.create({
    baseURL: VITE_API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})

export default apiSedalp