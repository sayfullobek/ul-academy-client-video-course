import {BASE_URL} from "./BaseUrl";

export const APP_API = {
    //************** start auth **************//
    register: '/auth/register',
    login: '/auth/login',
    //************** end auth **************//

    //************** start app **************//
    FAQ: "/FAQ",
    course: "/course",
    myCodes: "/my-code",
    message: "/message",
    downloadPhoto: BASE_URL + '/attachment/download/?id=',
    statistic: '/auth/statistic',
    module: '/course-in/module'
    //************** end app **************//
}