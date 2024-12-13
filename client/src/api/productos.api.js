import axios from "axios"

export const getAllProductos = () => {
    return axios.get('http://192.168.1.249:8000/productos/api/v1/producto/')
}