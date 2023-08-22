import axios from "axios";
import {BASE_URL} from "./BaseUrl";

const token = localStorage.getItem("__ids__user__token")

export const BaseConnection = {
    doPost: (url, data) => axios.post(
        `${BASE_URL}${url}`, data, {headers: {'Authorization': `Bearer ${token}`}}
    ), doGet: (url) => axios.get(
        `${BASE_URL}${url}`, {headers: {'Authorization': `Bearer ${token}`}}
    ), doPut: (url, id, data) => axios.put(
        `${BASE_URL}/${url}/${id}`, data, {headers: {'Authorization': `Bearer ${token}`}}
    ), doDelete: (url, id) => axios.delete(
        `${BASE_URL}${url}/${id}`, {headers: {'Authorization': `Bearer ${token}`}}
    )
}
