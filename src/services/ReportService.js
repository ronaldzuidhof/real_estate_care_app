// // define SERVICE getData - function to get JSON data from the baseURL (subURL)

// imports
import axios from 'axios'

// create axios instance
const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/ronaldzuidhof/real_estate_care_app',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getData(subURL){
        return apiClient.get(subURL)
    }
}