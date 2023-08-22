import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {RegisterHandler} from "../../service/connectService/AuthService";
import {Footer} from "../../component/Footer";
import {InputMask} from "primereact/inputmask";
import logo from '../../assets/ul.jpg'

export const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const navigate = useNavigate();
    const registerArr = [
        {name: 'Ismingizni kiriting', val: firstName, setVal: setFirstName, type: 'text'},
        {name: 'Familiyangizni kiriting', val: lastName, setVal: setLastName, type: 'text'},
        {name: 'Telefon raqamingizni kiriting', val: phone, setVal: setPhoneNumber, type: 'number'},
        {name: 'Parolingizni kiriting', val: password, setVal: setPassword, type: 'password'},
        {name: 'Tasdiqlash uchun parolni qayta kiriting', val: prePassword, setVal: setPrePassword, type: 'password'},
    ]

    const registerHandler = async () => {
        const middle = phone.split("-")
        const start = middle.toString().split(" ")[0].substr(1, 2)
        const end = phone.split("-")
        const phoneNumber = start + middle[0].split(" ")[1] + end[1]
        const data = {
            firstName, lastName, phoneNumber, password, prePassword, roleId: 3
        }

        await RegisterHandler(data, navigate)
    }
    return (
        <div className="app app-signup p-0 m-0">
            <div className="row g-0 app-auth-wrapper">
                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto">
                            <div className="app-auth-branding mb-4"><Link className="app-logo" to={"/"}><img
                                className="logo-icon me-2" src={logo} alt="logo"/></Link></div>
                            <h2 className="auth-heading text-center mb-4">Ro'yxatdan o'tish</h2>

                            <div className="auth-form-container text-start mx-auto">
                                <form className="auth-form auth-signup-form">
                                    {registerArr.map(item => (
                                        <div className="email mb-3">
                                            <label className="sr-only" htmlFor="signup-email">Your Name</label>
                                            {item.type === "number" ? (
                                                <InputMask id="phone" className={"form-control"} mask="(99) 999-9999"
                                                           value={item.val}
                                                           placeholder="(99) 999-9999"
                                                           onChange={(e) => item.setVal(e.value)}/>
                                            ) : (
                                                <input id="signup-name" name={item.name} type={item.type}
                                                       className="form-control" placeholder={item.name} value={item.val}
                                                       onChange={e => item.setVal(e.target.value)}/>
                                            )}
                                        </div>
                                    ))}
                                    <div className="text-center">
                                        <button type="button" onClick={() => registerHandler()}
                                                className="btn app-btn-primary btn-success w-100 theme-btn mx-auto">
                                            Ro'yxatdan o'tish
                                        </button>
                                    </div>
                                </form>
                                <div className="auth-option text-center pt-5">Menda boshqa xisob mavjud? <Link
                                    className="text-link" to={"/auth/login"}>Log in</Link></div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                    <div className="auth-background-holder">
                    </div>
                    <div className="auth-background-mask"/>
                </div>
            </div>
        </div>
    )
}