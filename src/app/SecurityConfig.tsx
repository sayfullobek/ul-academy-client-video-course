import {Route} from 'react-router-dom'
import {NotFoundPage} from "../pages/NotFoundPage";

export const SecurityConfig = ({path, element}) => {
    const role = localStorage.getItem("__user_role__")
    const checked = role === "ADMIN" || role === "DIRECTOR"
    return (
        <>
            <Route path={checked ? path : "/*"} element={checked ? element : <NotFoundPage/>}/>
        </>
    )
}