import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bikeshopsample-539b4.firebaseio.com'
});

export default instance;