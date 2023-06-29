import axios from "axios";
import config from "../config";

const api = axios.create({
    baseURL: config.apiUrl,
    timeout: 1000,
});

export default api;