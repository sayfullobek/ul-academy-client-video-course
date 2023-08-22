import {Tables} from "../../../component/Tables";
import {FaqHeaders, MessageHeader} from "../../../utils/TableHeaders";
import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";

export const Message = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            const res = await EmbeddedGet(APP_API.message, "embedded")
            setMessages(res)
            setLoading(true)
        } catch (err) {

        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"container d-flex align-items-end justify-content-center flex-column"}>
            <Tables tableName={"Xabar"} bodies={messages} headers={MessageHeader} status={"Xabar"} loading={loading}
                    getAll={getAll}/>
        </div>
    )
}