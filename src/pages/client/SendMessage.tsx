import {useState} from "react";
import {toast} from "react-toastify";
import {SaveAbout} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";
import {useNavigate} from "react-router-dom";

export const SendMessage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState(localStorage.getItem("__firstName__"))
    const [surname, setSurname] = useState(localStorage.getItem("__lastName__"))
    const [message, setMessage] = useState('')
    const send_message_handler = async () => {
        if (name.trim().length === 0) {
            return toast.error("Ismingiz bo'lishi shart")
        }
        if (surname.trim().length === 0) {
            return toast.error("Familiyangiz bo'lishi shart")
        }
        if (message.trim().length === 0) {
            return toast.error("Xabaringiz bo'lishi shart")
        }
        const data = {name, surname, message}
        await SaveAbout(APP_API.message, data, "add", "", navigate, "send-message", "user")
        setMessage("")
    }
    return (
        <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
                <h1 className="app-page-title">Overview</h1>
                <div className="col-12 auth-main-col text-center">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto col-8">
                            <div className="app-auth-branding mb-4">UL Academy</div>
                            <h2 className="auth-heading text-center mb-5">Xabar yuboring</h2>
                            <div className="auth-form-container text-start">
                                <form className="auth-form login-form">
                                    <div className={"row"}>
                                        <div className="mb-3 col-md-6 col-12">
                                            <label className="sr-only" htmlFor="name">ism</label>
                                            <input name="name" type="text"
                                                   className="form-control" value={name}
                                                   onChange={(e) => setName(e.target.value)}
                                                   placeholder="Ismingizni kiriting"
                                                   required="required"/>
                                        </div>
                                        <div className="mb-3 col-md-6 col-12">
                                            <label className="sr-only" htmlFor="surname">familiya</label>
                                            <input name="surname" type="text"
                                                   className="form-control" value={surname}
                                                   onChange={(e) => setSurname(e.target.value)} placeholder="familiya"
                                                   required="required"/>
                                        </div>
                                    </div>
                                    <div className="mb-3 col-12">
                                        <label className="sr-only" htmlFor="message">xabar</label>
                                        <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                                  name="message" style={{height: '10rem'}}
                                                  className={"w-100 form-control"} placeholder="familiya"/>
                                    </div>
                                    <div className="text-center">
                                        <button type="button"
                                                className="btn btn-success w-100 theme-btn mx-auto"
                                                onClick={() => send_message_handler()}>
                                            Yuborish
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}