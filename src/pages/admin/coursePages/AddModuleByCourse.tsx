import {Forms} from "../../../component/Forms";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "../../../service/BaseUrl";
import {IS_STATUS} from "../../../utils/Util";
import {Loading} from "../../../component/Loading";

export const AddModuleByCourse = () => {
    const navigate = useNavigate()
    const id = useParams().id
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const getOneCourse = async () => {
        try {
            const res = await EmbeddedGet(APP_API.course + "/" + id, "data")
            setCourse(res)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getOneCourse()
    }, [])
    const arr = [
        {
            name: "Modulning nomi",
            placeholder: 'Modulning nomini kiriting',
            type: 'text',
            value: name,
            setValue: setName
        },
    ]
    const saveModule = async () => {
        if (name.trim().length === 0) {
            return toast.error('modulning nomi bo\'sh bo\'lmasin')
        }
        try {
            const res = await axios.post(BASE_URL + APP_API.module + "?userId=" + localStorage.getItem("__id__") + "&courseId=" + id + "&name=" + name)
            if (IS_STATUS(res.status)) {
                toast.success(res.data.body)
                navigate("/auth/dashboard/course/" + id)
            }
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div>
            {loading ? (
                <Forms name={course.name + " kursiga modul qo'shish"} status={""} functions={saveModule} inputs={arr}
                       link={"/auth/dashboard/course/" + id}/>
            ) : (
                <Loading/>
            )}
        </div>
    )
}