import {Forms} from "../../../component/Forms";
import {useState} from "react";
import {SaveAbout} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const AddFAQ = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [faqAbout, setFaqAbout] = useState('')
    const faqAddArr = [
        {name: 'FAQ nomi', placeholder: 'FAQ nomini kiriting', type: 'text', value: name, setValue: setName},
        {
            name: 'FAQ haqida',
            placeholder: "FAQ haqidagi ma'lumotni kiriting",
            type: 'editor',
            value: faqAbout,
            setValue: setFaqAbout
        },
    ]
    const addFAQ = async () => {
        if (name.trim().length === 0) {
            return toast.error("Nomi bo'lishi shart")
        }
        if (faqAbout.trim().length === 0) {
            return toast.error("Ma'lumot bo'lishi shart")
        }
        const data = {
            name, faqAbout
        }
        await SaveAbout(APP_API.FAQ, data, "add", "", navigate, "FAQ", "admin")
    }

    return (
        <div>
            <Forms link={"/auth/dashboard/FAQ"} name={"FAQ"} status={"add"} inputs={faqAddArr} functions={addFAQ}/>
        </div>
    )
}