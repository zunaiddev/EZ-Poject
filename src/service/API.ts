import axios from "axios";

const API = axios.create({
    baseURL: "https://vernanbackend.ezlab.in/api"
});

export default API;