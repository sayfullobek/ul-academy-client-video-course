import {Tables} from "../../../component/Tables";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {useEffect, useState} from "react";
import {FaqHeaders} from "../../../utils/TableHeaders";
import {Link} from "react-router-dom";

export const FaqAdmin = () => {
    const [faqs, setFaq] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.FAQ, "embedded")
            setFaq(res)
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"container d-flex align-items-end justify-content-center flex-column"}>
            <Link className={"mt-5 btn btn-success"} to={"/auth/dashboard/FAQ/add"}>Yaratish</Link>
            <Tables tableName={"FAQ"} bodies={faqs} headers={FaqHeaders} status={"FAQ"} loading={loading}
                    getAll={getAll}/>
        </div>
    )
}