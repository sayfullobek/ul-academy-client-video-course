import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardClient} from "../pages/client/DashboardClient";
import {DashboardLayout} from "../layout/DashboardLayout";
import {CourseClient} from "../pages/client/CourseClient";
import {CodesClient} from "../pages/client/CodesClient";
import {ContactClient} from "../pages/client/ContactClient";
import {FAQClient} from "../pages/client/FAQClient";
import {SendMessage} from "../pages/client/SendMessage";
import {Bootcamp} from "../pages/client/Bootcamp";
import {NotFoundPage} from "../pages/NotFoundPage";
import {Notification} from "../pages/client/Notification";
import {Login} from "../pages/auth/Login";
import {Register} from "../pages/auth/Register";
import {FaqAdmin} from "../pages/admin/FAQ/FaqAdmin";
import {AddFAQ} from "../pages/admin/FAQ/AddFAQ";
import {MyCodes} from "../pages/admin/myCode/myCodes";
import {MyCodeUpload} from "../pages/admin/myCode/MyCodeUpload";
import {MyCodePhotoUpload} from "../pages/admin/myCode/MyCodePhotoUpload";
import {AddMyCode} from "../pages/admin/myCode/AddMyCode";
import {CoursePage} from "../pages/admin/coursePages/CoursePage";
import {CourseUploadPhoto} from "../pages/admin/coursePages/CourseUploadPhoto";
import {CourseAdd} from "../pages/admin/coursePages/CourseAdd";
import {CourseItem} from "../pages/admin/coursePages/CourseItem";
import {Message} from "../pages/admin/message/Message";
import {OneCourseClient} from "../pages/client/OneCourseClient";
import {Account} from "../pages/settings/Account";
import {Dashboard} from "../pages/admin/Dashboard";
import {UserTerminal} from "../pages/client/Terminal";
import {AddModuleByCourse} from "../pages/admin/coursePages/AddModuleByCourse";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<DashboardLayout/>}>
                    <Route index element={<DashboardClient/>}/>
                    <Route path={"/course"} element={<CourseClient/>}/>
                    <Route path={"/course/:id"} element={<OneCourseClient/>}/>
                    <Route path={"/codes"} element={<CodesClient/>}/>
                    <Route path={"/contact"} element={<ContactClient/>}/>
                    <Route path={"/FAQ"} element={<FAQClient/>}/>
                    <Route path={"/send-message"} element={<SendMessage/>}/>
                    <Route path={"/bootcamp"} element={<Bootcamp/>}/>
                    <Route path={"/notification"} element={<Notification/>}/>
                    <Route path={"/terminal"} element={<UserTerminal/>}/>

                    {/*<SecurityConfig path={"/auth/dashboard/course"} object={<Course/>}/>*/}
                    <Route path={"/auth/dashboard"} element={<Dashboard/>}/>
                    <Route path={"/auth/dashboard/course"} element={<CoursePage/>}/>
                    <Route path={"/auth/dashboard/course/:id"} element={<CourseItem/>}/>
                    <Route path={"/auth/dashboard/course/upload-photo"} element={<CourseUploadPhoto/>}/>
                    <Route path={"/auth/dashboard/course/add"} element={<CourseAdd/>}/>
                    <Route path={"/auth/dashboard/course/:id/module-add"} element={<AddModuleByCourse/>}/>
                    <Route path={"/auth/dashboard/FAQ"} element={<FaqAdmin/>}/>
                    <Route path={"/auth/dashboard/FAQ/add"} element={<AddFAQ/>}/>
                    <Route path={"/auth/dashboard/codes"} element={<MyCodes/>}/>
                    <Route path={"/auth/dashboard/codes/upload-photo"} element={<MyCodePhotoUpload/>}/>
                    <Route path={"/auth/dashboard/codes/my-code-upload"} element={<MyCodeUpload/>}/>
                    <Route path={"/auth/dashboard/codes/add"} element={<AddMyCode/>}/>
                    <Route path={"/auth/dashboard/message"} element={<Message/>}/>


                    <Route path={"/auth/settings"} element={<Account/>}/>
                </Route>
                <Route path={"/auth/login"} element={<Login/>}/>
                <Route path={"/auth/register"} element={<Register/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
