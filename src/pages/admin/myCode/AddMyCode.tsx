import {useState} from "react";
import {Forms} from "../../../component/Forms";
import {SaveMyCode} from "../../../service/connectService/AppService";
import {useNavigate} from "react-router-dom";

export const AddMyCode = () => {
    const navigate = useNavigate()
    const [codeName, setCodeName] = useState('')
    const arr = [
        {
            name: 'Amalish ish nomi',
            placeholder: 'Amaliy ish nomini kiriting',
            type: 'text',
            value: codeName,
            setValue: setCodeName
        },
    ]
    const saveCode = async () => {
        const photoId = localStorage.getItem("code_photoId")
        const codeId = localStorage.getItem("code_id")
        const data = {
            codeName, photoId, codeId
        }
        await SaveMyCode(data, navigate)
    }
    return (
        <div>
            <Forms name={"Amalish ishlarim"} status={""} functions={saveCode} inputs={arr}
                   link={"/auth/dashboard/codes"}/>
        </div>
    )
}