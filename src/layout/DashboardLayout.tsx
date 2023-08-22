import {SideBar} from "../component/SideBar";
import {Header} from "../component/Header";
import {Outlet} from 'react-router-dom'
import {Footer} from "../component/Footer";
import {NotFoundPage} from "../pages/NotFoundPage";

export const DashboardLayout = () => {
    const role = localStorage.getItem("__user_role__")
    const token = localStorage.getItem("__ids__user__token")
    return (
        <>
            {role && token ? (
                <header className="app-header fixed-top">
                    <div>
                        <Header/>
                    </div>
                    <div className={"d-flex"}>
                        <div style={{width: '18%'}}>
                            <SideBar/>
                        </div>
                        <div style={{width: '82%', height: '100vh', overflow: 'auto'}}>
                            <div className="app-wrapper m-0">
                                <Outlet/>
                                <Footer/>
                            </div>
                        </div>
                    </div>
                </header>
            ) : (
                <NotFoundPage/>
            )}
        </>
    )
}