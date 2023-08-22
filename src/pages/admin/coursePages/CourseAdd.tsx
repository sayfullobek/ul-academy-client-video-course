import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {SaveAbout} from "../../../service/connectService/AppService";
import {Forms} from "../../../component/Forms";
import {APP_API} from "../../../service/Api";

export const CourseAdd = () => {
    const navigate = useNavigate()
    const [name, setCourseName] = useState('')
    const [price, setCoursePrice] = useState('')
    const [sale, setCourseSale] = useState('')
    const [teacherTheCourseInfo, setCourseTeacherInfo] = useState('')
    const [courseDescription, setCourseDescription] = useState('')
    const [courseAbout, setCourseAbout] = useState('')
    const [levelName, setCourseLevel] = useState('')
    const level = [
        {name: "EASY"},
        {name: "JUNIOR"},
        {name: "MIDDLE"},
        {name: "SENIOR"},
    ]
    const status = [
        {name: "NEW"},
        {name: "OLD"},
    ]
    const arr = [
        {
            name: 'Kurs nomi',
            placeholder: 'Kurs  nomini kiriting',
            type: 'text',
            value: name,
            setValue: setCourseName
        }, {
            name: 'Kurs narxi',
            placeholder: 'Kurs  narxini kiriting',
            type: 'number',
            value: price,
            setValue: setCoursePrice
        }, {
            name: 'Kurs chegirmasi',
            placeholder: 'Kurs  chegirmasi kiriting',
            type: 'number',
            value: sale,
            setValue: setCourseSale
        }, {
            name: "Kurs o'qtuvchisi haqida ma'lumot",
            placeholder: 'Kurs  o\'qtuvchisi haqida ma\'lumot kiriting',
            type: 'text',
            value: teacherTheCourseInfo,
            setValue: setCourseTeacherInfo
        }, {
            name: "Kurs  haqida ma'lumot",
            placeholder: 'Kurs haqida ma\'lumot kiriting',
            type: 'text',
            value: courseDescription,
            setValue: setCourseDescription
        }, {
            name: "Kurs haqidagi chiroyli gap",
            placeholder: 'Kurs haqidagi chiroyli gap',
            type: 'text',
            value: courseAbout,
            setValue: setCourseAbout
        }, {
            name: "Kurs  darajasi ",
            placeholder: 'Kurs darajasini tanlang',
            type: 'select',
            arr: level,
            value: levelName,
            setValue: setCourseLevel
        }
    ]
    const saveCourse = async () => {
        const photoId = localStorage.getItem("course_photoId")
        const data = {
            name,
            price,
            sale,
            photoId,
            userId: localStorage.getItem("__id__"),
            teacherTheCourseInfo,
            courseDescription,
            courseAbout,
            levelName,
        }
        await SaveAbout(APP_API.course, data, "add", "", navigate, "course", "admin")
    }
    return (
        <div>
            <Forms name={"Kurslarim"} status={""} functions={saveCourse} inputs={arr}
                   link={"/auth/dashboard/course"}/>
        </div>
    )
}