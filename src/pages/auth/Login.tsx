import {Link, useNavigate} from "react-router-dom";
import {InputMask} from "primereact/inputmask";
import React, {useState} from "react";
import logo from '../../assets/ul.jpg'
import loginPhoto from '../../assets/login.png'
import {Footer} from "../../component/Footer";
import {LoginHandler} from "../../service/connectService/AuthService";

export const Login = () => {
    const navigate = useNavigate()
    const [phone, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const loginArr = [
        {name: 'Telefon raqamingizni kiriting', val: phone, setVal: setPhoneNumber, type: 'number'},
        {name: 'Parolingizni kiriting', val: password, setVal: setPassword, type: 'password'},
    ]

    const login = async () => {
        const middle = phone.split("-")
        const start = middle.toString().split(" ")[0].substr(1, 2)
        const end = phone.split("-")
        const phoneNumber = start + middle[0].split(" ")[1] + end[1]
        const data = {phoneNumber, password}
        await LoginHandler(data, navigate)
    }
    return (
        <div className="app app-login p-0 m-0">
            <div className="row g-0 app-auth-wrapper">
                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto">
                            <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img
                                className="logo-icon me-2" src={logo} alt="logo"/></a></div>
                            <h2 className="auth-heading text-center mb-5">Xisobga kirish</h2>
                            <div className="auth-form-container text-start">
                                <form className="auth-form login-form">
                                    {loginArr.map(item => (
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
                                        <button onClick={() => login()} type={"button"}
                                                className="btn btn-success app-btn-primary w-100 theme-btn mx-auto">
                                            Xisobga kirish
                                        </button>
                                    </div>
                                </form>
                                <div className="auth-option text-center pt-5">Menda hozircha xisob mavjud emas? <Link
                                    to={"/auth/register"}>Ro'yxatdan o'tish</Link> <a
                                    className="text-link"/>
                                </div>
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