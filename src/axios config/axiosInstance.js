import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    // params: {
    //     api_key: "3e914ce9b3ee67caf6c918962d1e50d3"
    // }

})


export default axiosInstance