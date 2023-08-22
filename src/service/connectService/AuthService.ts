import {BaseConnection} from "../BaseConnection";
import {APP_API} from "../Api";
import {IS_STATUS} from "../../utils/Util";
import {toast} from "react-toastify";
import {Simulate} from "react-dom/test-utils";

export const RegisterHandler = async (data, navigate) => {
    const check = {
        firstName: data.firstName.trim().length === 0,
        lastName: data.lastName.trim().length === 0,
        phoneNumber: data.phoneNumber.trim().length !== 9,
        startPassword: data.password.trim().length < 4,
        endPassword: data.password.trim().length > 20,
        equalsPreAndPass: data.password != data.prePassword,
    }
    if (check.firstName) {
        return toast.error("Ism bo'sh bo'lmasin")
    }
    if (check.lastName) {
        return toast.error("Familiya bo'sh bo'lmasin")
    }
    if (check.phoneNumber) {
        return toast.error("Telefon raqamda xatolik iltomos tekshirib qayta urinib ko'ring")
    }
    if (check.startPassword) {
        return toast.error("Parol 4ta belgidan kam bo'lmasligi kerak")
    }
    if (check.endPassword) {
        return toast.error("Parol 20ta belgidan ko'p bo'lmasligi kerak")
    }
    if (check.equalsPreAndPass) {
        return toast.error("Parol va tasdqilash paroli teng bo'lishi shart")
    }
    try {
        const res = await BaseConnection.doPost(APP_API.register, data)
        if (IS_STATUS(res.status)) {
            toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
            localStorage.setItem("__firstName__", res.data.user.firstName)
            localStorage.setItem("__id__", res.data.user.id)
            localStorage.setItem("__lastName__", res.data.user.lastName)
            localStorage.setItem("__phone_number__", res.data.user.phoneNumber)
            localStorage.setItem("__user_role__", res.data.user.roles[0].roleName)
            localStorage.setItem("__ids__user__token", res.data.body)
            navigate("/")
        }
    } catch (err) {
        toast.error(err.response.data.body)
    }
}

export const LoginHandler = async (data, navigate) => {
    const check = {
        phoneNumber: data.phoneNumber.length != 9,
        password: data.password.length < 4
    }
    if (check.phoneNumber) {
        return toast.error("Telefon raqamingizda xatolik qayta urinib ko'ring")
    }
    if (check.password) {
        return toast.error("Parolda xatolik qayta urinib ko'ring")
    }
    try {
        const res = await BaseConnection.doPost(APP_API.login, data)
        console.log(res)
        if (IS_STATUS(res.status)) {
            toast.success("Muvaffaqiyatli xisobga kirdingiz")
            localStorage.setItem("__firstName__", res.data.user.firstName)
            localStorage.setItem("__id__", res.data.user.id)
            localStorage.setItem("__lastName__", res.data.user.lastName)
            localStorage.setItem("__phone_number__", res.data.user.phoneNumber)
            localStorage.setItem("__user_role__", res.data.user.roles[0].roleName)
            localStorage.setItem("__ids__user__token", res.data.resToken.body)
            if (res.data.user.roles[0].roleName === ("ADMIN" || "DIRECTOR")) {
                navigate("/auth/dashboard")
            } else {
                navigate("/")
            }
        }
    } catch (err) {
        toast.error(err.message)
    }
}