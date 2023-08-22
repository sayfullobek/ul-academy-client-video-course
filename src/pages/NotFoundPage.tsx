import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    const role = localStorage.getItem("__user_role__")
    const token = localStorage.getItem("__ids__user__token")
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
            <h1 className={"text-center text-danger"}>404</h1>
            <h1 className={"text-center text-success"}>Bunday Sahifa Topilmadi</h1>
            <Link to={role && token ? "/" : "/auth/login"} className={"btn btn-link"}>Asosiy menyuga qaytish</Link>
        </div>
    )
}