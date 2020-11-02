import axios from 'axios';

let api = axios.create({
    headers:{
        "Client-ID" : "9c9qaajp2co2nk0g23ju5elr49t8mb"
    }
})

export default api;