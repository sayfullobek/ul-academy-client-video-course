import {BaseConnection} from "../BaseConnection";
import {IS_STATUS} from "../../utils/Util";
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "../BaseUrl";
import {APP_API} from "../Api";


export const DeleteAbout = async (url, id, setVisible) => {
    try {
        const res = await BaseConnection.doDelete(url, id)
        if (IS_STATUS(res.status)) {
            toast.success(res.data.body)
            setVisible(false)
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const SaveMyCode = async (data, navigate) => {
    try {
        const res = await axios.post(BASE_URL + APP_API.myCodes + "?name=" + data.codeName + "&codeId=" + data.codeId + "&photoId=" + data.photoId)
        if (IS_STATUS(res.status)) {
            toast.success(res.data.body)
            navigate("/auth/dashboard/codes")
            localStorage.removeItem("code_photoId")
            localStorage.removeItem("code_id")
        }
    } catch (err) {
        toast.error(err.message)
    }
}


export const SaveAbout = async (url, data, status, id, navigate, link, panel) => {
    try {
        let res;
        if (id === undefined || id === "") {
            res = await BaseConnection.doPost(url, data)
        } else {

        }
        if (IS_STATUS(res.status)) {
            toast.success("Muvaffaqiyatli saqlandi")
            if (panel === "admin") {
                navigate("/auth/dashboard/" + link)
            } else {
                navigate("/" + link)
            }
        }
    } catch (err) {
        toast.error(err.message)
    }
}

export const EmbeddedGet = async (url, status) => {
    try {
        const res = await BaseConnection.doGet(url)
        if (status === "data") {
            return res.data
        } else {
            return res.data._embedded.list
        }
    } catch (err) {
    }
}