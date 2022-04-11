import axios from "axios"
import NativeAsyncLocalStorage from "react-native/Libraries/Storage/NativeAsyncLocalStorage";

const axiosInstance = axios.create ({
    "baseURL" : "https://mon-post.herokuapp.com/api"
})

// Définir un intercepteur permettant d'inclure le token dans chaque appel à l'API
axiosInstance.interceptors.request.use(async (request:AxiosRequestConfig) => {
    // Récupérer le token dans le AsyncStorage
    const token = await NativeAsyncLocalStorage.getItem('token')
    if(token){
        request.headers.Authorization = 'Bearer ${token}';
    }
    return request
}) 

export default axiosInstance;