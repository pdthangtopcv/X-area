import Axios from "axios";

const axios = Axios.create({
    baseURL: process.env.REACT_APP_AXIOS_BASE_URL ?? 'http://localhost:3000',
});

export default axios;
