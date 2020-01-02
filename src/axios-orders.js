import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://react-my-burger-f5b3b.firebaseio.com'
});

export default axiosInstance;